module.exports = {
  printWidth: 120,
  trailingComma: 'all',
  singleQuote: true,
  plugins: ['@prettier/plugin-xml', 'prettier-plugin-apex'],
  overrides: [
    {
      files: '**/lwc/**/*.html',
      options: { parser: 'lwc' },
    },
    {
      files: '*.{cmp,page,component}',
      options: { parser: 'html' },
    },
  ],
};
