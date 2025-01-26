import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Feature/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      mobile:"400px",
      mobileXxl : "500px",
      mobileXxxl: "600px",
      sm:"640px",
      md:"768px",
      tablet: "900px",
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px"
    },
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
