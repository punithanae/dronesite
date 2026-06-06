import { Resend } from "resend";

// Removed top level resend initialization to prevent Vercel build errors if env var is missing

interface ConsultationEmailProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  preferredDate: string;
  message: string;
}

export async function sendConsultationEmail(data: ConsultationEmailProps) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set. Email not sent.");
    return { error: "RESEND_API_KEY is missing" };
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, phone, service, location, preferredDate, message } = data;

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #D4A24C 0%, #E2BD7A 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header h1 { color: #1a1a1f; margin: 0; font-size: 24px; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #D4A24C; }
          .field-label { font-weight: bold; color: #666; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
          .field-value { color: #1a1a1f; font-size: 16px; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🚁 New Consultation Request</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Client Name</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">Email Address</div>
              <div class="field-value">${email}</div>
            </div>
            <div class="field">
              <div class="field-label">Phone Number</div>
              <div class="field-value">${phone}</div>
            </div>
            <div class="field">
              <div class="field-label">Service Required</div>
              <div class="field-value">${service}</div>
            </div>
            <div class="field">
              <div class="field-label">Project Location</div>
              <div class="field-value">${location || "Not specified"}</div>
            </div>
            <div class="field">
              <div class="field-label">Preferred Date</div>
              <div class="field-value">${preferredDate || "Not specified"}</div>
            </div>
            <div class="field">
              <div class="field-label">Project Details</div>
              <div class="field-value">${message || "No additional details provided"}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Punithan Drone Pilot website contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const result = await resend.emails.send({
    from: "Punithan Drone Pilot <onboarding@resend.dev>",
    to: process.env.NOTIFICATION_EMAIL || "punithanae@gmail.com",
    reply_to: email,
    subject: `New Consultation Request from ${name} - ${service}`,
    html: emailHtml,
  });

  if (result.error) {
    console.error("Resend API Error (Admin Notification):", result.error);
  }

  return result;
}

export async function sendConfirmationEmail(
  email: string,
  name: string,
  service: string
) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set. Email not sent.");
    return { error: "RESEND_API_KEY is missing" };
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1a1a1f; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .header img { max-width: 150px; }
          .header h1 { color: #D4A24C; margin: 20px 0 0; font-size: 24px; }
          .content { background: white; padding: 40px 30px; }
          .content h2 { color: #1a1a1f; }
          .highlight { background: linear-gradient(135deg, #D4A24C 0%, #E2BD7A 100%); color: #1a1a1f; padding: 20px; border-radius: 10px; margin: 20px 0; }
          .footer { background: #1a1a1f; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; }
          .footer p { color: #888; margin: 5px 0; font-size: 12px; }
          .footer a { color: #D4A24C; text-decoration: none; }
          .social { margin: 15px 0; }
          .social a { display: inline-block; margin: 0 10px; color: #D4A24C; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>PUNITHAN DRONE PILOT</h1>
          </div>
          <div class="content">
            <h2>Thank You, ${name}!</h2>
            <p>We have received your consultation request for <strong>${service}</strong> services.</p>
            <div class="highlight">
              <p style="margin: 0;"><strong>What happens next?</strong></p>
              <p style="margin: 10px 0 0;">Our team will review your requirements and get back to you within 24 hours to discuss your project in detail.</p>
            </div>
            <p>If you have any urgent queries, feel free to reach out:</p>
            <ul>
              <li>💬 WhatsApp: +91 93616 23073</li>
              <li>✉️ Email: contact@punithanfly.com</li>
            </ul>
            <p>We look forward to elevating your perspectives!</p>
            <p><strong>Team Punithan Drone Pilot</strong></p>
          </div>
          <div class="footer">
            <div class="social">
              <a href="#">Instagram</a> |
              <a href="#">YouTube</a> |
              <a href="#">LinkedIn</a>
            </div>
            <p>DGCA Approved Drone Pilot Services</p>
            <p>Chennai, Tamil Nadu, India</p>
            <p>© 2024 Punithan Drone Pilot. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const result = await resend.emails.send({
    from: "Punithan Drone Pilot <onboarding@resend.dev>",
    to: email,
    subject: "Thank You for Your Consultation Request - Punithan Drone Pilot",
    html: emailHtml,
  });

  if (result.error) {
    console.error("Resend API Error (Client Confirmation):", result.error);
  }

  return result;
}
