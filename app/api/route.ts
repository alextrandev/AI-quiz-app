import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import sampleQuestion from "@/app/lib/sample.json";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  // here is the requested topic
  const { topic } = await req.json();

  // template prompt for openAI
  const prompt = `Generate 10 distinct questions on ${topic} and ensure they are in JSON format containing an id, topic which is ${topic}, a question attribute containing the question, an options array of 3 options, and an answer property. Please ensure that the options array is shuffled to ensure that the answer does not retain a single position.
    - Please don't make the answers too obvious and lengthy.
    - Ensure the questions are unique and not repetitive.
    - The questions should not be too simple but intermediate level.
    - Return only the JSON object containing the questions.
    You can use this as a sample: ${JSON.stringify(sampleQuestion)}
  `;

  // generate the questions for AI
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  // processing the response result
  const aiQuestions = completion.choices[0].message.content;
  const questions = JSON.parse(aiQuestions!);

  return NextResponse.json({ message: "Fetch complete" }, { status: 200 });
}