import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/thesis", label: "Thesis" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-6 lg:px-12 bg-white border-b border-zinc-200">
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <Image 
            src="/logo.svg" 
            alt="Tiro Logo" 
            width={24} 
            height={24} 
            className="w-6 h-6 md:w-7 md:h-7"
          />
          <span className="text-xl md:text-2xl font-bold tracking-tight">tiro</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-zinc-500 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href ? "text-black font-semibold" : "hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <a href="mailto:contact@tiro.vc" className="hidden sm:flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-none hover:bg-zinc-800 transition-colors text-sm font-medium">
                Let's Talk
                <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </a>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className="md:hidden relative z-50 p-2 text-black focus:outline-none"
                aria-label="Toggle menu"
            >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                    <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
            </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-6">
            <nav className="flex flex-col gap-8 text-3xl font-serif">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`transition-colors ${
                            pathname === link.href ? "text-black italic" : "text-zinc-400 hover:text-black"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="mt-auto pb-12">
                 <p className="text-zinc-500 text-sm mb-4">Get in touch</p>
                 <a href="mailto:contact@tiro.vc" className="text-xl text-black underline decoration-zinc-300 hover:text-zinc-600 transition-colors">
                    contact@tiro.vc
                 </a>
            </div>
        </div>
      </div>
    </>
  );
}
