#!/usr/bin/env node

import * as program from 'commander'
import { prompt } from 'inquirer'
import * as questions from './questions'
import * as generators from './generators'
import * as colors from 'colors'
import { templates } from './utils/templates'

/**
 * Get Basic Information about the CLI
 */
program
  .version('1.0.0')
  .description('Fabrix CLI')

/**
 * Create a new App
 */
program
  .command('app <name>')
  .alias('a')
  .description('Create new Fabrix App')
  .action(name => {

    console.log(colors.green('Start stitching a new Fabrix Application!\n'))
    templates.linebreak()

    prompt(questions.app)
      .then(answers => {
        return generators.app(name, answers)
      })
      .then(result => {
        return process.exit()
      })
  })

/**
 * Create a new Spool
 */
program
  .command('spool <name>')
  // .alias('o')
  .description('Create new Fabrix Spool')
  .action(name => {
    prompt(questions.spool)
      .then(answers => {
        console.log('Not yet Implemented', name, answers)
      })
  })

/**
 * Create a new Spool
 */
program
  .command('install <spool> <name>')
  // .alias('o')
  .description('Installs a Fabrix Spool')
  .action(({spool, name}) => {
    prompt(questions.spool)
      .then(answers => {
        console.log('Not yet Implemented', spool, name)
      })
  })

/**
 * Create A Controller
 */
program
  .command('controller <name>')
  .alias('c')
  .description('Create a Fabrix Controller')
  .action(name => {
    console.log('Not yet Implemented', name)
  })

/**
 * Create A Model
 */
program
  .command('model <name>')
  .alias('m')
  .description('Create a Fabrix Model')
  .action(name => {
    console.log('Not yet Implemented', name)
  })

/**
 * Create A Policy
 */
program
  .command('policy <name>')
  .alias('p')
  .description('Create a Fabrix Policy')
  .action(name => {
    console.log('Not yet Implemented', name)
  })

/**
 * Create A Resolver
 */
program
  .command('resolver <name>')
  .alias('r')
  .description('Create a Fabrix Resolver')
  .action(name => {
    console.log('Not yet Implemented', name)
  })

/**
 * Create A Service
 */
program
  .command('service <name>')
  .alias('s')
  .description('Create a Fabrix Service')
  .action(name => {
    console.log('Not yet Implemented', name)
  })

program.parse(process.argv)
