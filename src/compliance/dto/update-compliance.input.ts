import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateComplianceInput } from './create-compliance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class UpdateComplianceInput extends PartialType(CreateComplianceInput) {
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
  @Field(() => String, { nullable: true })
  LearnMoreLink: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
