import { InputType, Int, Field } from '@nestjs/graphql';
import { LicenseType, QuestionType, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class QuestionAnswerInput {
  @Field(() => String)
  answer: string;

  @Field(() => Int)
  mark: number;

  @Field(() => String)
  rec: string;
}

@InputType()
export class CreateQuestionbankInput {
  @IsNotEmpty()
  @Field(() => Int)
  principleId: number;

  @IsNotEmpty()
  @Field(() => Int)
  complianceId: number;

  @IsNotEmpty()
  @Field(() => QuestionType)
  questionType: QuestionType;

  @IsNotEmpty()
  @Field(() => String)
  question: string;

  @IsNotEmpty()
  @Field(() => String)
  description: string;

  @IsNotEmpty()
  @Field(() => String)
  questioncode: string;

  @IsOptional()
  @Field(() => Int)
  version: number;

  @IsNotEmpty()
  @Field(() => Int)
  licensesId: number;

  @IsNotEmpty()
  @Field(() => [QuestionAnswerInput])
  answer: [QuestionAnswerInput];

  @IsOptional()
  @Field(() => Int, { nullable: true })
  questionRefId: number;
}
