import * as colors from 'colors'

export const templates = {
  linebreak: () => {
    colors.grey('\n------------------------------------------------------\n')
  },

  appCreated: (name) => {
    this.linebreak()
    console.log(colors.green(`
┌─────────────────────────────────────────────────────────┐
│        Your Fabrix Application has been created!        │
│ x --- x --- x --- x --- x --- x --- x --- x --- x --- x │
│             To start your application, run:             │
| cd ${name} && npm run compile && node dist/server       |
└─────────────────────────────────────────────────────────┘
      `))
  },

  npmInstall: () => {
    console.log(colors.grey('\n------------------------------------------------\n'))
    console.log(colors.dim('Installing npm packages. Please wait...'))
  }
}
