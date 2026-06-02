const features = [
  "Music DNA Analysis",
  "Listening Archetypes",
  "Mood Spectrum",
  "Genre Breakdown",
  "Alter Ego Persona",
  "Shareable Cards",
];

export default function Features() {
  return (
    <section className="py-20 bg-zinc-900 text-white text-center">

      <h2 className="text-4xl font-bold mb-10">Features</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">

        {features.map((item, index) => (
          <div key={index} className="p-6 bg-black border border-white/10 rounded-xl">
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}
