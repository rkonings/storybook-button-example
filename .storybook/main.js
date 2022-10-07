const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-pseudo-states",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      [
        "babel-plugin-styled-components",
        {
          fileName: false,
        },
      ],
    ],
    // any extra options you want to set
  }),
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
      })
    );

    // Return the altered config
    return config;
  },
};
