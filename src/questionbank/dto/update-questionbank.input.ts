import { CreateQuestionbankInput } from './create-questionbank.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionbankInput extends PartialType(CreateQuestionbankInput) {
  @Field(() => Int)
  id: number;
}
