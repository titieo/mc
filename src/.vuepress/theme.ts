import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "ItsBioDude",
    // url: "https://mrhope.site",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Default footer",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "A Highschool Pupil in Vietnam. Fall inlove with Biology & Minecraft",
    intro: "/intro.html",
    medias: {
      Discord: "https://example.com",
      GitHub: "https://example.com",
    //   Gitlab: "https://example.com",
      Gmail: "https://example.com",
    //   Instagram: "https://example.com",
      Reddit: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
    },
    roundAvatar: true,
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    components: ["Badge","YouTube"],
    copyCode: false,
    prismjs: false,

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
        data-mapping="title"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
       */
      provider: "Giscus",
      repo: "ItsBioDude/mc-blog",
      repoId: "R_kgDOHwSo0g",
      category: "Q&A",
      categoryId: "DIC_kwDOHwSo0s4CQkib",

    },

    mdEnhance: {
    //   enableAll: true,
    attrs: true,
    // presentation: {
    //     plugins: ["highlight", "math", "search", "notes", "zoom"],
    //   },
    },
  },
});
