import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "en-US",
  title: "ItsBioDude MC",
  description: "ItsBioDude blog about Minecraft stuffs",
//   open: true,

  base: "/mc/",

  theme,
});
