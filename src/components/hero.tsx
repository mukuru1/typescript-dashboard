export default function Hero() {
  return (
    <section className="flex items-center justify-between px-20 py-20">
      <div className="max-w-xl">
        <p className="text-sm text-gray-500 mb-4">
          English courses for every Level & Goal
        </p>

        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Learn English <br/>
          <span className="text-orange-500">Online</span> with Real <br/>
          Teachers
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          Improve your speaking, grammar, and confidence with<br/>
          interactive lessons, live sessions, and a learning method<br/>
          based on real-life situations
        </p>

        <div className="flex gap-4 mb-8">
          <button className="bg-black text-white px-6 py-3 rounded-xl text-sm">
            Start Learning for Free
          </button>

          <button className="bg-gray-100 px-6 py-3 rounded-xl text-sm">
            Explore the Method
          </button>
        </div>

        <div className="flex items-center gap-3 text-sm font-semibold">
          <div className="flex -space-x-2">
            <img src="/images/1.webp" className="w-8 h-8 rounded-full border-2 border-white"/>
            <img src="/images/8.jpg" className="w-8 h-8 rounded-full border-2 border-white"/>
            <img src="/images/3.jpg" className="w-8 h-8 rounded-full border-2 border-white"/>
          </div>
          <span>30M+ Students world wide</span>
        </div>
      </div>

      <img src="/images/4.jpeg" className="w-[650px] rounded-2xl"/>
    </section>
  );
}
