import { NextResponse } from "next/server";
import {connect} from "@/dbConfig/dConfig";
fetch("/api/hello")
connect()

export async function GET() {
   return NextResponse.json({
    message: "Hello from backend 🚀",
  });
}