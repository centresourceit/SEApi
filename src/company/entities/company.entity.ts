import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';

@ObjectType()
export class Company {
  @Field(() => Int)
  id: number;

  @Field(() => String,{nullable:true})
  name: String;

  @Field(() => String,{nullable:true})
  logo: String;

  @Field(() => String,{nullable:true})
  website: String;

  @Field(() => String,{nullable:true})
  email: String;

  @Field(() => String,{nullable:true})
  ctoContact: String;

  @Field(() => String,{nullable:true})
  description: String;

  @Field(() => String,{nullable:true})
  address: String;

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
