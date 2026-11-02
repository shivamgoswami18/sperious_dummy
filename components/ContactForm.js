"use client";

import { useState } from "react";
import { Button } from "./ui";

const REQUIRED_MESSAGE = "This field is required.";

function FieldError({ message }) {
  if (!message) {
    return null;
  }
  return <p className="mt-1 text-sm text-red-500">{message}</p>;
}

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  function clearError(name) {
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function validate(data) {
    const nextErrors = {};
    if (!String(data.get("name") || "").trim()) {
      nextErrors.name = REQUIRED_MESSAGE;
    }
    if (!String(data.get("email_id") || "").trim()) {
      nextErrors.email_id = REQUIRED_MESSAGE;
    }
    if (!String(data.get("message") || "").trim()) {
      nextErrors.message = REQUIRED_MESSAGE;
    }
    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);

    setErrors(nextErrors);
    setStatus("");
    setSuccess(false);

    if (Object.keys(nextErrors).length) {
      return;
    }

    setSending(true);

    try {
      const response = await fetch("https://api.aranathgroup.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          secretKey: "shiv",
        },
        body: JSON.stringify({
          name: data.get("name") || "",
          email: data.get("email_id") || "",
          phone: data.get("phone_number") || "",
          company: data.get("msg_subject") || "",
          message: data.get("message") || "",
        }),
      });

      const result = await response.json();
      if (response.ok) {
        form.reset();
        setErrors({});
        setSuccess(true);
        setStatus("Message Submitted!");
      } else {
        setStatus(result.message || "Something went wrong :(");
      }
    } catch {
      setStatus("Something went wrong :(");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      id="contactForm"
      method="post"
      noValidate
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2"
    >
      <label className="block text-sm font-medium text-ink">
        Name<span className="text-red-500">*</span>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="input-field mt-2"
          onChange={() => clearError("name")}
        />
        <FieldError message={errors.name} />
      </label>
      <label className="block text-sm font-medium text-ink">
        Email<span className="text-red-500">*</span>
        <input
          type="email"
          name="email_id"
          id="email_id"
          placeholder="Email"
          className="input-field mt-2"
          onChange={() => clearError("email_id")}
        />
        <FieldError message={errors.email_id} />
      </label>
      <label className="block text-sm font-medium text-ink">
        Phone number
        <input
          type="tel"
          name="phone_number"
          id="phone_number"
          placeholder="Phone"
          className="input-field mt-2"
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        Company
        <input
          type="text"
          name="msg_subject"
          id="msg_subject"
          placeholder="Company"
          className="input-field mt-2"
        />
      </label>
      <label className="block text-sm font-medium text-ink sm:col-span-2">
        Message<span className="text-red-500">*</span>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Your Message"
          className="input-field mt-2 min-h-36"
          onChange={() => clearError("message")}
        />
        <FieldError message={errors.message} />
      </label>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={sending} className="w-full sm:w-auto">
          {sending ? "Sending..." : "Send Message"}
        </Button>
        {status ? (
          <p
            id="msgSubmit"
            className={`mt-4 text-sm ${
              success ? "text-accent" : "text-rose-400"
            }`}
          >
            {status}
          </p>
        ) : (
          <div id="msgSubmit" className="hidden" />
        )}
      </div>
    </form>
  );
}
