export default function RecipeCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition hover:-translate-y-1">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-400 text-6xl">🍽️</span>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">Nasi Goreng Spesial</h3>
        <p className="text-sm text-gray-500 mt-2">
          ⏱️ 20 Menit • 🍽️ 2 Porsi
        </p>
        <div className="mt-3 flex gap-2">
          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
            Mudah
          </span>
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
            350 kkal
          </span>
        </div>
      </div>
    </div>
  );
}