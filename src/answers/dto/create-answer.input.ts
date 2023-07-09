import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class SavedAnswer {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  id: number;

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
