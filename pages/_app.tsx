import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { PageTransitionProvider } from "@/components/PageTransitionProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTransitionProvider>
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
