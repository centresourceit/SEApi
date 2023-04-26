import { Module } from '@nestjs/common';
import { PrincipleService } from './principle.service';
import { PrincipleResolver } from './principle.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [PrincipleResolver, PrincipleService]
})
export class PrincipleModule {}
