import { NextResponse } from "next/server";
import Quiz from "@/app/(models)/Quiz";

export async function GET() {
  try {
    const quiz = await Quiz.find();

    return NextResponse.json({ quiz: quiz }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
