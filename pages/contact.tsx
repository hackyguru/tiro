import Head from "next/head";
import { useState, FormEvent } from "react";
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

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "ac11267b-b791-4572-976b-b9ac78dbd237");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
      } else {
        console.error("Form submission failed", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Tiro</title>
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
                  Get in touch
                </h1>
                <p className="text-lg lg:text-xl text-zinc-600 leading-relaxed mb-12">
                  Have a question about the program? Want to partner with us? We'd love to hear from you.
                </p>

                <div className="space-y-12 mb-12">
                   <div>
                      <h3 className="text-2xl font-serif font-medium text-zinc-900 mb-4">Email</h3>
                      <a href="mailto:hello@tiro.vc" className="text-lg text-zinc-600 hover:text-black transition-colors underline decoration-zinc-300 underline-offset-4">hello@tiro.vc</a>
                   </div>
                </div>
              </div>
              </FadeIn>
            </div>

            {/* Right Form Column */}
            <div className="lg:w-[50%] lg:h-full overflow-y-auto no-scrollbar">
               <div className="bg-neutral-100 p-8 lg:p-24 border-t lg:border-t-0 lg:border-l border-zinc-200 h-full flex items-center justify-center">
                  {status === "success" ? (
                    <FadeIn delay={300} className="text-center">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3 className="font-serif text-3xl mb-4">Message Sent</h3>
                        <p className="text-zinc-600 mb-8 max-w-sm mx-auto">
                            Thank you for reaching out. A member of our team will get back to you shortly.
                        </p>
                        <button 
                            onClick={() => setStatus("idle")}
                            className="text-sm font-medium border-b border-black pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors"
                        >
                            Send another message
                        </button>
                    </FadeIn>
                  ) : status === "error" ? (
                    <FadeIn delay={300} className="text-center">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </div>
                        <h3 className="font-serif text-3xl mb-4">Something went wrong</h3>
                        <p className="text-zinc-600 mb-8 max-w-sm mx-auto">
                            We couldn&apos;t send your message. Please reach us directly via email.
                        </p>
                        <a 
                            href="mailto:hello@tiro.vc"
                            className="text-sm font-medium border-b border-black pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors"
                        >
                            hello@tiro.vc
                        </a>
                        <div className="mt-8">
                            <button 
                                onClick={() => setStatus("idle")}
                                className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
                            >
                                Try again
                            </button>
                        </div>
                    </FadeIn>
                  ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg">
                    <FadeIn delay={200}>
                    <div className="flex flex-col gap-6">
                        <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-900 mb-2">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-white border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-shadow rounded-none text-zinc-900 placeholder:text-zinc-400"
                            placeholder="Jane Doe"
                        />
                        </div>
                        <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-white border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-shadow rounded-none text-zinc-900 placeholder:text-zinc-400"
                            placeholder="jane@example.com"
                        />
                        </div>
                        <div>
                        <label htmlFor="message" className="block text-sm font-medium text-zinc-900 mb-2">Message</label>
                        <textarea 
                            id="message" 
                            name="message"
                            rows={4}
                            required
                            className="w-full px-4 py-3 bg-white border border-zinc-200 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-shadow rounded-none text-zinc-900 placeholder:text-zinc-400"
                            placeholder="Tell us about what you're building..."
                        />
                        </div>
                        <button 
                            type="submit" 
                            disabled={status === "submitting"}
                            className="bg-black text-white px-8 py-4 text-sm font-medium hover:bg-zinc-800 transition-colors rounded-none mt-2 w-full disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
                        >
                            {status === "submitting" ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : "Send Message"}
                        </button>
                    </div>
                    </FadeIn>
                  </form>
                  )}
               </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
