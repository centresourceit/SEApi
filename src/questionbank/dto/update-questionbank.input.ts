import { LicenseType, QuestionType, Status } from '@prisma/client';
import { CreateQuestionbankInput } from './create-questionbank.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class QuestionAnswer {
  @Field(() => String)
  answer: string;

  @Field(() => Int)
  mark: number;

  @Field(() => String)
  rec: string;
}

@InputType()
export class UpdateQuestionbankInput extends PartialType(
  CreateQuestionbankInput,
) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => QuestionType, { nullable: true })
  questionType: QuestionType;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => String, { nullable: true })
  question: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  description: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  questioncode: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  licensesId: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  complianceId: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  version: number;

  @IsOptional()
  @Field(() => [QuestionAnswer], { nullable: true })
  answer: [QuestionAnswer];

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
