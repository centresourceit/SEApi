import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnswersService } from './answers.service';
import { Answer } from './entities/answer.entity';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { Results } from './entities/result.entity';
import { CreateResultInput } from './dto/create-result.input';
import { UpdateResultInput } from './dto/update-result.input';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { SearchResultInput } from './dto/search-result.input';

@UseGuards(AuthGuard)
@Resolver(() => Answer)
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}

  @Query(() => [Answer])
  getAllAnswers() {
    return this.answersService.getAllAnswers();
  }

  @Query(() => [Results])
  getAllResults() {
    return this.answersService.getAllResults();
  }

  @Query(() => [Results])
  searchResult(
    @Args('searchResultInput') searchResultInput: SearchResultInput,
  ) {
    return this.answersService.searchResult(searchResultInput);
  }

  @Mutation(() => Results)
  createResults(
    @Args('createAnswerInput') createAnswerInput: CreateAnswerInput,
    @Args('createResultInput') createResultInput: CreateResultInput,
  ) {
    return this.answersService.createResults(
      createAnswerInput,
      createResultInput,
    );
  }

  @Mutation(() => Results)
  updateResults(
    @Args('updateAnswerInput') updateAnswerInput: UpdateAnswerInput,
    @Args('updateResultInput') updateResultInput: UpdateResultInput,
  ) {
    return this.answersService.updateResults(
      updateAnswerInput,
      updateResultInput,
    );
  }
}
