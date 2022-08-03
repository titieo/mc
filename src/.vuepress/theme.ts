import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://itsbiodude.github.io/mc",

  author: {
    name: "ItsBioDude",
    // url: "https://mrhope.site",
  },

//   iconAssets: "iconfont",
  iconAssets: "iconfont",

  logo: "/logo.jpg",

  repo: "ItsBioDude/mc",

//   docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: false,
//   sidebar: sidebar,

  footer: "<p>Special thanks to <a href=\"https://github.com/Mister-Hope\" target=\"_blank\" rel=\"noopener noreferrer\">Mr.Hope<span><svg class=\"external-link-icon\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg><span class=\"external-link-icon-sr-only\">open in new window</span></span></a> for making <a href=\"https://vuepress-theme-hope.github.io\" target=\"_blank\" rel=\"noopener noreferrer\">vuepress-theme-hope<span><svg class=\"external-link-icon\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg><span class=\"external-link-icon-sr-only\">open in new window</span></span></a> which is used to make this blog</p>",

  displayFooter: true,

  copyright: "MIT Licensed ©️ ItsBioDude",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "A Highschool Pupil in Vietnam. Fall inlove with Biology & Minecraft",
    intro: "/intro.html",
    medias: {
      Discord: "discordapp.com/users/845978022732759071",
      GitHub: "https://github.com/ItsBioDude",
    //   Gitlab: "https://example.com",
      Gmail: "mailto:locphuc016@gmail.com",
    //   Instagram: "https://example.com",
      Reddit: "https://www.reddit.com/user/loctran0126",
      Steam: "https://steamcommunity.com/id/itsbiodude/",
    //   Twitter: "https://example.com",
    },
    roundAvatar: true,
  },

//   encrypt: {
//     config: {
//       "/guide/encrypt.html": ["1234"],
//     },
//   },

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
    container: true,
    // presentation: {
    //     plugins: ["highlight", "math", "search", "notes", "zoom"],
    //   },
    },
  },
});
