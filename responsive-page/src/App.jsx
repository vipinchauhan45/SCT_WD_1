import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#0D0D1D] min-h-screen text-white font-sans">
      <Navbar />
      <section className="pt-24 text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Responsive Landing Page</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Create an interactive navigation menu that changes color or style when hovering over a menu item.
          The navigation menu should have a fixed position and be visible on all pages.
        </p>
      </section>

      <section className="mt-20 grid md:grid-cols-2 gap-10 px-10 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-2">Fixed Navbar</h3>
          <p className="text-gray-300">Navbar stays at the top on scroll and adapts background for visibility.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-2xl font-semibold mb-2">Hover Effects</h3>
          <p className="text-gray-300">Menu items change color when hovered for better UX.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
