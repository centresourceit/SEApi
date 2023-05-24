import { InputType, Int, Field } from '@nestjs/graphql';
import { ExperienceRate, FeedbackType, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class SavedFeedbackComment {
  @Field(() => Int)
  principleId: number;

  @Field(() => String)
  principle: string;

  @Field(() => String)
  comment: string;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => Date)
  updatedAt: Date;
}

@InputType()
export class CreateFeedbackInput {
  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsNotEmpty()
  @Field(() => FeedbackType, { nullable: true })
  feedbackType: FeedbackType;

  @IsNotEmpty()
  @Field(() => [SavedFeedbackComment], { nullable: true })
  comments: [SavedFeedbackComment];

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  resultComment: string;

  @IsNotEmpty()
  @Field(() => ExperienceRate, { nullable: true })
  experienceRate: ExperienceRate;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  toolComment: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  generalComment: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
