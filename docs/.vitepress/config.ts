export default {
  title: 'Hello',
  description: 'Hello World',
  themeConfig: {
    nav: [{ text: 'css', link: '/css', activeMetch: '/css' }],
    sidebar: {
      '/css/': [
        {
          text: 'layout',
          items: [
            { text: 'grid', link: '/css/layout/grid' },
            { text: 'flex', link: '/css/layout/flex' },
          ],
        },
      ],
    },
  },
};
