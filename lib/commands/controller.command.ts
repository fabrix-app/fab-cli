import { Command, Executable, Param } from '@orbital/core'

@Command({
    name: 'controller',
    aliases: ['c'],
    description: 'Create a Fabrix Controller'
})
export class ControllerCommand extends Executable {
    execute(
        @Param({ required: true }) name: string
    ) {
        console.log('Not yet Implemented', name)
    }
}
