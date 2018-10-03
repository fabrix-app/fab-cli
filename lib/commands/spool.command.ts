import { Command, Executable, Param } from '@orbital/core'
import { prompt } from 'inquirer'
import * as questions from '../questions'

@Command({
    name: 'spool',
    description: 'Create new Fabrix Spool'
})
export class SpoolCommand extends Executable {
    execute(
        @Param({ required: true }) name: string
    ) {
        prompt(questions.spool)
            .then(answers => {
                console.log('Not yet Implemented', name, answers)
            })
    }
}
