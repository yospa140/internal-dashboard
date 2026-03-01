import { NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
connect();

export async function GET() {
  await connect();
  return NextResponse.json({ message: "Hello" });
}