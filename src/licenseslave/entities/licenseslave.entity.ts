import { ObjectType, Field, Int } from '@nestjs/graphql';
import { LicenseType, Status, user } from '@prisma/client';
import { License } from 'src/graphql';
import { License as Lic } from 'src/license/entities/license.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class Licenseslave {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  licenseTypeId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => Status)
  paymentStatus: Status;

  @Field(() => Date)
  licenseValidity: Date;

  @Field(() => String)
  paymentReference: string;

  @Field(() => Int)
  paymentAmount: number;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;

  @Field(() => User)
  user: user;

  @Field(() => Lic)
  licenseType: License;
}
