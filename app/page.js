import IngredientInput from './components/IngredientInput';
import RecipeCard from './components/RecipeCard';

export default function Home() {
  return (
    <main className="min-h-screen pb-10">
      {/* Form Input */}
      <IngredientInput/>
      
      {/* Daftar Resep */}
      <section className="container mx-auto p-8">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          🍳 Rekomendasi Untukmu
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Nanti ini akan di-looping dari API, sekarang dummy dulu */}
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </section>
    </main>
  );
}