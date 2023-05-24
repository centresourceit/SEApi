import { Module } from '@nestjs/common';
import { LicenseslaveService } from './licenseslave.service';
import { LicenseslaveResolver } from './licenseslave.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [LicenseslaveResolver, LicenseslaveService],
})
export class LicenseslaveModule {}
