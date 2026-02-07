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
        <title>tiro - Early-stage accelerator</title>
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
              <FadeIn delay={200}>
                <div className="flex gap-4 mt-8">
                  <button className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors rounded-none">
                    Apply Now
                  </button>
                  <button className="border border-black text-black px-6 py-3 text-sm font-medium hover:bg-zinc-50 transition-colors rounded-none">
                    Learn More
                  </button>
                </div>
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
              <p className="text-white text-lg font-normal leading-relaxed drop-shadow-sm">
                Ship faster, scale smarter. We help you turn your side project into a sustainable business.
              </p>
              </FadeIn>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
