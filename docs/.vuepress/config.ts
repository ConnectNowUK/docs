import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'

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

            {
                text: 'Queue',
                children: [
                    {
                        text: 'User Guides',
                        children: [
                            '/queue-system/user-guide/concept-overview.md',
                        ],
                    },
                    {
                        text: 'Developer Guides',
                        children: ['/queue-system/developer-guide/api/'],
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
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
        ],
        [
            '@vuepress/container',
            {
                type: 'authorization',
                locales: {
                    '/': {
                        defaultInfo: 'Authorization required',
                    },
                    '/zh/': {
                        defaultInfo: '提示',
                    },
                },
                before: (info: string): string =>
                    `<div class="custom-container tip authorization">${info ? `<p class="custom-container-title">${info}</p>` : ''}`,
                after: (): string => '<p><small>All authorization requests require you to first be <router-link to="#authentication">authenticated</router-link>.</small></p></div>\n'
            },
        ],
    ],
})
