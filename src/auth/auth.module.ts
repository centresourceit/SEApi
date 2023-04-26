import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [JwtModule],
  providers: [AuthResolver, AuthService, AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
