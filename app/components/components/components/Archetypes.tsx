const types = [
  "Explorer",
  "Dreamer",
  "Night Owl",
  "Trend Hunter",
  "Storyteller",
  "Energy Booster",
];

export default function Archetypes() {
  return (
    <section className="py-20 bg-black text-white text-center">

      <h2 className="text-4xl font-bold mb-10">Listening Archetypes</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">

        {types.map((t, i) => (
          <div key={i} className="p-6 border border-white/10 rounded-xl">
            {t}
          </div>
        ))}

      </div>

    </section>
  );
}
