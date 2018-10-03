import { Command, Executable, Param } from '@orbital/core'

@Command({
    name: 'model',
    aliases: ['m'],
    description: 'Create a Fabrix Model'
})
export class ModelCommand extends Executable {
    execute(
        @Param({ required: true }) name: string
    ) {
        console.log('Not yet Implemented', name)
    }
}
