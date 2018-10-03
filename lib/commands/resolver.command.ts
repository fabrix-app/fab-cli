import { Command, Executable, Param } from '@orbital/core'

@Command({
    name: 'resolver',
    aliases: ['r'],
    description: 'Create a Fabrix Resolver'
})
export class ResolverCommand extends Executable {
    execute(
        @Param({ required: true }) name: string
    ) {
        console.log('Not yet Implemented', name)
    }
}
