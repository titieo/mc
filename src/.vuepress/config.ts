import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "en-US",
  title: "ItsBioDude MC",
  description: "A demo for vuepress-theme-hope",
//   open: true,

  base: "/mc/",

  theme,
});
