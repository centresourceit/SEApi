import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLicenseslaveInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
