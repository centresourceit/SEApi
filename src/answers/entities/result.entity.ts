import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Status, Result } from '@prisma/client';
import { User } from 'src/user/entities/user.entity';
import { License } from 'src/license/entities/license.entity';
import { Project } from 'src/project/entities/project.entity';
import { Answer } from './answer.entity';

registerEnumType(Result, {
  name: 'Result',
});

@ObjectType()
export class Results {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  projectId: number;

  @Field(() => Int)
  licenseId: number;

  @Field(() => Int)
  attemptNo: number;

  @Field(() => Int)
  totalScore: number;

  @Field(() => Result)
  resultStatus: Result;

  @Field(() => Status)
  certified: Status;

  @Field(() => String)
  certificatedId: string;

  @Field(() => Status)
  certificatePrivacy: Status;

  @Field(() => String, { nullable: true })
  adminComments: string;

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

  @Field(() => License)
  license: License;

  @Field(() => Project)
  project: Project;

  @Field(() => Answer)
  assesement: Answer;
}
