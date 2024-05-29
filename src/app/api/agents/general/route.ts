import GeneralAgentCompletion from "@/server/actions/agents/general/completion";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const query = await request.text(); // TODO: change this later

    // Call the completion function
    const data = await GeneralAgentCompletion(query);

    // Check if the completion function was successful
    if (!data.success)
      throw new Error(data.message as string | "Completion error!");

    // Return the completion response
    return Response.json(
      { success: true, message: data.message },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Completion error!" },
      { status: 500 }
    );
  }
}
