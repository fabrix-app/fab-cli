import * as cmd from 'node-cmd'
import * as colors from 'colors'
import { templates } from '../../utils/templates'

export const npmInstall = (name) => {
  templates.npmInstall()
  cmd.run(`cd ${name} && npm install`)
}

export default npmInstall
