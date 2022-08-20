module.exports = {
  // NOTE: Redwood環境だとstoriesがあると、動作しない
  // stories: ['../src/**/*.stories.tsx'],
  addons: ['@chakra-ui/storybook-addon', '@storybook/addon-interactions'],
  // NOTE: なぜかこれで早くなる
  // https://github.com/storybookjs/storybook/issues/10784
  typescript: {
    reactDocgen: false,
  },
  features: {
    interactionsDebugger: true,
  },
}
