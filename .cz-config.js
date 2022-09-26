module.exports = {
  types: [
    {
      value: 'WIP',
      name: '💪  WIP: 暫存工作。',
    },
    {
      value: 'feat',
      name: '✨  feat: 新增功能。',
    },
    {
      value: 'fix',
      name: '🐞  fix: 修復 bug。',
    },
    {
      value: 'refactor',
      name: '🛠  refactor: 重構、優化程式碼，不是新功能或是修復 bug。',
    },
    {
      value: 'docs',
      name: '📚  docs: 修改文件。',
    },
    {
      value: 'test',
      name: '🏁  test: 新增或修改現有的測試',
    },
    {
      value: 'chore',
      name: '🗯  chore: 修改建置流程、包管理、構建過程或輔助工具的變動。不包含修改測試檔、src 裡的檔案。',
    },
    {
      value: 'style',
      name: '💅  style: 修改程式碼的風格，不會對產品有任何的功能變動 (空白鍵、格式化、分號...等)。',
    },
    {
      value: 'revert',
      name: '⏪  revert: 撤銷、復原一次 git commit。',
    },
  ],

  // scopes: [
  //   {
  //     value: "HTML",
  //     name: '針對 HTML 結構'
  //   },
  //   {
  //     value: "CSS",
  //     name: '針對 CSS 樣式'
  //   },
  //   {
  //     value: "Javascript",
  //     name: '針對套件'
  //   }
  // ],
  messages: {
    type: '<type> 用於說明 commit 的類別，只允許使用下面 9 個標識: \n',
    subject: '<subject> 目的的簡短描述，不超過 100 個字符: \n',
    confirmCommit: '<confirm commit> 請確認以上描述。',
  },
  upperCaseSubject: true,
  footerPrefix: 'Related issue:',
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'refactor'],
}
