# Brevo (Sendinblue) Email Service Integration

This project includes a complete Brevo email service integration that can be used from any component or page in the application.

## Features

- **Send transactional emails** - Contact forms, project inquiries, notifications
- **Newsletter management** - Subscribe users, send confirmation emails
- **Contact management** - Create/update contacts in Brevo with custom attributes
- **React hooks** - Easy-to-use hooks for forms and email sending
- **TypeScript support** - Full type safety with comprehensive interfaces

## Setup

### 1. Get Brevo API Key

1. Sign up at [Brevo](https://www.brevo.com/) (formerly Sendinblue)
2. Go to Settings → API Keys
3. Create a new API key (v3)
4. Copy the API key

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and add your API key:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
VITE_BREVO_API_KEY=your_brevo_api_key_here
VITE_BREVO_NEWSLETTER_LIST_ID=1
```

### 3. Configure Newsletter List (Optional)

1. In Brevo, go to Contacts → Lists
2. Create a new list for newsletter subscribers
3. Copy the List ID
4. Add it to `VITE_BREVO_NEWSLETTER_LIST_ID` in your `.env.local`

## Usage

### Import the Service

```typescript
// Import specific functions
import {
  sendContactFormEmail,
  sendProjectInquiryEmail,
} from "@/services/brevo";

// Or import hooks for React components
import {
  useContactForm,
  useNewsletter,
  useProjectInquiry,
} from "@/services/brevo-hooks";

// Or import everything from the barrel
import { sendEmail, useContactForm } from "@/services";
```

### Using React Hooks (Recommended for Components)

#### Contact Form

```tsx
import { useContactForm } from "@/services/brevo-hooks";

function ContactForm() {
  const { submit, loading, error, success } = useContactForm();

  const handleSubmit = async (formData) => {
    const result = await submit({
      name: "John Doe",
      email: "john@example.com",
      subject: "Inquiry",
      message: "Hello, I have a question...",
    });

    if (result.success) {
      // Form submitted successfully
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Message sent!</div>}
      <button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
```

#### Newsletter Subscription

```tsx
import { useNewsletter } from "@/services/brevo-hooks";

function NewsletterForm() {
  const { subscribe, loading, error, success } = useNewsletter();

  const handleSubmit = async (email, name) => {
    const result = await subscribe(email, name);
    // Handles both contact creation and confirmation email
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* email input, optional name input */}
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Subscribed! Check your email.</div>}
      <button type="submit" disabled={loading}>
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}
```

#### Project Inquiry Form

```tsx
import { useProjectInquiry } from "@/services/brevo-hooks";

function ProjectInquiryForm() {
  const { submit, loading, error, success } = useProjectInquiry();

  const handleSubmit = async (formData) => {
    const result = await submit({
      name: "John Doe",
      email: "john@example.com",
      company: "Acme Inc",
      projectType: "ERPNext Implementation",
      budget: "$15,000 - $50,000",
      timeline: "3-6 months",
      message: "We need an ERPNext implementation...",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Inquiry submitted!</div>}
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
```

### Using Direct Functions (For Non-React Code)

```typescript
import { sendEmail, createOrUpdateContact } from "@/services/brevo";

// Send a custom email
const result = await sendEmail({
  to: "client@example.com",
  subject: "Welcome!",
  htmlContent: "<h1>Welcome to our service</h1>",
  textContent: "Welcome to our service",
  tags: ["welcome", "onboarding"],
});

// Create/update a contact
const contactResult = await createOrUpdateContact({
  email: "client@example.com",
  attributes: { FIRSTNAME: "John", LASTNAME: "Doe" },
  listIds: [1, 2], // Add to lists
});
```

## API Reference

### Core Functions (brevo.ts)

| Function                             | Description                   |
| ------------------------------------ | ----------------------------- |
| `sendEmail(params)`                  | Send a transactional email    |
| `createOrUpdateContact(params)`      | Create or update a contact    |
| `sendContactFormEmail(formData)`     | Send contact form submission  |
| `sendNewsletterConfirmation(email)`  | Send newsletter welcome email |
| `subscribeToNewsletter(email, name)` | Subscribe to newsletter list  |
| `sendProjectInquiryEmail(formData)`  | Send project inquiry          |

### React Hooks (brevo-hooks.ts)

| Hook                  | Returns                                              |
| --------------------- | ---------------------------------------------------- |
| `useBrevoEmail()`     | `{ send, loading, error, success, reset }`           |
| `useContactForm()`    | `{ submit, loading, error, success, reset }`         |
| `useNewsletter()`     | `{ subscribe, loading, error, success, reset }`      |
| `useProjectInquiry()` | `{ submit, loading, error, success, reset }`         |
| `useBrevoContact()`   | `{ createOrUpdate, loading, error, success, reset }` |

## Example Components

The following example components are included in `src/components/`:

- `ContactFormExample.tsx` - Basic contact form
- `NewsletterFormExample.tsx` - Newsletter subscription form
- `ProjectInquiryFormExample.tsx` - Detailed project inquiry form

## Email Templates

The service includes pre-built HTML email templates for:

1. **Contact Form** - Professional layout with form data
2. **Newsletter Welcome** - Branded welcome email with CTA
3. **Project Inquiry** - Detailed project information layout

All templates are responsive and match the WISH brand colors (orange/red gradient).

## Error Handling

All functions return a response object:

```typescript
interface BrevoResponse {
  success: boolean;
  messageId?: string;
  error?: string;
}
```

Check `success` property and handle `error` message appropriately.

## Security Notes

- **Never commit API keys** - Use environment variables
- **API key permissions** - Use restricted API keys in production
- **Rate limits** - Brevo has rate limits; implement retry logic if needed
- **Validation** - Always validate form data before sending

## Testing

For development/testing without sending real emails:

1. Use Brevo's sandbox mode
2. Or set `VITE_BREVO_API_KEY` to a test key
3. Check browser console for API responses

## Migration from PHP Contact Form

The old PHP-based contact form (`assets/js/contact-form.js` → `php/contactForm.php`) can be replaced with the new React-based forms using Brevo hooks. The new implementation:

- ✅ No server-side PHP required
- ✅ Better error handling
- ✅ Type-safe
- ✅ Works with SSR/SSG
- ✅ Integrates with Brevo's contact management
- ✅ Supports newsletter subscriptions
- ✅ Professional email templates

## Support

For issues with the Brevo integration:

1. Check browser console for API errors
2. Verify API key in `.env.local`
3. Check Brevo dashboard for delivery status
4. Review Brevo API documentation: https://developers.brevo.com/
