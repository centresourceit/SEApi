import { ObjectType, Field, Int } from '@nestjs/graphql';
import { user } from '@prisma/client';
import { License } from 'src/license/entities/license.entity';
import { Project } from 'src/project/entities/project.entity';
import { User } from 'src/user/entities/user.entity';
import { Results } from './result.entity';

@ObjectType()
export class SavedAns {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  question: string;

  @Field(() => String)
  answer: string;

  @Field(() => Int)
  mark: number;

  @Field(() => String)
  rec: string;

  @Field(() => Int)
  version: number;

  @Field(() => Boolean)
  status: boolean;

  @Field(() => Date)
  updatedAt: Date;
}

@ObjectType()
export class Answer {
  @Field(() => Int)
  id: number;

  @Field(() => [SavedAns], { nullable: true })
  result: [SavedAns];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => Results)
  assesment: Results;
}
