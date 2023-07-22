import { InputType, Int, Field } from '@nestjs/graphql';
import { LicenseType } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateLicenseInput {
  @IsNotEmpty()
  @Field(() => LicenseType)
  licenseType: LicenseType;

  @IsNotEmpty()
  @Field(() => Int)
  paymentAmount: number;

  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @Field(() => Int)
  discountAmount: number;

  @IsNotEmpty()
  @Field(() => Int)
  questionAllowed: number;

  @IsNotEmpty()
  @Field(() => Int)
  projectPerLicense: number;

  @IsNotEmpty()
  @Field(() => Date)
  discountValidTill: Date;

  @IsNotEmpty()
  @Field(() => Int)
  licenseValidTill: number;

  @IsNotEmpty()
  @Field(() => String)
  description: string;
}
