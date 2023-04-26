import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuestionbankInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
