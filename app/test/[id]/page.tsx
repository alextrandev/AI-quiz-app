"use client";

import { capitalize } from "@/app/lib/util";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TestPage() {
  // get current quiz topic from url
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState<number>(0);
  // track current question number
  const [currQuestion, setCurrQuestion] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const handleAnswerClick = (answer: string) => {
    // update score state
    setScore(score => answer === questions[currQuestion].answer ? score + 1 : score);

    // questions count
    if (currQuestion < questions.length - 1) {
      setCurrQuestion(count => count + 1);
    } else {
      // if this is the last question, wait for score to update before redicrect to score page
      setTimeout(() => {
        router
          .push("/score?score="
            + (answer === questions[currQuestion].answer ? score + 1 : score)
          );
        router.push(`&topic=${capitalize(id)}`);
      }, 100);
    }
  }

  if (loading) {
    return <h3 className='font-semibold text-2xl mb-3'>Loading...</h3>;
  }

  return (
    <main className="w-full min-h-screen p-6 flex flex-col items-center justify-center">
      <h2 className="font-bold text-3xl mb-4 text-blue-500">
        {capitalize(id)}
      </h2>
      <h3 className="font-semibold text-2xl mb-3">
        Question: {currQuestion + 1} of {questions.length}
      </h3>
      <h3 className="text-xl mb-4">
        {questions[currQuestion]?.question}
      </h3>

      <div className="flex flex-col lg:w-1/3 mb-6">
        {questions[currQuestion]?.options.map((option, i) => (
          <button
            className="p-4 bg-gray-300 rounded-xl mb-6 min-w[200px] text-black text-lg
           hover:bg-red-400 hover:text-white"
            key={i}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </main>
  )
}
