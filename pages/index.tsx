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

export default function Home() {
  return (
    <>
      <Head>
        <title>Tiro VC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`${geistSans.variable} ${playfair.variable} min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white`}
      >
        <Header />

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row min-h-screen pt-22">
          {/* Left Text Column */}
          <div className="lg:w-[50%] pl-6 lg:pl-12 pr-6 flex flex-col pt-12 overflow-y-auto no-scrollbar lg:h-[calc(100vh-88px)]">
            <FadeIn>
              <div className="mb-12 lg:mb-auto">
                <p className="text-zinc-500 font-medium tracking-wide text-sm uppercase">
                  Early-stage accelerator for indie projects
                </p>
              </div>
            </FadeIn>

            <div className="mt-12 lg:mt-auto mb-12">
              <FadeIn delay={100}>
                <h1 className="max-w-4xl font-serif text-4xl lg:text-7xl leading-tight tracking-tight text-zinc-900">
                  Fueling the <span className="italic">ambition</span> of independent builders
                </h1>
              </FadeIn>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:w-[50%] h-[50vh] lg:h-auto relative bg-blue-50 overflow-hidden">
            <Image
              src="/hero.png"
              alt="Steps"
              fill
              priority
              className="object-cover transition-transform duration-1000 hover:scale-105 dithered"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Glassmorphic Card */}
            <div className="absolute bottom-8 left-8 lg:left-12 max-w-md p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <FadeIn delay={400}>
                <div>
                  <div className="mb-3">
                    <h2 className="text-4xl text-white tracking-tight leading-none mb-1 font-sans">tiro</h2>
                    <span className="text-white/80 text-sm font-sans">/ˈtʌɪrəʊ/</span>
                  </div>
                  
                  <div className="space-y-1">
                      <p className="text-white/80 italic font-serif text-sm">noun</p>
                      <p className="text-white/60 text-xs font-medium mb-1">noun: <strong className="text-white font-bold">tiro</strong></p>
                      <p className="text-xl text-white font-serif leading-tight">
                          a beginner or novice.
                      </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
