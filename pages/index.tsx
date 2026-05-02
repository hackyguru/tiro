import Head from "next/head";
import Image from "next/image";
import { Geist, Playfair_Display } from "next/font/google";
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
        className={`${geistSans.variable} ${playfair.variable} h-screen overflow-hidden bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white`}
      >
        <main className="flex flex-col lg:flex-row h-screen">
          {/* Left Text Column */}
          <div className="lg:w-[50%] px-6 lg:px-12 flex flex-col justify-between py-12 lg:h-screen">
            <FadeIn delay={100}>
              <div className="text-zinc-900 lg:pt-8">
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src="/tiro-logo.svg"
                    alt="Tiro"
                    width={48}
                    height={48}
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                  <h1 className="font-sans text-4xl lg:text-5xl tracking-tight leading-none">
                    tiro
                  </h1>
                </div>
                <span className="text-zinc-500 text-sm font-sans">/ˈtʌɪrəʊ/</span>

                <div className="mt-4 space-y-1">
                  <p className="text-zinc-500 italic font-serif text-sm">noun</p>
                  <p className="text-zinc-400 text-xs font-medium">
                    noun: <strong className="text-zinc-900 font-bold">tiro</strong>
                  </p>
                  <p className="text-lg lg:text-xl text-zinc-900 font-serif leading-snug pt-1">
                    a beginner or novice.
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={150}>
                <div className="max-w-xl space-y-4 text-zinc-700 text-sm lg:text-base leading-relaxed">
                  <p>
                    Tiro is a boutique fund backing independent builders at the earliest stage - the
                    moment of conviction, long before the team, the deck or the round.
                  </p>
                  <p>
                    Our size keeps us hands-on and decisive. Beyond capital, we offer the patient
                    compounding of taste, distribution and a network of operators who have walked
                    this path before. Tiro's investments span beyond GTM products - most of our investments span around research, tooling and service oriented teams.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <a
                  href="mailto:contact@tiro.vc"
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black transition-colors"
                >
                  contact@tiro.vc
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </FadeIn>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:w-[50%] flex-1 lg:flex-none lg:h-screen relative bg-blue-50 overflow-hidden">
            <Image
              src="/hero.png"
              alt="Steps"
              fill
              priority
              className="object-cover transition-transform duration-1000 hover:scale-105 dithered"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </main>
      </div>
    </>
  );
}
