import Link from "next/link";
import { getRecipes } from "@/lib/recipes";

export const metadata = {
  title: "Recipes",
};

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-10">
      <div className="space-y-3">
        <Link className="text-sm text-zinc-600 hover:text-zinc-950" href="/">
          Back home
        </Link>
        <h1 className="text-3xl font-semibold text-zinc-950">Recipes</h1>
        <p className="text-zinc-600">
          A simple server-rendered list from DummyJSON.
        </p>
      </div>

      <ul className="grid gap-4 sm:grid-cols-2">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link
              className="block rounded border border-zinc-200 bg-white p-4 transition hover:border-zinc-400"
              href={`/recipes/${recipe.id}`}
            >
              <h2 className="text-lg font-medium text-zinc-950">
                {recipe.name}
              </h2>
              <p className="mt-2 text-sm text-zinc-600">
                {recipe.cuisine} • {recipe.difficulty} •{" "}
                {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Rating: {recipe.rating}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
