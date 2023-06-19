import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => Float, { nullable: true })
  contact: number;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  profession: string;

  @Field(() => Role)
  role: Role;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
