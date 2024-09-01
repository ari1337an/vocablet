"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_IO_API_KEY);

export default async function sendEmail(
  to: string,
  subject: string,
  bodyHtml: string,
  subdomain: string = "no-reply"
) {
  try {
    const { data, error } = await resend.emails.send({
      from: `${process.env.NEXT_PUBLIC_BRAND_NAME} <${subdomain}@${process.env.AWS_SES_DOMAIN}>`,
      to: [to],
      subject: subject,
      html: bodyHtml,
    });

    if (error) {
      throw new Error("Failed to send email.");
    }
  } catch (error) {
    throw new Error("Failed to send email.");
  }
}

// import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
// import { AwsCredentialIdentity } from "@aws-sdk/types";

// export default async function sendEmail(
//   to: string,
//   subject: string,
//   bodyHtml: string,
//   subdomain: string = "no-reply"
// ) {
//   try {
//     const client = new SESClient({
//       region: process.env.AWS_REGION,
//       credentials: {
//         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//       } as AwsCredentialIdentity,
//     });

//     const input = {
//       // SendEmailRequest
//       Source: `${subdomain}@${process.env.AWS_SES_DOMAIN}`, // required
//       Destination: {
//         // Destination
//         ToAddresses: [
//           // AddressList
//           to,
//         ],
//       },
//       Message: {
//         // Message
//         Subject: {
//           // Content
//           Data: subject, // required
//           Charset: "UTF-8",
//         },
//         Body: {
//           // Body
//           Html: {
//             Data: bodyHtml, // required
//             Charset: "UTF-8",
//           },
//         },
//       },
//     };
//     const command = new SendEmailCommand(input);
//     await client.send(command);
//   } catch (error) {
//     throw new Error("Failed to send email.")
//   }
// }
