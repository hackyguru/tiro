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
                The First Helping Hand for <span className="italic">Beginners</span>
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-zinc-500 mb-16 border-b border-zinc-100 pb-8">
                <span>Updated February 2026</span>
                <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                <span>Tiro Ventures</span>
              </div>

              <div className="prose prose-zinc prose-lg max-w-none">
                {/* Dictionary/Etymology Block */}
                <div className="not-prose mb-16">
                  <div className="mb-4">
                    <div>
                        <h2 className="text-5xl md:text-6xl text-zinc-900 tracking-tight leading-none mb-1 font-sans">tiro</h2>
                        <span className="text-zinc-500 text-lg font-sans">/ˈtʌɪrəʊ/</span>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                      <p className="text-zinc-500 italic font-serif text-lg">noun</p>
                      <p className="text-zinc-400 text-sm font-medium mb-2">noun: <strong className="text-zinc-900 font-bold">tiro</strong></p>
                      <p className="text-2xl md:text-3xl text-zinc-900 font-serif leading-tight">
                          a beginner or novice.
                      </p>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-zinc-900 mt-12 mb-6">More Than Just Capital</h3>
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  The venture landscape is crowded with capital, but starved of true craftsmanship. At Tiro, we operate less like a traditional fund and more like a boutique startup studio. To us, operating as a boutique VC means we aim to invest micro/small cheques in early stage projects, ideally during angel or pre-seed rounds. We don't just allocate capital; we co-build. We aim to be the first helping hand that pulls a founder out of the "trough of sorrow" and into product-market fit.
                </p>

                <h3 className="font-serif text-2xl text-zinc-900 mt-12 mb-6">Embracing the Beginner's Mindset</h3>
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  We believe the most disruptive innovations come from a state of "Shoshin" (初心) — the beginner's mind. Experts are constrained by what they know is impossible; beginners are free to attempt the impossible. We back founders who look at legacy industries with fresh eyes and ask "why not?"
                </p>

                <h3 className="font-serif text-2xl text-zinc-900 mt-12 mb-6">Our Studio Model: High Touch, Low Volume</h3>
                <p className="text-zinc-600 mb-6 leading-relaxed">
                  Because we view ourselves as a studio, we invest in a select few relationships each year. This allows us to embed ourselves deeply in your product roadmap, design systems, and go-to-market strategy. We are not a portfolio aggregator; we are a partner in the truest sense of the word.
                </p>

                <h3 className="font-serif text-2xl text-zinc-900 mt-12 mb-6">Conclusion</h3>
                <p className="text-zinc-600 mb-12 leading-relaxed">
                  If you are a beginner ready to challenge the experts, we want to be your first believer. We bring the studio resources—design, engineering, and strategy—to help you turn your raw ambition into a defining company.
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
