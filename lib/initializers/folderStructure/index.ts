import * as path from 'path'
import * as mkdirp from 'mkdirp'
import * as cp from 'cp'

function getDir(answers) {
  const dir = [
    'src',              // source directory
    'src/assets',       // assets directory
    'build',            // build directory
  ]

  // scriptLang
  switch (answers.scriptLang) {
    case 'ts':
      dir.push('src/ts')
      break
    default:
      dir.push('src/js')
  }

  // styleLang
  switch (answers.styleLang) {
    case 'scss':
      dir.push('src/scss')
      break
    default:
      dir.push('src/css')
  }

  // htmlLang
  switch (answers.htmlLang) {
    case 'pug':
      dir.push('src/pug')
      break
    default:
      dir.push('src/html')
  }

  return dir
}

export const folderStructure = (name, answers, directory) => {
  // get selected directories
  const dir = getDir(answers)

  // create folder structure
  dir.forEach(function (p) {
    mkdirp.sync(name + '/' + p)
  })
}

export default folderStructure
