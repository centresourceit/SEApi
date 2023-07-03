import { Status } from '@prisma/client';
import { CreateLicenseslaveInput } from './create-licenseslave.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class SearchLicenseslaveInput extends PartialType(
  CreateLicenseslaveInput,
) {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  licenseTypeId: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  paymentStatus: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  licenseValidity: Date;

  @IsOptional()
  @Field(() => String, { nullable: true })
  paymentReference: string;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  paymentAmount: number;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
