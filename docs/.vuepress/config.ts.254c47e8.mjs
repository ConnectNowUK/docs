// docs/.vuepress/config.ts
import { defaultTheme, defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { searchPlugin } from "@vuepress/plugin-search";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import * as checkMd from "vuepress-plugin-check-md";
import containerPlugin from "@vuepress/plugin-container";
var __vite_injected_original_dirname = "/Users/ash/Documents/Dev/ConnectNow/docs/docs/.vuepress";
var config_default = defineUserConfig({
  lang: "en-GB",
  title: "ConnectNow Docs",
  description: "Documentation for ConnectNow services",
  theme: defaultTheme({
    logo: "https://d1jdn0pmurlmlu.cloudfront.net/cn-logo.svg",
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
        children: ["/technical/api-philosophy.md"]
      },
      {
        text: "Issue Tracker",
        children: [
          {
            text: "User Guides",
            children: ["/issue-tracker/user-guide/"]
          },
          {
            text: "Developer Guides",
            children: ["/issue-tracker/developer-guide/api/"]
          }
        ]
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
                link: "/chat/user-guide/company-administration-guide.md"
              }
            ]
          },
          {
            text: "Developer Guides",
            children: ["/chat/developer-guide/api/"]
          }
        ]
      },
      {
        text: "Queue",
        children: [
          {
            text: "User Guides",
            children: [
              "/queue-system/user-guide/concept-overview.md",
              "/queue-system/user-guide/user-guide.md"
            ]
          },
          {
            text: "Developer Guides",
            children: ["/queue-system/developer-guide/api/"]
          }
        ]
      }
    ]
  }),
  plugins: [
    checkMd(),
    googleAnalyticsPlugin({
      id: "G-HMS6SBZGCE"
    }),
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search"
        },
        "/zh/": {
          placeholder: "\u641C\u7D22"
        }
      }
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__vite_injected_original_dirname, "./components")
    }),
    containerPlugin({
      type: "authorization",
      locales: {
        "/": {
          defaultInfo: "Authorization required"
        },
        "/zh/": {
          defaultInfo: "\u63D0\u793A"
        }
      },
      before: (info) => `<div class="custom-container tip authorization">${info ? `<p class="custom-container-title">${info}</p>` : ""}`,
      after: () => '<p><small>All authorization requests require you to first be <router-link to="#authentication">authenticated</router-link>.</small></p></div>\n'
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FzaC9Eb2N1bWVudHMvRGV2L0Nvbm5lY3ROb3cvZG9jcy9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FzaC9Eb2N1bWVudHMvRGV2L0Nvbm5lY3ROb3cvZG9jcy9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FzaC9Eb2N1bWVudHMvRGV2L0Nvbm5lY3ROb3cvZG9jcy9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZhdWx0VGhlbWUsIGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcbmltcG9ydCB7IHBhdGggfSBmcm9tIFwiQHZ1ZXByZXNzL3V0aWxzXCI7XG5pbXBvcnQgeyBnb29nbGVBbmFseXRpY3NQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1nb29nbGUtYW5hbHl0aWNzXCI7XG5pbXBvcnQgeyBzZWFyY2hQbHVnaW4gfSBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1zZWFyY2hcIjtcbmltcG9ydCB7IHJlZ2lzdGVyQ29tcG9uZW50c1BsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLXJlZ2lzdGVyLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIGNoZWNrTWQgZnJvbSBcInZ1ZXByZXNzLXBsdWdpbi1jaGVjay1tZFwiO1xuaW1wb3J0IGNvbnRhaW5lclBsdWdpbiBmcm9tIFwiQHZ1ZXByZXNzL3BsdWdpbi1jb250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gICAgbGFuZzogXCJlbi1HQlwiLFxuICAgIHRpdGxlOiBcIkNvbm5lY3ROb3cgRG9jc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRvY3VtZW50YXRpb24gZm9yIENvbm5lY3ROb3cgc2VydmljZXNcIixcblxuICAgIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xuICAgICAgICBsb2dvOiBcImh0dHBzOi8vZDFqZG4wcG11cmxtbHUuY2xvdWRmcm9udC5uZXQvY24tbG9nby5zdmdcIixcbiAgICAgICAgZG9jc1JlcG86IFwiQ29ubmVjdE5vd1VLL2RvY3NcIixcbiAgICAgICAgZG9jc0RpcjogXCJkb2NzXCIsXG4gICAgICAgIG5hdmJhcjogW1xuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRleHQ6ICdIb21lJyxcbiAgICAgICAgICAgIC8vICAgICBsaW5rOiAnLycsXG4gICAgICAgICAgICAvLyB9LFxuXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGV4dDogJ0lzc3VlIFRyYWNrZXInLFxuICAgICAgICAgICAgLy8gICAgIGNoaWxkcmVuOiBbJy9pc3N1ZS10cmFja2VyL3VzZXItZ3VpZGUvJywgJy9pc3N1ZS10cmFja2VyL2RldmVsb3Blci1ndWlkZS9hcGkvJ10sXG4gICAgICAgICAgICAvLyB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJHZW5lcmFsXCIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcIi9nZW5lcmFsL2FwaS1waGlsb3NvcGh5Lm1kXCJdLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiSXNzdWUgVHJhY2tlclwiLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiVXNlciBHdWlkZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXCIvaXNzdWUtdHJhY2tlci91c2VyLWd1aWRlL1wiXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJEZXZlbG9wZXIgR3VpZGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1wiL2lzc3VlLXRyYWNrZXIvZGV2ZWxvcGVyLWd1aWRlL2FwaS9cIl0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkNoYXRcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlVzZXIgR3VpZGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2NoYXQvdXNlci1ndWlkZS91c2VyLWd1aWRlLm1kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkd1aWRlIGZvciBDb21wYW55IE1hbmFnZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jaGF0L3VzZXItZ3VpZGUvY29tcGFueS1hZG1pbmlzdHJhdGlvbi1ndWlkZS5tZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRldmVsb3BlciBHdWlkZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXCIvY2hhdC9kZXZlbG9wZXItZ3VpZGUvYXBpL1wiXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiUXVldWVcIixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlVzZXIgR3VpZGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3F1ZXVlLXN5c3RlbS91c2VyLWd1aWRlL2NvbmNlcHQtb3ZlcnZpZXcubWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9xdWV1ZS1zeXN0ZW0vdXNlci1ndWlkZS91c2VyLWd1aWRlLm1kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkRldmVsb3BlciBHdWlkZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXCIvcXVldWUtc3lzdGVtL2RldmVsb3Blci1ndWlkZS9hcGkvXCJdLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0pLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgY2hlY2tNZCgpLFxuICAgICAgICBnb29nbGVBbmFseXRpY3NQbHVnaW4oe1xuICAgICAgICAgICAgaWQ6IFwiRy1ITVM2U0JaR0NFXCIsXG4gICAgICAgIH0pLFxuICAgICAgICBzZWFyY2hQbHVnaW4oe1xuICAgICAgICAgICAgbG9jYWxlczoge1xuICAgICAgICAgICAgICAgIFwiL1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIvemgvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXHU2NDFDXHU3RDIyXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4oe1xuICAgICAgICAgICAgY29tcG9uZW50c0RpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL2NvbXBvbmVudHNcIiksXG4gICAgICAgIH0pLFxuICAgICAgICBjb250YWluZXJQbHVnaW4oe1xuICAgICAgICAgICAgdHlwZTogXCJhdXRob3JpemF0aW9uXCIsXG4gICAgICAgICAgICBsb2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgXCIvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEluZm86IFwiQXV0aG9yaXphdGlvbiByZXF1aXJlZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIvemgvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEluZm86IFwiXHU2M0QwXHU3OTNBXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmU6IChpbmZvOiBzdHJpbmcpOiBzdHJpbmcgPT5cbiAgICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250YWluZXIgdGlwIGF1dGhvcml6YXRpb25cIj4ke1xuICAgICAgICAgICAgICAgICAgICBpbmZvID8gYDxwIGNsYXNzPVwiY3VzdG9tLWNvbnRhaW5lci10aXRsZVwiPiR7aW5mb308L3A+YCA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YCxcbiAgICAgICAgICAgIGFmdGVyOiAoKTogc3RyaW5nID0+XG4gICAgICAgICAgICAgICAgJzxwPjxzbWFsbD5BbGwgYXV0aG9yaXphdGlvbiByZXF1ZXN0cyByZXF1aXJlIHlvdSB0byBmaXJzdCBiZSA8cm91dGVyLWxpbmsgdG89XCIjYXV0aGVudGljYXRpb25cIj5hdXRoZW50aWNhdGVkPC9yb3V0ZXItbGluaz4uPC9zbWFsbD48L3A+PC9kaXY+XFxuJyxcbiAgICAgICAgfSksXG4gICAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2VSxTQUFTLGNBQWMsd0JBQXdCO0FBQzVYLFNBQVMsWUFBWTtBQUNyQixTQUFTLDZCQUE2QjtBQUN0QyxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGdDQUFnQztBQUN6QyxZQUFZLGFBQWE7QUFDekIsT0FBTyxxQkFBcUI7QUFONUIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM1QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFFYixPQUFPLGFBQWE7QUFBQSxJQUNoQixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BV0o7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLFVBQVUsQ0FBQyw0QkFBNEI7QUFBQSxNQUMzQztBQUFBLE1BRUE7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNOO0FBQUEsWUFDSSxNQUFNO0FBQUEsWUFDTixVQUFVLENBQUMsNEJBQTRCO0FBQUEsVUFDM0M7QUFBQSxVQUNBO0FBQUEsWUFDSSxNQUFNO0FBQUEsWUFDTixVQUFVLENBQUMscUNBQXFDO0FBQUEsVUFDcEQ7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLE1BRUE7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNOO0FBQUEsWUFDSSxNQUFNO0FBQUEsWUFDTixVQUFVO0FBQUEsY0FDTjtBQUFBLGNBQ0E7QUFBQSxnQkFDSSxNQUFNO0FBQUEsZ0JBQ04sTUFDSTtBQUFBLGNBQ1I7QUFBQSxZQUNKO0FBQUEsVUFDSjtBQUFBLFVBQ0E7QUFBQSxZQUNJLE1BQU07QUFBQSxZQUNOLFVBQVUsQ0FBQyw0QkFBNEI7QUFBQSxVQUMzQztBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsTUFFQTtBQUFBLFFBQ0ksTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ047QUFBQSxZQUNJLE1BQU07QUFBQSxZQUNOLFVBQVU7QUFBQSxjQUNOO0FBQUEsY0FDQTtBQUFBLFlBQ0o7QUFBQSxVQUNKO0FBQUEsVUFDQTtBQUFBLFlBQ0ksTUFBTTtBQUFBLFlBQ04sVUFBVSxDQUFDLG9DQUFvQztBQUFBLFVBQ25EO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSixDQUFDO0FBQUEsRUFDRCxTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixzQkFBc0I7QUFBQSxNQUNsQixJQUFJO0FBQUEsSUFDUixDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDTCxLQUFLO0FBQUEsVUFDRCxhQUFhO0FBQUEsUUFDakI7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNKLGFBQWE7QUFBQSxRQUNqQjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxJQUNELHlCQUF5QjtBQUFBLE1BQ3JCLGVBQWUsS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxJQUN6RCxDQUFDO0FBQUEsSUFDRCxnQkFBZ0I7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNMLEtBQUs7QUFBQSxVQUNELGFBQWE7QUFBQSxRQUNqQjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ0osYUFBYTtBQUFBLFFBQ2pCO0FBQUEsTUFDSjtBQUFBLE1BQ0EsUUFBUSxDQUFDLFNBQ0wsbURBQ0ksT0FBTyxxQ0FBcUMsSUFBSSxTQUFTLEVBQzdEO0FBQUEsTUFDSixPQUFPLE1BQ0g7QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNMO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
