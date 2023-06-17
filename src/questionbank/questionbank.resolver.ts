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
  getQuestionById(@Args('id', { type: () => Int }) id: number) {
    return this.questionbankService.getQuestionById(id);
  }

  @Mutation(() => QuestionBank)
  createQuestion(
    @Args('createQuestionbankInput')
    createQuestionbankInput: CreateQuestionbankInput,
  ) {
    return this.questionbankService.createQuestion(createQuestionbankInput);
  }

  @Mutation(() => QuestionBank)
  updateQuestionById(
    @Args('updateQuestionbankInput')
    updateQuestionbankInput: UpdateQuestionbankInput,
  ) {
    return this.questionbankService.updateQuestionById(
      updateQuestionbankInput.id,
      updateQuestionbankInput,
    );
  }

  @Mutation(() => QuestionBank)
  deleteQuestionById(
    @Args('updateQuestionbankInput') updateQuestionbankInput: UpdateQuestionbankInput,
  ) {
    return this.questionbankService.deleteQuestionById(updateQuestionbankInput);
  }
}
