const stats = [
  { value: "100%", label: "Mobiler Service" },
  { value: "5+", label: "Jahre Teamerfahrung" },
  { value: "ab 60€", label: "Premium-Pflege" },
  { value: "0€", label: "Aufschlag für Hausbesuch" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#C9A84C] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
