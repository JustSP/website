/**
 * Brevo (formerly Sendinblue) Email Service
 *
 * This service provides a unified interface for sending emails via Brevo API.
 * It can be used from any component or page in the application.
 */

// Types for Brevo API
export interface BrevoEmailParams {
  to: string | string[];
  subject: string;
  htmlContent: string;
  textContent?: string;
  sender?: {
    name: string;
    email: string;
  };
  replyTo?: {
    name: string;
    email: string;
  };
  tags?: string[];
  params?: Record<string, string>;
}

export interface BrevoContactParams {
  email: string;
  attributes?: Record<string, any>;
  listIds?: number[];
  updateEnabled?: boolean;
}

export interface BrevoResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}

export interface BrevoContactResponse {
  success: boolean;
  contactId?: number;
  error?: string;
}

// Configuration
const BREVO_API_URL = "https://api.brevo.com/v3";
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY || "";

/**
 * Send an email using Brevo API
 * @param params - Email parameters
 * @returns Promise with response
 */
export async function sendEmail(
  params: BrevoEmailParams,
): Promise<BrevoResponse> {
  if (!BREVO_API_KEY) {
    console.warn("Brevo API key not configured. Email not sent.");
    return { success: false, error: "Brevo API key not configured" };
  }

  // Handle multiple recipients
  const toEmails = Array.isArray(params.to) ? params.to : [params.to];

  const payload = {
    sender: params.sender || {
      name: "WISH",
      email: "connect@ww-hub.com",
    },
    to: toEmails.map((email) => ({ email })),
    subject: params.subject,
    htmlContent: params.htmlContent,
    textContent: params.textContent,
    replyTo: params.replyTo,
    tags: params.tags,
    params: params.params,
  };

  try {
    const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo API error:", data);
      return {
        success: false,
        error: data.message || `HTTP error ${response.status}`,
      };
    }

    return {
      success: true,
      messageId: data.messageId,
    };
  } catch (error) {
    console.error("Brevo send email error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Create or update a contact in Brevo
 * @param params - Contact parameters
 * @returns Promise with response
 */
export async function createOrUpdateContact(
  params: BrevoContactParams,
): Promise<BrevoContactResponse> {
  if (!BREVO_API_KEY) {
    console.warn("Brevo API key not configured. Contact not created/updated.");
    return { success: false, error: "Brevo API key not configured" };
  }

  const payload = {
    email: params.email,
    attributes: params.attributes || {},
    listIds: params.listIds || [],
    updateEnabled: params.updateEnabled !== false,
  };

  try {
    const response = await fetch(`${BREVO_API_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      // If contact exists, try to update
      if (response.status === 400 && data.code === "duplicate_parameter") {
        return await updateContact(
          params.email,
          params.attributes,
          params.listIds,
        );
      }
      console.error("Brevo create contact error:", data);
      return {
        success: false,
        error: data.message || `HTTP error ${response.status}`,
      };
    }

    return {
      success: true,
      contactId: data.id,
    };
  } catch (error) {
    console.error("Brevo create contact error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Update an existing contact in Brevo
 * @param email - Contact email
 * @param attributes - Contact attributes
 * @param listIds - List IDs to add contact to
 * @returns Promise with response
 */
async function updateContact(
  email: string,
  attributes?: Record<string, any>,
  listIds?: number[],
): Promise<BrevoContactResponse> {
  try {
    const response = await fetch(
      `${BREVO_API_URL}/contacts/${encodeURIComponent(email)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
          Accept: "application/json",
        },
        body: JSON.stringify({
          attributes,
          listIds: listIds || [],
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo update contact error:", data);
      return {
        success: false,
        error: data.message || `HTTP error ${response.status}`,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("Brevo update contact error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Send a contact form email
 * @param formData - Contact form data
 * @returns Promise with response
 */
export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<BrevoResponse> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
      </div>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #eee;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666; width: 120px;">Name:</td>
            <td style="padding: 10px 0; color: #333;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666;">Email:</td>
            <td style="padding: 10px 0; color: #333;"><a href="mailto:${formData.email}" style="color: #FF6B35;">${formData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666;">Subject:</td>
            <td style="padding: 10px 0; color: #333;">${formData.subject}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666; vertical-align: top;">Message:</td>
            <td style="padding: 10px 0; color: #333; white-space: pre-wrap;">${formData.message}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #999; font-size: 12px; margin: 0;">
          This email was sent from the contact form on <a href="https://www.ww-hub.com" style="color: #FF6B35;">ww-hub.com</a>
        </p>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}

---
This email was sent from the contact form on https://www.ww-hub.com
  `;

  return sendEmail({
    to: "connect@ww-hub.com",
    subject: `Contact Form: ${formData.subject}`,
    htmlContent,
    textContent,
    replyTo: {
      name: formData.name,
      email: formData.email,
    },
    tags: ["contact-form", "website"],
  });
}

/**
 * Send a newsletter subscription confirmation email
 * @param email - Subscriber email
 * @returns Promise with response
 */
export async function sendNewsletterConfirmation(
  email: string,
): Promise<BrevoResponse> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Welcome to WISH Newsletter</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to WISH! 🎉</h1>
      </div>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #eee;">
        <p style="font-size: 18px; color: #333; margin-top: 0;">Thank you for subscribing to our newsletter!</p>
        <p style="color: #666;">You'll now receive updates about:</p>
        <ul style="color: #666; line-height: 2;">
          <li>ERPNext implementation insights</li>
          <li>Startup resources and tips</li>
          <li>Web3 and crypto wallet updates</li>
          <li>Software development best practices</li>
          <li>Company news and announcements</li>
        </ul>
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://www.ww-hub.com" style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); color: white; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block;">Visit Our Website</a>
        </div>
        <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
          If you didn't sign up for this, you can <a href="#" style="color: #FF6B35;">unsubscribe here</a>.
        </p>
      </div>
    </body>
    </html>
  `;

  const textContent = `
Welcome to WISH Newsletter!

Thank you for subscribing to our newsletter!

You'll now receive updates about:
- ERPNext implementation insights
- Startup resources and tips
- Web3 and crypto wallet updates
- Software development best practices
- Company news and announcements

Visit our website: https://www.ww-hub.com

If you didn't sign up for this, you can unsubscribe.
  `;

  return sendEmail({
    to: email,
    subject: "Welcome to WISH Newsletter! 🎉",
    htmlContent,
    textContent,
    tags: ["newsletter", "welcome"],
  });
}

/**
 * Subscribe email to newsletter list in Brevo
 * @param email - Subscriber email
 * @param name - Subscriber name (optional)
 * @returns Promise with response
 */
export async function subscribeToNewsletter(
  email: string,
  name?: string,
): Promise<BrevoContactResponse> {
  // You'll need to configure your newsletter list ID in Brevo
  const NEWSLETTER_LIST_ID = parseInt(
    import.meta.env.VITE_BREVO_NEWSLETTER_LIST_ID || "0",
    10,
  );

  return createOrUpdateContact({
    email,
    attributes: name ? { FIRSTNAME: name } : {},
    listIds: NEWSLETTER_LIST_ID ? [NEWSLETTER_LIST_ID] : [],
    updateEnabled: true,
  });
}

/**
 * Send a project inquiry email
 * @param formData - Project inquiry form data
 * @returns Promise with response
 */
export async function sendProjectInquiryEmail(formData: {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
}): Promise<BrevoResponse> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Project Inquiry</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%); padding: 30px; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Project Inquiry</h1>
      </div>
      <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #eee;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666; width: 150px;">Name:</td>
            <td style="padding: 10px 0; color: #333;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666;">Email:</td>
            <td style="padding: 10px 0; color: #333;"><a href="mailto:${formData.email}" style="color: #FF6B35;">${formData.email}</a></td>
          </tr>
          ${
            formData.company
              ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666;">Company:</td>
            <td style="padding: 10px 0; color: #333;">${formData.company}</td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666;">Project Type:</td>
            <td style="padding: 10px 0; color: #333;">${formData.projectType}</td>
          </tr>
          ${
            formData.budget
              ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666;">Budget:</td>
            <td style="padding: 10px 0; color: #333;">${formData.budget}</td>
          </tr>
          `
              : ""
          }
          ${
            formData.timeline
              ? `
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666;">Timeline:</td>
            <td style="padding: 10px 0; color: #333;">${formData.timeline}</td>
          </tr>
          `
              : ""
          }
          <tr>
            <td style="padding: 10px 0; font-weight: bold; color: #666; vertical-align: top;">Message:</td>
            <td style="padding: 10px 0; color: #333; white-space: pre-wrap;">${formData.message}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="color: #999; font-size: 12px; margin: 0;">
          This inquiry was submitted from <a href="https://www.ww-hub.com" style="color: #FF6B35;">ww-hub.com</a>
        </p>
      </div>
    </body>
    </html>
  `;

  const textContent = `
New Project Inquiry

Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}` : ""}
Project Type: ${formData.projectType}
${formData.budget ? `Budget: ${formData.budget}` : ""}
${formData.timeline ? `Timeline: ${formData.timeline}` : ""}
Message: ${formData.message}

---
This inquiry was submitted from https://www.ww-hub.com
  `;

  return sendEmail({
    to: "connect@ww-hub.com",
    subject: `Project Inquiry: ${formData.projectType} - ${formData.name}`,
    htmlContent,
    textContent,
    replyTo: {
      name: formData.name,
      email: formData.email,
    },
    tags: ["project-inquiry", "website"],
  });
}

export default {
  sendEmail,
  createOrUpdateContact,
  sendContactFormEmail,
  sendNewsletterConfirmation,
  subscribeToNewsletter,
  sendProjectInquiryEmail,
};
