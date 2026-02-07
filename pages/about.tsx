import Head from "next/head";
import Image from "next/image";
import { Geist, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import FadeIn from "@/components/FadeIn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - tiro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`${geistSans.variable} ${playfair.variable} min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white`}
      >
        <Header />

        <main className="flex flex-col min-h-screen pt-22 lg:h-screen lg:overflow-hidden">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left Content Column */}
            <div className="lg:w-[50%] pl-6 lg:pl-12 pr-6 flex flex-col pt-12 lg:h-full lg:overflow-y-auto no-scrollbar">
              <FadeIn className="grow">
              <div className="max-w-xl">
                 <h1 className="font-serif text-4xl lg:text-7xl leading-tight tracking-tight text-zinc-900 mb-6">
                  Small team, scaled impact
                </h1>
                <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mb-12">
                  We stay intentionally lean so we can work closely with every founder guiding strategy, sharpening decisions, and accelerating what matters.
                </p>

                <div className="grid gap-6 mb-12">
                  <div>
                    <h3 className="font-serif text-2xl text-zinc-900">Kumaraguru Thambidurai</h3>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">General Partner</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-zinc-900">David Chen</h3>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">General Partner</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-zinc-900">Iker</h3>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">General Partner</p>
                  </div>
                </div>

                <div className="pb-12">
                  <button className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors rounded-none">
                    Learn More
                  </button>
                </div>
              </div>
              </FadeIn>
            </div>


            {/* Right Image Column */}
            <div className="lg:w-[50%] h-[50vh] lg:h-full relative bg-slate-100 overflow-hidden">
               <Image 
                 src="/team.png"
                 alt="People"
                 fill
                 className="object-cover transition-transform duration-1000 hover:scale-105 dithered"
               />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
