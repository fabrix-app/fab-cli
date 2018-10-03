#!/usr/bin/env node
import { OrbitalFactory } from '@orbital/core'
import { FabrixCLI } from './cli'

OrbitalFactory.bootstrap(FabrixCLI)
    .execute(process.argv)
