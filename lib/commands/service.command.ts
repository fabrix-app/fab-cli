import { Command, Executable, Param } from '@orbital/core'

@Command({
    name: 'service',
    aliases: ['s'],
    description: 'Create a Fabrix Service'
})
export class ServiceCommand extends Executable {
    execute(
        @Param({ required: true }) name: string
    ) {
        console.log('Not yet Implemented', name)
    }
}
