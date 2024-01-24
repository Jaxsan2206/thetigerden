import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import theme from "../../libs/components/src/styles/theme";
import { Global, css } from "@emotion/react";
import { globalStyles } from "../../libs/components/src/styles/standardStyles/globalStyles";
import Header from "../../libs/components/src/lib/Header/Header";
import Footer from "../../libs/components/src/lib/Footer/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        {/* https://emotion.sh/docs/globals */}
        <Global
          styles={css`
            ${globalStyles}
          `}
        />
        <Header {...pageProps.headerProps} />
        <Component {...pageProps} />
        <Footer {...pageProps.footerProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
