import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">TASK 01</h1>
        <ul className="flex space-x-6 text-white">
          {["Home", "Features", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-cyan-400 cursor-pointer transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
