import * as colors from 'colors'
import { resolve, dirname, } from 'path'
import { sync } from 'path-exists'
import { archetype, npmInstall } from '../initializers'
import {templates, updateIndex} from '../utils'

export const app = (name, answers) => {
  const fabrixArchetype = resolve(__dirname, '../../node_modules/@fabrix')
  const spoolArray = [ ]

  templates.linebreak()
  console.log('\nGenerating app', colors.bgWhite.black(` ${name} `))
  templates.linebreak()

  return Promise.resolve()
    .then(() => {
      if (sync(resolve(process.cwd(), name))) {
        console.log(colors.yellow(`Error! Directory ${name} already exist.`))
        process.exit(1)
      } else {
        // install fabrix archetype
        return archetype(name, fabrixArchetype, {
          overwrite: false,
          errorOnExist: false,
        })
      }
    })
    .then(_archetype => {
      if (answers.webserver === 'other' && answers['web-engine-other']) {
        spoolArray.push('@fabrix/spool-router')
        spoolArray.push(`@fabrix/${answers['web-engine-other'].toLowerCase()}`)
      }
      else if (answers.webserver && answers.webserver.toLowerCase() !== 'no') {
        spoolArray.push('@fabrix/spool-router')
        spoolArray.push(`@fabrix/spool-${answers.webserver.toLowerCase()}`)
      }

      if (answers.orm === 'other' && answers['orm-engine-other']) {
        spoolArray.push(`${answers['orm-engine-other']}`)
      }
      else if (answers.orm && answers.orm.toLowerCase() !== 'no') {
        spoolArray.push(`@fabrix/spool-${answers.orm.toLowerCase()}`)
      }

      if (answers['tapestries']) {
        spoolArray.push('@fabrix/spool-tapestries')
      }

      return npmInstall(name, spoolArray)
    }).then(() => {
        const baseDirArchetype = resolve(process.cwd(), name + '/node_modules/@fabrix')
        // install official spools archetype
        return archetype(name, baseDirArchetype, {
          overwrite: true,
          errorOnExist: false,
        })
      }).then(() => {
        const configDir = resolve(process.cwd(), name + '/src/config')
        // update config/index based on existing files
        return updateIndex(configDir)
      })
    .then(_npm => {
      templates.appCreated(name)
      return true
    })
}
