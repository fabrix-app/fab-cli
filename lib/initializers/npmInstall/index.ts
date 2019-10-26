import * as cmd from 'node-cmd'
import * as PromiseBird from 'bluebird'
import { templates } from '../../utils'

const runAsync = PromiseBird.promisify(cmd.get, { multiArgs: true, context: cmd })

export const npmInstall = (name, additionalDeps = []) => {
  templates.npmInstall()
  return runAsync(`cd ${name} && npm install`).then(() => {
    const promises = []
    additionalDeps.forEach(deps => {
      promises.push(new Promise(function(resolve, reject) {
        console.log(`installing ${deps}`)
        runAsync(`cd ${name} && npm install ${deps} --save`).then(() => resolve())
      }))
    })
    return Promise.all(promises)
  })
}

export default npmInstall
