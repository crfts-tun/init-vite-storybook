const { mergeConfig } = require('vite');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  /**
   * A option exposed by storybook-builder-vite for customizing the Vite config.
   * @see https://github.com/eirslett/storybook-builder-vite#customize-vite-config
   * @param {import("vite").UserConfig} config
   * @see https://vitejs.dev/config/
   */
  // async viteFinal(config) {
  //   // Merge custom configuration into the default config
  //   return mergeConfig(config, {
  //     // Use the same "resolve" configuration as your app
  //     resolve: (await import('../vite.config.js')).default.resolve,
  //     // Add dependencies to pre-optimization
  //     optimizeDeps: {
  //       include: ['storybook-dark-mode'],
  //     },
  //   });
  // },
}