import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateResultInput } from './create-result.input';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Result, Status } from '@prisma/client';

@InputType()
export class SearchTakeTestInput {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  projectId: number;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
