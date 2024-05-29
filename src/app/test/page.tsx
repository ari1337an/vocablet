"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [response, setResponse] = useState("Loading...");

  const testMessage = "Hello, World!";

  useEffect(() => {
    const fetchData = async () => {
    try {
        const res = await fetch("/api/agents/general", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
            },
            body: testMessage,
        });
        const data = await res.json();
        setResponse(data);
    } catch (error) {
        setResponse("Error fetching data");
    }
    };

    fetchData();
  }, []);

  return <div className="min-h-screen flex flex-row items-center justify-center">{JSON.stringify(response)}</div>;
}
