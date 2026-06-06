const { Resend } = require("resend");
require("dotenv").config({ path: ".env.local" });

async function testEmail() {
  console.log("Starting email test...");
  console.log("API Key loaded:", !!process.env.RESEND_API_KEY);
  console.log("Notification Email:", process.env.NOTIFICATION_EMAIL);

  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const result = await resend.emails.send({
      from: "Punithan Drone Pilot <onboarding@resend.dev>",
      to: process.env.NOTIFICATION_EMAIL,
      subject: "Test Email from Local Environment",
      html: "<p>This is a test email to verify Resend is working.</p>",
    });
    console.log("Send result:", result);
  } catch (error) {
    console.error("Test failed:", error);
  }
}

testEmail();
