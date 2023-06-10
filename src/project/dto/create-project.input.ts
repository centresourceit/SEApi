import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateProjectInput {
  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  createdUserId: number;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  name: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  description: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
