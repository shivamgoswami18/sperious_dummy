import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/inquiries";

export async function POST(request) {
  const contentType = request.headers.get("content-type") || "";
  let payload = {};

  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else {
    const form = await request.formData();
    payload = Object.fromEntries(form.entries());
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || payload.email_id || "").trim();
  const msg_subject = String(payload.msg_subject || "").trim();
  const phone_number = String(payload.phone_number || "").trim();
  const message = String(payload.message || "").trim();

  let errorMSG = "";
  if (!name) errorMSG += "Name is required ";
  if (!email) errorMSG += "Email is required ";
  if (!msg_subject) errorMSG += "Subject is required ";
  if (!phone_number) errorMSG += "Number is required ";
  if (!message) errorMSG += "Message is required ";

  if (errorMSG) {
    return new NextResponse(errorMSG, {
      status: 400,
      headers: { "Content-Type": "text/plain" },
    });
  }

  try {
    await saveInquiry({
      type: "contact",
      name,
      email,
      subject: msg_subject,
      phone: phone_number,
      message,
    });

    return new NextResponse("success", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch {
    return new NextResponse("Something went wrong :(", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
