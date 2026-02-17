export default function IngredientInput() {
  return (
    <section className="container mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        ada bahan apa nii?
      </h2>
      <p className="text-gray-600 mb-6">
        Masukkan bahan makanan, kami carikan resepnya.
      </p>
      
      <div className="flex gap-2 max-w-lg mx-auto">
        <input 
          type="text" 
          placeholder="Contoh: telur, tomat, nasi..." 
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
          Cari Resep
        </button>
      </div>
    </section>
  );
}