import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'en-US',
    title: 'ConnectNow Docs',
    description: 'Just playing around',

    themeConfig: {
        logo: 'https://public.connectnow.org.uk/logo.svg',
        docsRepo: 'ConnectNowUK/docs',
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
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-HMS6SBZGCE',
            },
        ],
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
