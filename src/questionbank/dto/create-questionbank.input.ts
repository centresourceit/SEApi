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
  @Field(() => Int, { nullable: true })
  principleId: number;

  @IsNotEmpty()
  @Field(() => QuestionType, { nullable: true })
  questionType: QuestionType;

  @IsNotEmpty()
  @Field(() => LicenseType, { nullable: true })
  questionPlan: LicenseType;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  question: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  description: string;

  @IsNotEmpty()
  @Field(() => [QuestionAnswerInput], { nullable: true })
  answer: [QuestionAnswerInput];
}
