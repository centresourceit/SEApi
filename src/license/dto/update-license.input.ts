import { LicenseType, Status } from '@prisma/client';
import { CreateLicenseInput } from './create-license.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateLicenseInput extends PartialType(CreateLicenseInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => LicenseType, { nullable: true })
  licenseType: LicenseType;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  paymentAmount: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  discountAmount: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  questionAllowed: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  projectPerLicense: number;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  discountValidTill: Date;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
