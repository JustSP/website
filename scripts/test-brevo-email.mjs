/**
 * Test script to send a test email via Brevo API
 * Run with: node scripts/test-brevo-email.mjs
 */

import { config } from "dotenv";
import { resolve } from "path";

// Load .env.local explicitly
config({ path: resolve(process.cwd(), ".env.local") });

// Brevo API configuration
const BREVO_API_URL = "https://api.brevo.com/v3";
const BREVO_API_KEY = process.env.VITE_BREVO_API_KEY;

if (!BREVO_API_KEY) {
  console.error("❌ VITE_BREVO_API_KEY not found in environment variables");
  process.exit(1);
}

console.log("🔑 Brevo API Key found:", BREVO_API_KEY.substring(0, 20) + "...");

// Test email parameters
const testEmail = {
  sender: {
    name: "WISH Test",
    email: "connect@ww-hub.com",
  },
  to: [{ email: "connect@ww-hub.com" }], // Send to yourself for testing
  subject: "🧪 Test Email from WISH Website - Brevo Integration",
  htmlContent: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Test Email - WISH Brevo Integration</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🧪 Test Email</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0;">WISH Website - Brevo Integration Test</p>
      </div>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #eee;">
        <p style="font-size: 18px; color: #333; margin-top: 0;">Congratulations! 🎉</p>
        <p style="color: #666;">This test email confirms that your <strong>Brevo (Sendinblue) integration</strong> is working correctly.</p>
        
        <div style="background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <h3 style="color: #FF6B35; margin-top: 0;">Test Details:</h3>
          <ul style="color: #666; line-height: 2;">
            <li><strong>Timestamp:</strong> ${new Date().toISOString()}</li>
            <li><strong>Environment:</strong> ${process.env.NODE_ENV || "development"}</li>
            <li><strong>API Endpoint:</strong> ${BREVO_API_URL}/smtp/email</li>
            <li><strong>Sender:</strong> connect@ww-hub.com</li>
          </ul>
        </div>
        
        <p style="color: #666;">If you received this email, your Brevo integration is properly configured and ready to send:</p>
        <ul style="color: #666; line-height: 2;">
          <li>Contact form submissions</li>
          <li>Project inquiry notifications</li>
          <li>Newsletter confirmations</li>
          <li>Transactional emails</li>
        </ul>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://www.ww-hub.com" style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); color: white; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block;">Visit WISH Website</a>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
          This is a test email sent from the WISH website Brevo integration test script.
        </p>
      </div>
    </body>
    </html>
  `,
  textContent: `
Test Email - WISH Brevo Integration

Congratulations! 🎉

This test email confirms that your Brevo (Sendinblue) integration is working correctly.

Test Details:
- Timestamp: ${new Date().toISOString()}
- Environment: ${process.env.NODE_ENV || "development"}
- API Endpoint: ${BREVO_API_URL}/smtp/email
- Sender: connect@ww-hub.com

If you received this email, your Brevo integration is properly configured and ready to send:
- Contact form submissions
- Project inquiry notifications
- Newsletter confirmations
- Transactional emails

Visit WISH Website: https://www.ww-hub.com

---
This is a test email sent from the WISH website Brevo integration test script.
  `,
  tags: ["test", "integration-test"],
};

async function sendTestEmail() {
  console.log("\n📧 Sending test email via Brevo API...");
  console.log("   To:", testEmail.to[0].email);
  console.log("   Subject:", testEmail.subject);

  try {
    const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
        Accept: "application/json",
      },
      body: JSON.stringify(testEmail),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("\n❌ Brevo API Error:");
      console.error("   Status:", response.status);
      console.error("   Response:", JSON.stringify(data, null, 2));
      return false;
    }

    console.log("\n✅ Test email sent successfully!");
    console.log("   Message ID:", data.messageId);
    console.log(
      "\n📬 Check your inbox at connect@ww-hub.com for the test email",
    );
    return true;
  } catch (error) {
    console.error("\n❌ Network/Request Error:");
    console.error(
      "   Error:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return false;
  }
}

// Run the test
sendTestEmail().then((success) => {
  process.exit(success ? 0 : 1);
});
