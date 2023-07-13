import { InputType, Int, Field } from '@nestjs/graphql';
import { QuestionType } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class SavedAnswer {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  principleid: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  principlename: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  question: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  answer: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  mark: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  rec: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  version: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  license: number;

  @IsOptional()
  @Field(() => QuestionType, { nullable: true })
  questiontype: QuestionType;

  @IsOptional()
  @Field(() => String, { nullable: true })
  questioncode: string;

  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  status: boolean;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  updatedAt: Date;
}

@InputType()
export class CreateAnswerInput {
  @IsNotEmpty()
  @Field(() => [SavedAnswer])
  answers: [SavedAnswer];
}
