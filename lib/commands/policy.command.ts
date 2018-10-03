import { Command, Executable, Param } from '@orbital/core'

@Command({
    name: 'policy',
    aliases: ['p'],
    description: 'Create a Fabrix Policy'
})
export class PolicyCommand extends Executable {
    execute(
        @Param({ required: true }) name: string
    ) {
        console.log('Not yet Implemented', name)
    }
}
