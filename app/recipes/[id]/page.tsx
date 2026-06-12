import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe } from "@/lib/recipes";

type RecipePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: RecipePageProps) {
  const { id } = await params;

  try {
    const recipe = await getRecipe(id);

    return {
      title: recipe.name,
    };
  } catch {
    return {
      title: "Recipe not found",
    };
  }
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { id } = await params;
  const recipe = await getRecipe(id).catch(() => null);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-10">
      <div className="space-y-3">
        <Link
          className="text-sm text-zinc-600 hover:text-zinc-950"
          href="/recipes"
        >
          Back to recipes
        </Link>
        <h1 className="text-3xl font-semibold text-zinc-950">{recipe.name}</h1>
        <p className="text-zinc-600">
          {recipe.cuisine} • {recipe.difficulty} • Serves {recipe.servings}
        </p>
      </div>

      <section className="rounded border border-zinc-200 bg-white p-5">
        <h2 className="text-xl font-medium text-zinc-950">Details</h2>
        <dl className="mt-4 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
          <div>
            <dt className="font-medium text-zinc-950">Prep time</dt>
            <dd>{recipe.prepTimeMinutes} minutes</dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-950">Cook time</dt>
            <dd>{recipe.cookTimeMinutes} minutes</dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-950">Meal type</dt>
            <dd>{recipe.mealType.join(", ")}</dd>
          </div>
          <div>
            <dt className="font-medium text-zinc-950">Rating</dt>
            <dd>{recipe.rating}</dd>
          </div>
        </dl>
      </section>

      <section className="rounded border border-zinc-200 bg-white p-5">
        <h2 className="text-xl font-medium text-zinc-950">Ingredients</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section className="rounded border border-zinc-200 bg-white p-5">
        <h2 className="text-xl font-medium text-zinc-950">Instructions</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-zinc-700">
          {recipe.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
