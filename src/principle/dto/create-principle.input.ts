import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePrincipleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
