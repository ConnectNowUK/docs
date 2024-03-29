import { containerPlugin } from "@vuepress/plugin-container";
import { defaultTheme, defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { searchPlugin } from "@vuepress/plugin-search";
import { path } from "@vuepress/utils";

export default defineUserConfig({
  lang: "en-GB",
  title: "ConnectNow Docs",
  description: "Documentation for ConnectNow services",

  theme: defaultTheme({
    logo:
      "https://images.squarespace-cdn.com/content/v1/5f50f8731ff54a132283757b/4d363c79-a765-45fa-a0e8-b08d95799bea/cn+logo.png",
    docsRepo: "ConnectNowUK/docs",
    docsDir: "docs",
    navbar: [
      // {
      //     text: 'Home',
      //     link: '/',
      // },

      // {
      //     text: 'Issue Tracker',
      //     children: ['/issue-tracker/user-guide/', '/issue-tracker/developer-guide/api/'],
      // },

      {
        text: "General",
        children: [
          {
            text: "Technical",
            children: [
              "/general/api-philosophy.md",
              "/general/architecture.md",
              "/general/device-support.md",
              "/general/roadmap.md",
            ],
          },
          {
            text: "Reference",
            children: [
              "/general/integration.md",
              "/general/flow-builder.md",
            ],
          },
        ],
      },

      {
        text: "Issue Tracker",
        children: [
          {
            text: "User Guides",
            children: ["/issue-tracker/user-guide/"],
          },
          {
            text: "Developer Guides",
            children: ["/issue-tracker/developer-guide/api/"],
          },
        ],
      },

      {
        text: "Chat",
        children: [
          {
            text: "User Guides",
            children: [
              "/chat/user-guide/user-guide.md",
              {
                text: "Guide for Company Managers",
                link: "/chat/user-guide/company-administration-guide.md",
              },
            ],
          },
          {
            text: "Developer Guides",
            children: ["/chat/developer-guide/api/"],
          },
        ],
      },

      {
        text: "Queue",
        children: [
          {
            text: "User Guides",
            children: [
              "/queue-system/user-guide/concept-overview.md",
              "/queue-system/user-guide/user-guide.md",
            ],
          },
          {
            text: "Developer Guides",
            children: ["/queue-system/developer-guide/api/"],
          },
        ],
      },

      {
        text: "Policies",
        children: [
          "/policies/data-policies.md",
          "/policies/terms.md",
          "/policies/privacy.md",
          "/policies/cookies.md",
        ],
      },
    ],
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: "G-HMS6SBZGCE",
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    containerPlugin({
      type: "authorization",
      locales: {
        "/": {
          defaultInfo: "Authorization required",
        },
        "/zh/": {
          defaultInfo: "提示",
        },
      },
      before: (info: string): string =>
        `<div class="custom-container tip authorization">${
          info ? `<p class="custom-container-title">${info}</p>` : ""
        }`,
      after: (): string =>
        '<p><small>All authorization requests require you to first be <router-link to="#authentication">authenticated</router-link>.</small></p></div>\n',
    }),
  ],
});
