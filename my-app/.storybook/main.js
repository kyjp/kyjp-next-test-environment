module.exports = {
  "stories": [
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: async (baseConfig) => {
    baseConfig.module.rules.push({
      test: /\.sass$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: '[local]___[hash:base64:2]',
            },
          },
        },
        'sass-loader',
      ],
    });
    return { ...baseConfig }
  }
}
