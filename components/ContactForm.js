"use client";

import { useState } from "react";
import { Button } from "./ui";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setSending(true);
    setStatus("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          name: data.get("name") || "",
          email: data.get("email_id") || "",
          msg_subject: data.get("msg_subject") || "",
          phone_number: data.get("phone_number") || "",
          message: data.get("message") || "",
        }).toString(),
      });

      const text = (await response.text()).trim();
      if (text === "success") {
        form.reset();
        setSuccess(true);
        setStatus("Message Submitted!");
      } else {
        setStatus(text || "Something went wrong :(");
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
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2"
    >
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="Name"
        className="input-field"
      />
      <input
        type="email"
        name="email_id"
        id="email_id"
        required
        placeholder="Email"
        className="input-field"
      />
      <input
        type="text"
        name="phone_number"
        id="phone_number"
        required
        placeholder="Phone"
        pattern="^[0-9]{10,12}$"
        className="input-field"
      />
      <input
        type="text"
        name="msg_subject"
        id="msg_subject"
        required
        placeholder="Subject"
        className="input-field"
      />
      <textarea
        name="message"
        id="message"
        rows="5"
        required
        placeholder="Your Message"
        className="input-field sm:col-span-2 min-h-36"
      />
      <div className="sm:col-span-2">
        <Button type="submit" disabled={sending} className="w-full sm:w-auto">
          {sending ? "Sending..." : "Send Message"}
        </Button>
        {status ? (
          <p
            id="msgSubmit"
            className={`mt-4 text-sm ${
              success ? "text-emerald-600" : "text-red-600"
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
