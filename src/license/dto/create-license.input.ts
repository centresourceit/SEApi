import { InputType, Int, Field } from '@nestjs/graphql';
import { LicenseType } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateLicenseInput {
  @IsNotEmpty()
  @Field(() => LicenseType, { nullable: true })
  licenseType: LicenseType;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  paymentAmount: number;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  discountAmount: number;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  questionAllowed: number;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  projectPerLicense: number;

  @IsNotEmpty()
  @Field(() => Date, { nullable: true })
  discountValidTill: Date;
}
