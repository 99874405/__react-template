module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'wip',
        'feat',
        'fix',
        'refactor',
        'docs',
        'test',
        'chore',
        'style',
        'revert',
      ],
    ],
  },
}
