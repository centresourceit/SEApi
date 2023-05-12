import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateAnswerInput, SavedAnswer } from './create-answer.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAnswerInput extends PartialType(CreateAnswerInput) {
  @IsOptional()
  @Field(() => [SavedAnswer], { nullable: true })
  answers: [SavedAnswer];
}
