import { CreatePrincipleInput } from './create-principle.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePrincipleInput extends PartialType(CreatePrincipleInput) {
  @Field(() => Int)
  id: number;
}
