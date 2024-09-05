"use client";

import { firstTopics, secondTopics } from "./lib/util";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-blue-600">Welcome to AI Quiz Test</h2>
      <p className="text-lg text-gray-500 mb-5">
        Please select a quiz topic...
      </p>
      <div className="px-4">
        <section className="w-full flex items-center space-x-5 mb-4">
          {firstTopics.map(topic => (
            <button
              key={topic.id}
              className="bg-blue-500 text-white px-5 py-3 text-xl rounded-md"
              onClick={() => { /* to do */ }}
            >
              {topic.name}
            </button>
          ))}
        </section>

        <section className="w-full flex items-center space-x-5">
          {secondTopics.map(topic => (
            <button
              key={topic.id}
              className="bg-blue-500 text-white px-5 py-3 text-xl rounded-md"
              onClick={() => { /* to do */ }}
            >
              {topic.name}
            </button>
          ))}
        </section>
      </div>
    </main>
  )
}
