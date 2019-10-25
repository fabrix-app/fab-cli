import { Command, Executable, Param } from '@orbital/core'
import * as colors from 'colors'
import { prompt } from 'inquirer'
import * as generators from '../generators'
import * as questions from '../questions'
import { templates } from '../utils'


@Command({
    name: 'app',
    aliases: ['a'],
    description: 'Create new Fabrix App'
})
export class AppCommand extends Executable {

    execute(
        @Param({ required: true }) name: string
    ) {
        console.log(colors.green('Start stitching a new Fabrix Application!\n'))
        templates.linebreak()

        prompt(questions.app)
            .then(answers => {
                return generators.app(name, answers)
            })
            .then(result => {
                return process.exit()
            })
    }
}
