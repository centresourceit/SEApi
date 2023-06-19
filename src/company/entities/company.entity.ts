import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';

@ObjectType()
export class Company {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  logo: string;

  @Field(() => String, { nullable: true })
  website: string;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => Float, { nullable: true })
  ctoContact: number;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  address: string;

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
