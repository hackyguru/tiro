import Head from "next/head";
import Link from "next/link";
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

export default function Memo() {
  return (
    <>
      <Head>
        <title>Investment Memo - tiro</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`${geistSans.variable} ${playfair.variable} min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white`}
      >
        <Header />

        <main className="pt-32 pb-24 px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <Link href="/thesis" className="inline-block mb-8 text-sm text-zinc-500 hover:text-black transition-colors">
                &larr; Back to Thesis
              </Link>
              
              <h1 className="font-serif text-4xl lg:text-6xl leading-tight tracking-tight text-zinc-900 mb-8">
                The Case for the <span className="italic">Invisible</span> Economy
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-zinc-500 mb-16 border-b border-zinc-100 pb-8">
                <span>Updated February 2026</span>
                <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                <span>Tiro Ventures</span>
              </div>

              <div className="prose prose-zinc prose-lg max-w-none">
                <p className="text-xl text-zinc-600 leading-relaxed mb-12 font-serif italic">
                  "The next generation of unicorns won't be built on better ads or faster delivery. They will be built on infrastructure that remains largely unseen."
                </p>

                <h3 className="font-serif text-2xl text-zinc-900 mt-12 mb-6">Executive Summary</h3>
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  We are entering a phase of the internet where value accumulation shifts from the application layer to the protocol and infrastructure layer. At Tiro, we believe the most significant opportunities lie in "invisible" technologies—middleware, decentralized compute, and vertical AI agents—that power the visible web.
                </p>

                <h3 className="font-serif text-2xl text-zinc-900 mt-12 mb-6">1. The Saturation of the Attention Economy</h3>
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  For the last decade, venture returns were driven by capturing consumer attention. Social media, marketplaces, and D2C brands capitalized on screen time. Today, CAC (Customer Acquisition Cost) is at an all-time high, and attention spans are fragmented. The alpha has moved from capturing attention to automating intention.
                </p>

                <h3 className="font-serif text-2xl text-zinc-900 mt-12 mb-6">2. Vertical AI as the New SaaS</h3>
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  The first wave of SaaS was about productivity—making humans faster. The next wave is about agency—replacing the loop entirely. We are investing aggressively in Vertical AI agents that don't just "co-pilot" but fully execute complex workflows in legacy industries like maritime logistics, legal compliance, and manufacturing.
                </p>

                <h3 className="font-serif text-2xl text-zinc-900 mt-12 mb-6">3. Decentralized Physical Infrastructure (DePIN)</h3>
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  As AI demand outstrips supply for compute and storage, we see a massive opportunity in decentralized networks that aggregate latent hardware resources. We envision a future where cloud computing is not a monopoly of three providers, but a liquid market of millions of contributors.
                </p>

                <h3 className="font-serif text-2xl text-zinc-900 mt-12 mb-6">Conclusion</h3>
                <p className="text-zinc-600 mb-12 leading-relaxed">
                  Tiro is designed to be a high-conviction, early-stage partner for founders building in these invisible verticals. We don't just write checks; we help design the economic models and technical architecture that allow these protocols to scale.
                </p>
                
                <div className="bg-zinc-50 p-8 border border-zinc-100 mt-16">
                  <h4 className="font-serif text-xl text-zinc-900 mb-4">Building something in this space?</h4>
                  <p className="text-zinc-600 mb-6">
                    We are actively deploying capital into pre-seed and seed rounds. If this thesis resonates with you, we want to see what you're building.
                  </p>
                  <Link href="/contact" className="inline-block bg-black text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors rounded-none">
                    Pitch Us
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </main>
      </div>
    </>
  );
}
