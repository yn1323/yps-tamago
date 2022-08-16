// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  coveragePathIgnorePatterns: ['./*.stories.tsx'],
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './jest-report',
        filename: 'index.html',
        expand: true,
        hideIcon: true,
      },
    ],
  ],
}

module.exports = config
