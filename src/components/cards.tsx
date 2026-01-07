export default function Cards(): TSX.Element {
  return (
    <section className="bg-gray-50 px-20 py-20 text-center">
      <p className="text-sm text-green-500 mb-3">How it Works!!!</p>

      <h2 id="courses" className="text-4xl font-extrabold mb-4">
        A Simple and Smart Way
        <br />
        to Learn English
      </h2>

      <p className="text-black-600 mb-1">
        Our method combines audio, interactive exercises, and teacher
        <br />
        support to give you a solid foundation, no matter your level or learning goals.
      </p>

      <div className="grid grid-cols-4 gap-5 text-left">
        <div className="bg-green-50 rounded-2xl p-4 border-black">
          <img src="6.jpg" alt="demo" className="rounded-lg mb-4" />
          <h3 className="font-semibold mb-1">Learn from Real Situations</h3>

          <p className="text-sm text-gray-600 mb-3">
            Short, interactive lessons with real-life content.
          </p>

          <button className="bg-black px-4 py-2 rounded-full text-sm text-white">
            Watch Demo
          </button>
        </div>

        <div className="bg-green-50 rounded-2xl p-4 border-black">
          <img src="6.jpg" alt="demo" className="rounded-lg mb-4" />
          <h3 className="font-semibold mb-1">Learn from Real Situations</h3>

          <p className="text-sm text-gray-600 mb-3">
            Short, interactive lessons with real-life content.
          </p>

          <button className="bg-black px-4 py-2 rounded-full text-sm text-white">
            Watch Demo
          </button>
        </div>

        <div className="bg-green-50 rounded-2xl p-4 border-black">
          <img src="6.jpg" alt="demo" className="rounded-lg mb-4" />
          <h3 className="font-semibold mb-1">Learn from Real Situations</h3>

          <p className="text-sm text-gray-600 mb-3">
            Short, interactive lessons with real-life content.
          </p>

          <button className="bg-black px-4 py-2 rounded-full text-sm text-white">
            Watch Demo
          </button>
        </div>

        <div className="bg-green-50 rounded-2xl p-4 border-black">
          <img src="6.jpg" alt="demo" className="rounded-lg mb-4" />
          <h3 className="font-semibold mb-1">Learn from Real Situations</h3>

          <p className="text-sm text-gray-600 mb-3">
            Short, interactive lessons with real-life content.
          </p>

          <button className="bg-black px-4 py-2 rounded-full text-sm text-white">
            Watch Demo
          </button>
        </div>


      </div>
    </section>
  );
}
  

