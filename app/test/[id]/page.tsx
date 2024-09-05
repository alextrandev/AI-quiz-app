import { capitalize } from "@/app/lib/util";

export default function page() {

  return (
    <main className="w-full min-h-screen p-6 flex flex-col items-center justify-center">
      <h2 className="font-bold text-3xl mb-4 text-blue-500">
        Topics...
      </h2>
      <h3 className="font-semibold text-2xl mb-3">
        Question: 1 of x
      </h3>
      <h3 className="text-xl mb-4">
        Question go here...
      </h3>

      <div className="flex flex-col lg:w-1/3 mb-6">
        {/* mapping question choice buttons */}
        <button
          className="p-4 bg-gray-300 rounded-xl mb-6 min-w[200px] text-black text-lg
           hover:bg-red-400 hover:text-white"
          key={0}
        // onClick={() => { }}
        >
          Answer go here...
        </button>
        <button
          className="p-4 bg-gray-300 rounded-xl mb-6 min-w[200px] text-black text-lg
           hover:bg-red-400 hover:text-white"
          key={0}
        // onClick={() => { }}
        >
          Answer go here...
        </button>
        <button
          className="p-4 bg-gray-300 rounded-xl mb-6 min-w[200px] text-black text-lg
           hover:bg-red-400 hover:text-white"
          key={0}
        // onClick={() => { }}
        >
          Answer go here...
        </button>
        <button
          className="p-4 bg-gray-300 rounded-xl mb-6 min-w[200px] text-black text-lg
           hover:bg-red-400 hover:text-white"
          key={0}
        // onClick={() => { }}
        >
          Answer go here...
        </button>
      </div>
    </main>
  )
}
