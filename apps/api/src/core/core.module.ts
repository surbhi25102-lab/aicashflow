import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations/organizations.service.js';
import { MembershipsService } from './memberships/memberships.service.js';

@Module({ providers: [OrganizationsService, MembershipsService], exports: [OrganizationsService, MembershipsService] })
export class CoreModule {}
