import { Command, Executable, Param } from '@orbital/core'
import { prompt } from 'inquirer'
import * as questions from '../questions'

@Command({
    name: 'install',
    description: 'Installs a Fabrix Spool'
})
export class InstallCommand extends Executable {
    execute(
        @Param({ required: true }) spool: string,
        @Param({ required: true }) name: string
    ) {
        prompt(questions.spool)
            .then(answers => {
                console.log('Not yet Implemented', spool, name)
            })
    }
}
