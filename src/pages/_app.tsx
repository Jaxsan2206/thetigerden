import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import theme from "../../libs/components/src/styles/theme";
import { Global, css } from '@emotion/react'
import { globalStyles } from "../../libs/components/src/styles/standardStyles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={css`${globalStyles}`} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
