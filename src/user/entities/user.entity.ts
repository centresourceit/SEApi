import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Role, Status } from '@prisma/client';
import { Company } from 'src/company/entities/company.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  email: string;

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

  @Field(() => Company, { nullable: true })
  company: Company;
}
