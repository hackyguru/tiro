import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto pt-6 pb-6 border-t border-zinc-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-zinc-400 font-medium tracking-wide uppercase">
        <div className="flex items-center gap-2">
            <Image src="/tiro-logo.svg" alt="Tiro" width={16} height={16} className="opacity-50 grayscale" />
            <p>&copy; {new Date().getFullYear()} Tiro Ventures</p>
        </div>
        <div className="flex gap-6">
          <a href="https://x.com/tiro_vc" className="hover:text-black transition-colors">Twitter</a>
          <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="mailto:contact@tiro.vc" className="hover:text-black transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
