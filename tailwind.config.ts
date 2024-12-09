import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function (pluginAPI: PluginAPI) {
      const { addBase } = pluginAPI;
      addBase({
        html: {
          "-webkit-text-size-adjust": "100%",
          "text-size-adjust": "100%",
        },
      });
    },
  ],
} satisfies Config;
