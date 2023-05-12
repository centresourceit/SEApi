import { Module } from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { ComplianceResolver } from './compliance.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [ComplianceResolver, ComplianceService],
})
export class ComplianceModule {}
