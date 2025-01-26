import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Feature/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        kalamehBlack: ['Kalameh-Black', 'sans-serif'],
        kalamehBold: ['Kalameh-Bold', 'sans-serif'],
        kalamehExtraBold: ['Kalameh-ExtraBold', 'sans-serif'],
        kalamehExtraLight: ['Kalameh-ExtraLight', 'sans-serif'],
        kalamehLight: ['Kalameh-Light', 'sans-serif'],
        kalamehMedium: ['Kalameh-Medium', 'sans-serif'],
        kalamehRegular: ['Kalameh-Regular', 'sans-serif'],
        kalamehSemiBold: ['Kalameh-SemiBold', 'sans-serif'],
        kalamehThin: ['Kalameh-Thin', 'sans-serif'],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
