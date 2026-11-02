"use client";

import { useEffect, useId, useState } from "react";
import { hireDurations, hireTechnologies } from "@/lib/content";
import { useHire } from "./HireContext";
import { Button } from "./ui";

const REQUIRED_MESSAGE = "This field is required.";

function FieldError({ message }) {
  if (!message) {
    return null;
  }
  return <p className="mt-1 text-sm text-red-500">{message}</p>;
}

export default function HireModal() {
  const { isOpen, closeHire } = useHire();
  const titleId = useId();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) {
      setErrors({});
      setStatus("");
      setSuccess(false);
      return undefined;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event) {
      if (event.key === "Escape") {
        closeHire();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, closeHire]);

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
    if (!String(data.get("fullname") || "").trim()) {
      nextErrors.fullname = REQUIRED_MESSAGE;
    }
    if (!String(data.get("email") || "").trim()) {
      nextErrors.email = REQUIRED_MESSAGE;
    }
    if (!String(data.get("company") || "").trim()) {
      nextErrors.company = REQUIRED_MESSAGE;
    }
    if (!String(data.get("technology") || "").trim()) {
      nextErrors.technology = REQUIRED_MESSAGE;
    }
    if (!String(data.get("duration") || "").trim()) {
      nextErrors.duration = REQUIRED_MESSAGE;
    }
    if (!String(data.get("requirements") || "").trim()) {
      nextErrors.requirements = REQUIRED_MESSAGE;
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
      const response = await fetch("https://api.aranathgroup.com/api/hireadeveloper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          secretKey: "shiv",
        },
        body: JSON.stringify({
          name: data.get("fullname") || "",
          email: data.get("email") || "",
          phone: data.get("number") || "Not provided",
          company: data.get("company") || "",
          technology: data.get("technology") || "",
          duration: data.get("duration") || "",
          message: data.get("requirements") || "",
        }),
      });

      if (!response.ok) {
        setStatus("An error occurred, please try again !");
        return;
      }

      setSuccess(true);
      setStatus("Message sent successfully!");
      setErrors({});
      form.reset();
    } catch {
      setStatus("An error occurred, please try again !");
    } finally {
      setSending(false);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-paper/70 backdrop-blur-sm"
        aria-label="Close hire developer dialog"
        onClick={closeHire}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-edge-strong bg-snow p-6 shadow-lift sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Dedicated talent
            </p>
            <h2 id={titleId} className="font-display text-2xl font-semibold text-ink">
              Hire Developer
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Do you want to hire dedicated sources on a contract basis?
            </p>
          </div>
          <button
            type="button"
            onClick={closeHire}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-edge-strong text-muted hover:text-ink"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form noValidate onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-ink">
            Full Name<span className="text-red-500">*</span>
            <input
              type="text"
              name="fullname"
              placeholder="Enter full name"
              className="input-field mt-2"
              onChange={() => clearError("fullname")}
            />
            <FieldError message={errors.fullname} />
          </label>
          <label className="block text-sm font-medium text-ink">
            Email<span className="text-red-500">*</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input-field mt-2"
              onChange={() => clearError("email")}
            />
            <FieldError message={errors.email} />
          </label>
          <label className="block text-sm font-medium text-ink">
            Phone Number (Optional)
            <input
              type="text"
              name="number"
              placeholder="Ex. +9156234785"
              className="input-field mt-2"
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Company Name<span className="text-red-500">*</span>
            <input
              type="text"
              name="company"
              placeholder="Company Inc."
              className="input-field mt-2"
              onChange={() => clearError("company")}
            />
            <FieldError message={errors.company} />
          </label>
          <label className="block text-sm font-medium text-ink sm:col-span-2">
            Technology<span className="text-red-500">*</span>
            <select
              name="technology"
              defaultValue=""
              className="input-field mt-2"
              onChange={() => clearError("technology")}
            >
              <option value="" disabled>
                Select technology
              </option>
              {hireTechnologies.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <FieldError message={errors.technology} />
          </label>
          <fieldset className="sm:col-span-2">
            <legend className="mb-3 text-sm font-medium text-ink">
              Duration (in months)<span className="text-red-500">*</span>
            </legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {hireDurations.map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-center justify-center rounded-full border border-edge-strong bg-paper px-3 py-2 text-sm has-[:checked]:border-accent has-[:checked]:bg-accent/10 has-[:checked]:text-accent"
                >
                  <input
                    type="radio"
                    name="duration"
                    value={item}
                    className="sr-only"
                    onChange={() => clearError("duration")}
                  />
                  {item}
                </label>
              ))}
            </div>
            <FieldError message={errors.duration} />
          </fieldset>
          <label className="block text-sm font-medium text-ink sm:col-span-2">
            Project Requirements<span className="text-red-500">*</span>
            <textarea
              name="requirements"
              rows="4"
              placeholder="Tell us about your project and the type of developer you're looking for..."
              className="input-field mt-2 min-h-28"
              onChange={() => clearError("requirements")}
            />
            <FieldError message={errors.requirements} />
          </label>
          {status ? (
            <p
              className={`sm:col-span-2 text-sm ${
                success ? "text-accent" : "text-rose-400"
              }`}
            >
              {status}
            </p>
          ) : null}
          <div className="flex flex-col-reverse gap-3 sm:col-span-2 sm:flex-row sm:justify-end">
            <Button variant="ghost" onClick={closeHire}>
              Close
            </Button>
            <Button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
