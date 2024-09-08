import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { topic } = await req.json();
  console.log({ topic });
  return NextResponse.json({ message: "Fetch complete" }, { status: 200 });
}