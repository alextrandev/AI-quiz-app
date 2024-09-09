"use client";

import { useRouter } from "next/navigation";
import { quizCaterories } from "./lib/util";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleClick = (id: string) => {
    router.push(`/test/${id}`)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick(inputValue);
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-blue-600">Welcome to AI Quiz Test</h2>
      <p className="text-lg text-gray-500 mb-5">
        Please select a quiz topic...
      </p>
      <div className="px-4 flex flex-col gap-4 items-center">
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
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-3 text-xl rounded-md"
          >
            Or choose your own topic
          </button>
          <input
            type="text"
            className="text-black px-5 py-3 text-xl rounded-md"
            required
            value={inputValue}
            // update the state when user input a value
            onChange={e => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </main>
  )
}
