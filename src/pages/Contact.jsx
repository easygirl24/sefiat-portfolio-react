
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitError("");

    if (status === "success" || status === "error") {
      setStatus("idle");
    }
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Your message must contain at least 10 characters.";
    }

    return newErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);
    setSubmitError("");

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    
const response = await fetch(
  "https://formspree.io/f/maeejyya",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  }
);

const result = await response.json();

if (!response.ok) {
  throw new Error(
    result.errors?.map((error) => error.message).join(" ") ||
      "Unable to send your message. Please try again."
  );
}
setStatus("success");
setFormData(initialForm);
setErrors({});

}

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <p className="font-semibold uppercase tracking-widest text-brand">
          Get in touch
        </p>

        <h1 className="mt-2 text-4xl font-extrabold">
          Let's work together.
        </h1>

        <p className="mt-4 text-gray-600">
          Have a project or opportunity in mind? Send me a message.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="name" className="mb-2 block font-semibold">
            Full name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand"
            placeholder="Enter your name"
            disabled={status === "submitting"}
          />

          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-700">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-semibold">
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand"
            placeholder="you@example.com"
            disabled={status === "submitting"}
          />

          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-700">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-semibold">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "message-error" : undefined
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-brand"
            placeholder="Tell me about your project..."
            disabled={status === "submitting"}
          />

          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-700">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting"
            ? "Sending..."
            : "Send message"}
        </button>

        <div aria-live="polite" role="status">
          {status === "success" && (
            <p className="font-medium text-green-700">
              Submission successful! Your message has been
              emailed.
            </p>
          )}

          {status === "error" && !submitError && (
            <p className="font-medium text-red-700">
              Please correct the errors above and try again.
            </p>
          )}

          {submitError && (
            <p className="font-medium text-red-700">
              {submitError}
            </p>
          )}
        </div>
      </form>
    </main>
  );
}

export default Contact;
