import { Module } from '@nestjs/common';
import { LicenseslaveService } from './licenseslave.service';
import { LicenseslaveResolver } from './licenseslave.resolver';

@Module({
  providers: [LicenseslaveResolver, LicenseslaveService]
})
export class LicenseslaveModule {}
