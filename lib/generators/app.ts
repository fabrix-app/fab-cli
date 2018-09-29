import * as colors from 'colors'
import { resolve, dirname, } from 'path'
import { sync } from 'path-exists'
import { archetype, npmInstall } from '../initializers'

export const app = (name, answers) => {
  const fabrixArchetype = resolve(__dirname, '../../node_modules/@fabrix/fabrix/archetype')
  const spoolArray = [ ]

  console.log('\nGenerating app', colors.bgWhite.black(` ${name} `))
  // console.log('\nfrom', colors.bgWhite.black(` ${answers} `))
  console.log(colors.grey('\n------------------------------------------------\n'))

  return Promise.resolve()
    .then(() => {
      if (sync(resolve(process.cwd(), name))) {
        console.log(colors.yellow(`Error! Directory ${name} already exist.`))
        process.exit(1)
      }
      else {
        return archetype(name, fabrixArchetype)
      }
    })
    .then(_archetype => {
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

      return npmInstall(name)
    })
    .then(_npm => {
      console.log(colors.grey('\n------------------------------------------------\n'))
      console.log('\nGenerated! Run ', colors.bgWhite.black(` cd ${name} && npm run build && node dist/server `))
      console.log('\nRun ', colors.bgWhite.black(` cd ${name} && npm run build && node dist/server `))
    })
}
