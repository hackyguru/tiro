import Head from "next/head";
import Link from "next/link";
import { Geist, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - tiro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`${geistSans.variable} ${playfair.variable} min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white`}
      >
        <Header />

        <main className="flex flex-col min-h-screen pt-22 lg:h-screen lg:overflow-hidden">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left Content Column */}
            <div className="lg:w-[50%] pl-6 lg:pl-12 pr-6 flex flex-col pt-12 lg:h-full justify-center">
              <div className="max-w-xl">
                 <h1 className="font-serif text-4xl lg:text-7xl leading-tight tracking-tight text-zinc-900 mb-6">
                  Lost in the void
                </h1>
                <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mb-8">
                  The page you are looking for doesn't exist or is currently in stealth mode.
                </p>
                <div className="pb-12">
                  <Link href="/" className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors rounded-none inline-block">
                    Return Home
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Content Column - Empty/Visual */}
            <div className="lg:w-[50%] h-[50vh] lg:h-full bg-zinc-50 flex items-center justify-center border-l border-zinc-100">
               <div className="text-9xl font-serif text-zinc-200 select-none">
                 404
               </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
