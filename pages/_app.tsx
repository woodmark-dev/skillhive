import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppWrapper from "@/components/appWrapper";
import { ThemeProvider } from "@material-tailwind/react";
import { PT_Serif } from "next/font/google";

const pt_serif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <style jsx global>
        {`
          html {
            font-family: ${pt_serif.style.fontFamily};
          }
        `}
      </style>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ThemeProvider>
  );
}
