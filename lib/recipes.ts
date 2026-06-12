const RECIPES_API_URL = "https://dummyjson.com/recipes";

export type RecipeListItem = {
  id: number;
  name: string;
  cuisine: string;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  rating: number;
};

export type Recipe = RecipeListItem & {
  ingredients: string[];
  instructions: string[];
  servings: number;
  mealType: string[];
  tags: string[];
};

type RecipesResponse = {
  recipes: RecipeListItem[];
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`DummyJSON request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getRecipes() {
  const data = await fetchJson<RecipesResponse>(RECIPES_API_URL);

  return data.recipes;
}

export async function getRecipe(id: string) {
  return fetchJson<Recipe>(`${RECIPES_API_URL}/${id}`);
}
