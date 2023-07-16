import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateComplianceInput {
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => String)
  logo: string;

  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @IsNotEmpty()
  @Field(() => String)
  LearnMoreLink: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
