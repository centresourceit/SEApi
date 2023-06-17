import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { LicenseType, QuestionType, Status } from '@prisma/client';
import { GraphQLScalarType } from 'graphql';
import { License } from 'src/license/entities/license.entity';
import { Principle } from 'src/principle/entities/principle.entity';

registerEnumType(QuestionType, {
  name: 'QuestionType',
});

registerEnumType(LicenseType, {
  name: 'LicenseType',
});

@ObjectType()
export class QuestionAns {
  @Field(() => String)
  answer: string;

  @Field(() => Int)
  mark: number;

  @Field(() => String)
  rec: string;
}

@ObjectType()
export class QuestionBank {
  @Field(() => Int)
  id: number;

  @Field(() => QuestionType)
  questionType: QuestionType;

  @Field(() => Int)
  licensesId: number;

  @Field(() => Status)
  status: Status;

  @Field(() => String)
  question: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String)
  questioncode: string;

  @Field(() => Int)
  version: number;

  @Field(() => [QuestionAns])
  answer: [QuestionAns];

  @Field(() => Int)
  questionRefId: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => Principle)
  principle: Principle;

  @Field(() => License)
  questionPlan: License;
}
