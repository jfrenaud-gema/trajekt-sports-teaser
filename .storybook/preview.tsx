import "@radix-ui/themes/styles.css";
import "../src/index.css";

import React from "react";

import type { Preview } from "@storybook/react";
import { Theme } from "@radix-ui/themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: "dark",
      list: [
        { name: "light", class: "light-theme", color: "#FFFFFF" },
        { name: "dark", class: "dark-theme", color: "#111113" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <Theme accentColor="iris" grayColor="mauve" appearance="inherit">
        <Story />
      </Theme>
    ),
  ],
};

export default preview;
