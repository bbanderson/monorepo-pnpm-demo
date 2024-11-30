import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import { theme } from "design-system/lib/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      Provider: ThemeProvider,
      themes: {
        default: theme,
      },
      defaultTheme: "default",
    }),
  ],
};

export default preview;
