// import { Separator } from 'inquirer'

// Craft questions to present to users
export const app = [
  {
    type: 'list',
    name: 'webserver',
    message: 'Do you want to include a webserver?',
    choices: [
      'Express',
      'Hapi',
      'No'
    ]
  },
  {
    type: 'list',
    name: 'orm',
    message: 'Do you want to include one or more ORMs?',
    choices: [
      'Sequelize',
      'Knex',
      'No'
    ]
  },
  {
    type: 'confirm',
    name: 'tapestries',
    message: 'Do you want to use Tapestries?',
    choices: [
      'n',
      'Y'
    ]
  }
]
