import { Module } from '@nestjs/common';
import { QuestionbankService } from './questionbank.service';
import { QuestionbankResolver } from './questionbank.resolver';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule],
  providers: [QuestionbankResolver, QuestionbankService]
})
export class QuestionbankModule {}
