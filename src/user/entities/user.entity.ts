import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String,{nullable:true})
  name: String;

  @Field(() => String,{nullable:true})
  email: String;

  @Field(() => String,{nullable:true})
  contact: String;

  @Field(() => String,{nullable:true})
  address: String;

  @Field(() => String,{nullable:true})
  profession: String;

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
