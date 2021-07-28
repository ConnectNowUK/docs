import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'ConnectNow Docs',
    description: 'Just playing around',

    themeConfig: {
        logo: 'https://static1.squarespace.com/static/5f50f8731ff54a132283757b/t/5f510b6df2310a24770ebf7b/1614777163205/?format=500w',
        repo: 'ConnectNowUK/docs',
        docsDir: 'docs',
        displayAllHeaders: true,
        navbar: [
            // {
            //     text: 'Home',
            //     link: '/',
            // },

            {
                text: 'Issue Tracker',
                children: ['/issue-tracker/user-guide/', '/issue-tracker/developer-guide/api/'],
            },

            {
                text: 'Chat',
                children: [
                    {
                        text: 'User Guides',
                        children: [
                            '/chat/user-guide/user-guide.md',
                            { text: 'Guide for Company Managers', link: '/chat/user-guide/company-administration-guide.md' }
                        ],
                    },
                    {
                        text: 'Developer Guides',
                        children: ['/chat/developer-guide/api/'],
                    },
                ],
            },

        ],
    },
    plugins: [
        'check-md',
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            },
        ],
    ],
})