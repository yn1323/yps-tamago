module.exports = {
  addons: ['@chakra-ui/storybook-addon'],
  // NOTE: なぜかこれで早くなる
  // https://github.com/storybookjs/storybook/issues/10784
  typescript: {
    reactDocgen: false,
  },
}
