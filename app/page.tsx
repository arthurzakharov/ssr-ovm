import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-6 px-6 py-16">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-zinc-950">
          DummyJSON recipes demo
        </h1>
        <p className="max-w-xl text-zinc-600">
          This template includes a simple recipes list and dynamic recipe detail
          pages fetched from DummyJSON.
        </p>
      </div>

      <Link
        className="w-fit rounded border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:border-zinc-500"
        href="/recipes"
      >
        View recipes
      </Link>
    </main>
  );
}
