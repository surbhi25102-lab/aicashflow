import { Module } from '@nestjs/common';
import { ConnectionsService } from './connections/connections.service.js';
import { ImportsService } from './imports/imports.service.js';

@Module({ providers: [ConnectionsService, ImportsService] })
export class IntegrationsModule {}
