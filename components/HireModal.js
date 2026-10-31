"use client";

import { useEffect, useId, useState } from "react";
import { hireDurations, hireTechnologies } from "@/lib/content";
import { useHire } from "./HireContext";
import { Button } from "./ui";

export default function HireModal() {
  const { isOpen, closeHire } = useHire();
  const titleId = useId();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
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

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setSending(true);
    setStatus("");
    setSuccess(false);

    try {
      const response = await fetch("/api/hire-developer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: data.get("fullname"),
          email: data.get("email"),
          number: data.get("number"),
          technology: data.get("technology"),
          duration: data.get("duration"),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        setStatus(result.message || "An error occurred, please try again !");
        return;
      }

      setSuccess(true);
      setStatus("Message sent successfully!");
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
        className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
        aria-label="Close hire developer dialog"
        onClick={closeHire}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-line bg-white p-6 shadow-lift sm:p-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-ink">
            Full Name*
            <input
              type="text"
              name="fullname"
              placeholder="Enter full name"
              required
              className="input-field mt-2"
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Email*
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="input-field mt-2"
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Phone Number*
            <input
              type="text"
              name="number"
              placeholder="Ex. +9156234785"
              required
              className="input-field mt-2"
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Technology*
            <select
              name="technology"
              required
              defaultValue=""
              className="input-field mt-2"
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
          </label>
          <fieldset className="sm:col-span-2">
            <legend className="mb-3 text-sm font-medium text-ink">
              Duration (in months)*
            </legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {hireDurations.map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-center justify-center rounded-full border border-line bg-paper px-3 py-2 text-sm has-[:checked]:border-accent has-[:checked]:bg-white has-[:checked]:text-accent"
                >
                  <input
                    type="radio"
                    name="duration"
                    value={item}
                    required
                    className="sr-only"
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
          {status ? (
            <p
              className={`sm:col-span-2 text-sm ${
                success ? "text-emerald-600" : "text-red-600"
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
