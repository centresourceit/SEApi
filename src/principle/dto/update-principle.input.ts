import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreatePrincipleInput } from './create-principle.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class UpdatePrincipleInput extends PartialType(CreatePrincipleInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  description: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
