import Head from "next/head";
import Link from "next/link";
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

export default function Thesis() {
  return (
    <>
      <Head>
        <title>Our Thesis - Tiro</title>
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
                  Investing in the <span className="italic">invisible</span>
                </h1>
                <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mb-8">
                  The most valuable companies of the next decade are being built today, often in markets that data hasn't yet validated. We invest in founders who see what others don't.
                </p>
                <div className="space-y-8 mb-12">
                   <FadeIn delay={100}>
                   <div>
                      <h3 className="font-serif text-2xl text-zinc-900 mb-2">Public Goods</h3>
                      <p className="text-zinc-600">Backing breakthrough innovations that solve fundamental problems in society.</p>
                   </div>
                   </FadeIn>
                   <FadeIn delay={200}>
                   <div>
                      <h3 className="font-serif text-2xl text-zinc-900 mb-2">Ecosystem enablers</h3>
                      <p className="text-zinc-600">Software that lives behind the scenes to support and enhance existing software ecosystem.</p>
                   </div>
                   </FadeIn>
                   <FadeIn delay={300}>
                   <div>
                      <h3 className="font-serif text-2xl text-zinc-900 mb-2">Decentralized & Centralized Systems</h3>
                      <p className="text-zinc-600">Infrastructure that enables a more open, free and ownership-driven internet economy.</p>
                   </div>
                   </FadeIn>
                </div>

                <div className="pb-12">
                  <Link href="/memo" className="inline-block bg-black text-white px-8 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors rounded-none">
                    Read Full Memo
                  </Link>
                </div>
              </div>
              </FadeIn>
            </div>


            {/* Right Image Column */}
            <div className="lg:w-[50%] h-[50vh] lg:h-full relative bg-slate-100 overflow-hidden">
               <Image 
                 src="/thesis.png"
                 alt="Hand"
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
