import { NextResponse } from "next/server";
import {connect} from "@/dbConfig/dbConfig";

connect()

export async function GET() {
   return NextResponse.json({
    message: "Hello from backend 🚀",
  });
}