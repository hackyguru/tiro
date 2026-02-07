import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTransitionProvider>
      <Head>
        <title>Tiro VC</title>
        <meta name="description" content="Tiro is a boutique startup studio fueling the ambition of independent builders. We invest micro/small cheques in early stage projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tiro.vc/" />
        <meta property="og:title" content="Tiro VC" />
        <meta property="og:description" content="Tiro is a boutique startup studio fueling the ambition of independent builders. We invest micro/small cheques in early stage projects." />
        <meta property="og:image" content="https://tiro.vc/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tiro.vc/" />
        <meta property="twitter:title" content="Tiro VC" />
        <meta property="twitter:description" content="Tiro is a boutique startup studio fueling the ambition of independent builders. We invest micro/small cheques in early stage projects." />
        <meta property="twitter:image" content="https://tiro.vc/og-image.png" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </Head>
      <svg className="hidden-svg-filter">
        <filter id="blue-noise-dither" x="0%" y="0%" width="100%" height="100%">
           {/* Generate noise - lowered frequency slightly for visibility */}
           <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" result="noise">
              <animate attributeName="seed" values="1;2;3;4;5;6;7;8;9;10" dur="0.5s" repeatCount="indefinite"/>
           </feTurbulence>
           {/* Desaturate the noise to be grayscale */}
           <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
           {/* Extreme contrast to make it distinct */}
           <feComponentTransfer in="grayNoise" result="contrastedNoise">
              <feFuncR type="linear" slope="5" intercept="-2" />
              <feFuncG type="linear" slope="5" intercept="-2" />
              <feFuncB type="linear" slope="5" intercept="-2" />
           </feComponentTransfer>
           {/* Adjust opacity/intensity of the noise */}
           <feComponentTransfer in="contrastedNoise" result="lightNoise">
             <feFuncA type="linear" slope="1.5" />
           </feComponentTransfer>
           {/* Blend with the original image */}
           <feBlend in="lightNoise" in2="SourceGraphic" mode="overlay" />
        </filter>
      </svg>
      <Component {...pageProps} />
    </PageTransitionProvider>
  );
}
