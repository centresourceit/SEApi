import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateLicenseslaveInput {
  @IsNotEmpty()
  @Field(() => Int)
  licenseTypeId: number;

  @IsNotEmpty()
  @Field(() => Status)
  paymentStatus: Status;

  @IsNotEmpty()
  @Field(() => Date)
  licenseValidity: Date;

  @IsNotEmpty()
  @Field(() => Int)
  userId: number;

  @IsNotEmpty()
  @Field(() => String)
  paymentReference: string;

  @IsNotEmpty()
  @Field(() => Int)
  paymentAmount: number;

  @IsNotEmpty()
  @Field(() => Status)
  status: Status;
}
