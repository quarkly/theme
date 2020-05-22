import React, { memo } from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import themeDefault from "./themeDefault";

const GlobalStyles = createGlobalStyle`
  :root {
    ${(props) => {
      let css = "";

      // css
      for (const groupName in props.theme) {
        const group = props.theme[groupName];
        if (typeof group !== "object") continue;

        for (const key in group) {
          const value = group[key];
          if (typeof value !== "string") continue;

          css += `--qtheme-${groupName}-${key}: ${transformVar(key, value)};\n`;
        }
      }

      // components
      const { components } = props.theme;
      for (const componentName in components) {
        const props = components[componentName];

        for (const propName in props) {
          const variants = props[propName];
          if (typeof variants !== "object") continue;

          for (const variant in variants) {
            const value = variants[variant];
            if (typeof value !== "string") continue;

            css += `--qtheme-cmp-${componentName}-${propName}-${variant}: ${value};\n`;
          }
        }
      }

      return css;
    }}
  }
`;

const Theme = memo(({ theme = themeDefault, children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles theme={theme} />
      {children}
    </>
  </ThemeProvider>
));

export default Theme;
