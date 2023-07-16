import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@ObjectType()
export class Compliance {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  logo: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  LearnMoreLink: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
