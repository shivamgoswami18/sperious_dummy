import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "inquiries.json");

async function readInquiries() {
  try {
    const raw = await readFile(dataFile, "utf8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function saveInquiry(inquiry) {
  await mkdir(dataDir, { recursive: true });
  const inquiries = await readInquiries();
  inquiries.push({
    ...inquiry,
    createdAt: new Date().toISOString(),
  });
  await writeFile(dataFile, JSON.stringify(inquiries, null, 2));
}
