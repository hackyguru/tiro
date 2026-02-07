import Head from "next/head";
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

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - tiro</title>
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
                  <span className="italic">Stealth</span> Portfolio
                </h1>
                <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mb-8">
                  We back founders who are building in the dark to serve the light. Due to the sensitive nature of these early-stage ventures, specific company details are currently private.
                </p>
                <div className="p-6 bg-zinc-50 border border-zinc-100 mb-12">
                    <p className="text-sm text-zinc-500 mb-4">
                        Full portfolio access is available to Limited Partners and strategic co-investors upon request.
                    </p>
                    <a href="mailto:contact@tiro.vc?subject=Portfolio%20Access%20Request" className="text-sm font-medium text-black border-b border-black pb-0.5 hover:text-zinc-600 hover:border-zinc-600 transition-colors">
                        Request Access &rarr;
                    </a>
                </div>
              </div>
              </FadeIn>
            </div>

            {/* Right Content Column - Project List */}
            <div className="lg:w-[50%] lg:h-full bg-slate-50 overflow-y-auto no-scrollbar p-6 lg:p-12 border-t lg:border-t-0 lg:border-l border-zinc-200">
               <div className="space-y-12 max-w-xl mx-auto lg:mx-0">
                  
                  {/* Project 1 */}
                  <FadeIn delay={100}>
                  <div className="group cursor-default">
                    <div className="flex items-center gap-4 mb-4">
                        {/* Blurred Logo */}
                        <div className="w-12 h-12 bg-black rounded-full blur-md dithered opacity-50 transition-all duration-500 group-hover:blur-sm group-hover:opacity-80"></div>
                        {/* Blurred Name */}
                        <div className="h-6 w-32 bg-black blur-sm dithered opacity-60 transition-all duration-500 group-hover:blur-[2px] group-hover:opacity-80"></div>
                    </div>
                    <div>
                        <p className="text-zinc-600 leading-relaxed group-hover:text-black transition-colors duration-300">
                            A decentralized compute network allowing idle GPU resources to be rented for AI model training at 10x lower cost than traditional clouds.
                        </p>
                        <div className="mt-4 flex gap-2">
                             <span className="text-xs uppercase tracking-wider text-zinc-400 border border-zinc-200 px-2 py-1 group-hover:border-zinc-400 transition-colors">Infrastructure</span>
                             <span className="text-xs uppercase tracking-wider text-zinc-400 border border-zinc-200 px-2 py-1 group-hover:border-zinc-400 transition-colors">Seed</span>
                        </div>
                    </div>
                  </div>
                  </FadeIn>

                  {/* Project 2 */}
                  <FadeIn delay={200}>
                  <div className="group border-t border-zinc-200 pt-12 cursor-default">
                    <div className="flex items-center gap-4 mb-4">
                        {/* Blurred Logo */}
                        <div className="w-12 h-12 bg-black rounded-full blur-md dithered opacity-50 transition-all duration-500 group-hover:blur-sm group-hover:opacity-80"></div>
                         {/* Blurred Name */}
                        <div className="h-6 w-40 bg-black blur-sm dithered opacity-60 transition-all duration-500 group-hover:blur-[2px] group-hover:opacity-80"></div>
                    </div>
                    <div>
                        <p className="text-zinc-600 leading-relaxed group-hover:text-black transition-colors duration-300">
                            Vertical operating system for the maritime logistics industry, automating customs clearance and load balancing using proprietary LLMs.
                        </p>
                        <div className="mt-4 flex gap-2">
                             <span className="text-xs uppercase tracking-wider text-zinc-400 border border-zinc-200 px-2 py-1 group-hover:border-zinc-400 transition-colors">SaaS</span>
                             <span className="text-xs uppercase tracking-wider text-zinc-400 border border-zinc-200 px-2 py-1 group-hover:border-zinc-400 transition-colors">Pre-Seed</span>
                        </div>
                    </div>
                  </div>
                  </FadeIn>

               </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
