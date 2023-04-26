import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QuestionbankService } from './questionbank.service';
import { CreateQuestionbankInput } from './dto/create-questionbank.input';
import { UpdateQuestionbankInput } from './dto/update-questionbank.input';
import { QuestionBank } from './entities/questionbank.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Resolver(() => QuestionBank)
export class QuestionbankResolver {
  constructor(private readonly questionbankService: QuestionbankService) {}

 
  @Query(() => [QuestionBank])
  getAllQuestion() {
    return this.questionbankService.getAllQuestion();
  }

  @Query(() => QuestionBank)
  getAllQuestionById(@Args('id', { type: () => Int }) id: number) {
    return this.questionbankService.getAllQuestionById(id);
  }
}
