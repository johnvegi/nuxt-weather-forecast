const fs = require('fs')
const gitParams = process.env.HUSKY_GIT_PARAMS
const msg = fs.readFileSync(gitParams, 'utf-8').trim()

const commitRegex =
  /^(feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|deps): .{1,50}/

if (!commitRegex.test(msg)) {
  console.error('Invalid commit message format.')
  console.log()
  console.error('--- Sample commit message ---\nfix: dropdown click event bug')
  console.error('-----------------------------')
  process.exit(1)
}
