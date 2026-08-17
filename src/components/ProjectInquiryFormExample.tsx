/**
 * Example Project Inquiry Form Component using Brevo Service
 *
 * This demonstrates how to use the Brevo project inquiry hook in a React component.
 */

import { useState } from "react";
import { useProjectInquiry } from "../services/brevo-hooks";

interface ProjectInquiryData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialFormData: ProjectInquiryData = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

const projectTypes = [
  "ERPNext Implementation",
  "ERPNext Customization",
  "ERPNext Integration",
  "Startup MVP Development",
  "Web3 / Crypto Wallet",
  "Custom Software Development",
  "Consulting & Advisory",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "1-2 months",
  "3-6 months",
  "6-12 months",
  "12+ months",
  "Flexible",
];

export function ProjectInquiryFormExample() {
  const [formData, setFormData] = useState<ProjectInquiryData>(initialFormData);
  const { submit, loading, error, success, reset } = useProjectInquiry();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await submit(formData);

    if (result.success) {
      setFormData(initialFormData);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-inquiry-form" noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="pi-name">Name *</label>
          <input
            type="text"
            id="pi-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
            disabled={loading}
            placeholder="Your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pi-email">Email *</label>
          <input
            type="email"
            id="pi-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
            disabled={loading}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="pi-company">Company (optional)</label>
        <input
          type="text"
          id="pi-company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="form-control"
          disabled={loading}
          placeholder="Your company name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="pi-project-type">Project Type *</label>
        <select
          id="pi-project-type"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="form-select"
          disabled={loading}
        >
          <option value="">Select project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="pi-budget">Budget Range</label>
          <select
            id="pi-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="form-select"
            disabled={loading}
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="pi-timeline">Timeline</label>
          <select
            id="pi-timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="form-select"
            disabled={loading}
          >
            <option value="">Select timeline</option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="pi-message">Project Details *</label>
        <textarea
          id="pi-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="form-control"
          disabled={loading}
          placeholder="Tell us about your project, goals, requirements, and any specific features you need..."
        />
      </div>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success" role="alert">
          Thank you! Your project inquiry has been submitted successfully. Our
          team will review it and get back to you within one business day.
        </div>
      )}

      <button
        type="submit"
        className="btn btn-orange-red hover:btn-tra-white rounded-lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}

export default ProjectInquiryFormExample;
