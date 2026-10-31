import { NextResponse } from "next/server";
import { saveInquiry } from "@/lib/inquiries";

export async function POST(request) {
  const payload = await request.json();
  const fullname = String(payload.fullname || "").trim();
  const email = String(payload.email || "").trim();
  const number = String(payload.number || "").trim();
  const technology = String(payload.technology || "").trim();
  const duration = String(payload.duration || "").trim();

  if (!fullname || !email || !number || !technology || !duration) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    await saveInquiry({
      type: "hire-developer",
      fullname,
      email,
      phone: number,
      technology,
      duration,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "An error occurred, please try again !" },
      { status: 500 }
    );
  }
}
