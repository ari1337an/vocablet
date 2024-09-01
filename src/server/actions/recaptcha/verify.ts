"use server";

export default async function VerifyReCaptchaToken(recaptchaToken: string) {
  try {
    // Validate the reCAPTCHA token
    const secret = process.env.RECAPTCHA_SECRET;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaToken}`;

    const recaptchaResponse = await fetch(verificationUrl, {
      method: "POST",
    });
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      throw new Error("reCAPTCHA validation failed!");
    }
  } catch (error) {
    throw new Error("reCAPTCHA validation failed!");
  }
}
