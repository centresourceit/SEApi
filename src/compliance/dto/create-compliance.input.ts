import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateComplianceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
