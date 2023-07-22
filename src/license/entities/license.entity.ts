import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { LicenseType, Status } from '@prisma/client';

registerEnumType(LicenseType, {
  name: 'LicenseType',
});

@ObjectType()
export class License {
  @Field(() => Int)
  id: number;

  @Field(() => LicenseType)
  licenseType: LicenseType;

  @Field(() => Int)
  paymentAmount: number;

  @Field(() => String)
  name: string;

  @Field(() => Int, { nullable: true })
  licenseValidTill: number;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String)
  discountAmount: string;

  @Field(() => Int)
  questionAllowed: number;

  @Field(() => Int, { nullable: true })
  projectPerLicense: number;

  @Field(() => Date, { nullable: true })
  discountValidTill: Date;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
