import * as cmd from 'node-cmd'
import * as colors from 'colors'
import { resolve, dirname } from 'path'
import { sync } from 'path-exists'

// initializers
// const initGit = require('../initializers/git')
// const initFolderStructure = require('../initializers/folder-structure')
// const initFiles = require('../initializers/files')
// const initNpmInstall = require('../initializers/npm-install')

import { folderStructure } from '../initializers/folderStructure/index'
import { npmInstall } from '../initializers/npmInstall/index'

// const fabrixArchetype = dirname(require.resolve('@fabrix/fabrix/dist/archetype'))
// const fabrixPackage = require(resolve(fabrixArchetype, 'package.json'))

export const app = (name, answers) => {
  const spoolArray = [ ]

  console.log('\nGenerating app', colors.bgWhite.black(` ${name} `))
  console.log('\nfrom', colors.bgWhite.black(` ${answers} `))
  console.log(colors.grey('\n------------------------------------------------\n'))


  // console.log(fabrixArchetype)
  // if (answers.logger && answers.logger !== 'none') {
  //   spoolArray.push(`spool-${answers.logger}`)
  // }

  if (answers.webserver === 'other' && answers['web-engine-other']) {
    spoolArray.push('@fabrix/spool-router')
    spoolArray.push(`@fabrix/${answers['web-engine-other']}`)
  }
  else if (answers.webserver) {
    spoolArray.push('@fabrix/spool-router')
    spoolArray.push(`@fabrix/spool-${answers.webserver}`)
  }

  if (answers.orm === 'other' && answers['orm-engine-other']) {
    spoolArray.push(`${answers['orm-engine-other']}`)
  }
  else if (answers.orm) {
    spoolArray.push(`@fabrix/spool-${answers.orm}`)
  }

  if (answers['tapestries']) {
    spoolArray.push('@fabrix/spool-tapestries')
  }

  return Promise.resolve()
    .then(() => {
      if (sync(resolve(process.cwd(), name))) {
        console.log(colors.yellow(`Error! Directory ${name} already exist.`))
        process.exit(1)
      }
      else {
        return folderStructure(name, answers)
      }
    })
}
