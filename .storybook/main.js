const path = require('path')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/html",
  webpackFinal: async(config, {configType}) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            url: false // scss内のURLはコンパイルしない
          }
        },
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./stories/assets/scss/_variables.scss'], // 全scss処理で必要となる変数設定のファイルを指定
          }
        }
      ],
    })
    return config
  }
}