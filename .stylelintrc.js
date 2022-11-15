module.exports = {
  extends: require.resolve('umi/stylelint'),
  rules: {
    'value-no-vendor-prefix': null,
    'block-no-empty': {
      ignore: ['comments']
    }
  }
}
