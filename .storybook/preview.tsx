import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from '@emotion/react';
import theme from "../libs/components/src/styles/theme";
import { Global, css } from '@emotion/react'
import { globalStyles } from "../libs/components/src/styles/standardStyles/globalStyles";


const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Global styles={css`${globalStyles}`} />
          <Story/>
        </ThemeProvider>
      )
    }
  ], 
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
