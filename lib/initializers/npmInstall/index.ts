import * as cmd from 'node-cmd'
import * as colors from 'colors'

export const npmInstall = (name) => {
  console.log(colors.grey('\n------------------------------------------------\n'))
  console.log(colors.dim('Installing npm packages. Please wait.'))
  cmd.run(`cd ${name} && npm install`)
}

export default npmInstall
