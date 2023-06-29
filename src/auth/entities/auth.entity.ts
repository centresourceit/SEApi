import {
  ObjectType,
  Field,
  Int,
  registerEnumType,
  Float,
} from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';

registerEnumType(Role, {
  name: 'Role',
});

registerEnumType(Status, {
  name: 'Status',
});

@ObjectType()
export class Auth {
  @Field(() => String)
  token: string;

  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  contact: string;

  @Field(() => Int, { nullable: true })
  companyId: number;

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
