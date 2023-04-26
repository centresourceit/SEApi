import { Module } from '@nestjs/common';
import { LicenseService } from './license.service';
import { LicenseResolver } from './license.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [LicenseResolver, LicenseService]
})
export class LicenseModule {}
