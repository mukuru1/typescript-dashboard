export default function cards() {
  return (
    <section className="bg-gray-50 px-20 py-20 text-center">
      <p className="text-sm text-green-500 mb-3">How it Works</p>

      <h2 className="text-4xl font-extrabold mb-4">
        A Simple and Smart Way <br /> to Learn English
      </h2>

      <p className="text-gray-600 mb-12">
        Our method combines audio, interactive exercises, and teacher<br />
        support to give you a solid foundation.
      </p>

      <div className="grid grid-cols-4 gap-5 text-left">
        {[
          "Learn from Real Situations",
          "Practice What You Learn",
          "Learn with Live Teachers",
          "Track Your Progress",
        ].map((title, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl p-4 ${
              i === 0 ? "border-2 border-lime-400" : ""
            }`}
          >
            <img src={`/images/card${i + 1}.jpg`} className="rounded-lg mb-4" />
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 mb-3">
              Short, interactive lessons with real-life content.
            </p>
            <button className="bg-lime-400 px-4 py-2 rounded-full text-sm">
              Action
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
