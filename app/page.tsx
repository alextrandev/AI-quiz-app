"use client";

import { useRouter } from "next/navigation";
import { quizCaterories } from "./lib/util";

export default function Home() {
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/test/${id}`)
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-blue-600">Welcome to AI Quiz Test</h2>
      <p className="text-lg text-gray-500 mb-5">
        Please select a quiz topic...
      </p>
      <div className="px-4 flex flex-col gap-4">
        {quizCaterories.map((category, i) => (
          <section className="w-full flex justify-center items-center space-x-5" key={i}>
            {category.map(topic => (
              <button
                key={topic.id}
                className="bg-blue-500 text-white px-5 py-3 text-xl rounded-md"
                onClick={() => { handleClick(topic.id) }}
              >
                {topic.name}
              </button>
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}
