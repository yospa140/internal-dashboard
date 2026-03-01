import { NextResponse } from "next/server";
connect();

export async function GET() {
  await connect();
  return NextResponse.json({ message: "Hello" });
}