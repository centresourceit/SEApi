import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { ExperienceRate, FeedbackType, Status } from '@prisma/client';
import { User } from 'src/user/entities/user.entity';

registerEnumType(FeedbackType, {
  name: 'FeedbackType',
});

registerEnumType(ExperienceRate, {
  name: 'ExperienceRate',
});

@ObjectType()
export class FeedbackComment {
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

@ObjectType()
export class Feedback {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => FeedbackType, { nullable: true })
  feedbackType: FeedbackType;

  @Field(() => String, { nullable: true })
  resultComment: String;

  @Field(() => [FeedbackComment], { nullable: true })
  comments: [FeedbackComment];

  @Field(() => ExperienceRate, { nullable: true })
  experienceRate: ExperienceRate;

  @Field(() => String, { nullable: true })
  toolComment: String;

  @Field(() => String, { nullable: true })
  generalComment: String;

  @Field(() => String, { nullable: true })
  email: String;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => User)
  user: User;
}
