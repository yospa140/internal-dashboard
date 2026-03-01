import { NextResponse } from "next/server";
import { connect } from "@/src/dbConfig/dbConfig";

export async function GET() {
  await connect();
  return NextResponse.json({ message: "Hello" });
}