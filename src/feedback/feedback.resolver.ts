import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FeedbackService } from './feedback.service';
import { Feedback } from './entities/feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(AuthGuard)
@Resolver(() => Feedback)
export class FeedbackResolver {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Query(() => [Feedback])
  getAllFeedback() {
    return this.feedbackService.getAllFeedback();
  }

  @Query(() => Feedback)
  getAllFeedbackById(@Args('id', { type: () => Int }) id: number) {
    return this.feedbackService.getAllFeedbackById(id);
  }

  @Mutation(() => Feedback)
  createFeedback(
    @Args('createFeedbackInput') createFeedbackInput: CreateFeedbackInput,
  ) {
    return this.feedbackService.createFeedback(createFeedbackInput);
  }
}
