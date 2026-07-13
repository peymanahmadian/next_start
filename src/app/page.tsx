"use client";

import { useState } from "react";

import { TextBox } from "@/components";
export default function Home() {
  const [textValue, setTextValue] = useState("");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-12 font-sans">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">
            TextBox demo
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            This shows a controlled input with two-way binding.
          </p>
        </div>

        <TextBox value={textValue} onValueChange={setTextValue} />

        <div className="w-full rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-700">
          Parent state: <span className="font-medium text-zinc-950">{textValue || "Empty"}</span>
        </div>
      </main>
    </div>
  );
}
