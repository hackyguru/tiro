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
                    Built for builders, by builders
                  </h1>
                  <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mb-12">
                    Tiro is built on the belief that the best way to support builders is to be one ourselves. We are not a traditional VC fund, but a collective of cheerleaders fueling your builder energy.
                  </p>
                  <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mb-12">
                    Tiro scouts for the most ambitious builders at the earliest stages - providing them a kickstart of capital and technical expertise.
                  </p>
                  <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mb-12">
                      We are a boutique startup studio and accelerator rolled into one - focusing on research, consultancy, engineering and beyond.
                  </p>
                  <div className="grid gap-6 mb-12">
                    <div>
                      <h3 className="font-serif text-2xl text-zinc-900">Kumaraguru Thambidurai</h3>
                      <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">General Partner</p>
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-zinc-900">Carl Davis</h3>
                      <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">General Partner</p>
                    </div>
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
