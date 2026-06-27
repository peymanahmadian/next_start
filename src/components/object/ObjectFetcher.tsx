"use client";

import { useEffect, useState } from "react";

type ObjectFetcherState = {
  loading: boolean;
  error: string | null;
  data: unknown;
};

export default function ObjectFetcher() {
  const [state, setState] = useState<ObjectFetcherState>({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function loadObjects() {
      try {
        const response = await fetch("/api/object", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const json = await response.json();

        setState({
          loading: false,
          error: null,
          data: json,
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setState({
          loading: false,
          error: error instanceof Error ? error.message : "Something went wrong",
          data: null,
        });
      }
    }

    loadObjects();

    return () => controller.abort();
  }, []);

  if (state.loading) {
    return <p>Loading objects...</p>;
  }

  if (state.error) {
    return <p className="text-red-600">{state.error}</p>;
  }

  return (
    <pre className="w-full overflow-auto rounded-xl bg-zinc-100 p-4 text-sm text-zinc-900">
      {JSON.stringify(state.data, null, 2)}
    </pre>
  );
}