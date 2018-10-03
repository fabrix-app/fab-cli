import { CLI } from '@orbital/core'
import { AppCommand } from './commands/app.command'
import { ControllerCommand } from './commands/controller.command'
import { InstallCommand } from './commands/install.command'
import { ModelCommand } from './commands/model.command'
import { PolicyCommand } from './commands/policy.command'
import { ResolverCommand } from './commands/resolver.command'
import { ServiceCommand } from './commands/service.command'
import { SpoolCommand } from './commands/spool.command'

@CLI({
    name: 'fab',
    declarations: [
        AppCommand,
        SpoolCommand,
        ControllerCommand,
        InstallCommand,
        ModelCommand,
        PolicyCommand,
        ResolverCommand,
        ServiceCommand
    ],
    version: '1.0.0',
})
export class FabrixCLI { }
