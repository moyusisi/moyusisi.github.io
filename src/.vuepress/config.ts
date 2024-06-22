import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

import theme from "./theme.js";

export default defineUserConfig({
    lang: 'zh-CN',
    base: '/',
    title: '魔芋丝丝',
    description: '逆水行舟，不进则退',

    // 主题配置，都放在./theme.js中了。
    theme: theme,

    bundler: viteBundler(),
})

