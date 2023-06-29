import { Role, Status } from '@prisma/client';
import { CreateCompanyInput } from './create-company.input';
import { InputType, Field, Int, PartialType, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  logo: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  website: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  ctoContact: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  description: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  address: string;

  @IsOptional()
  @Field(() => Role, { nullable: true })
  role: Role;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;

  @IsOptional()
  @Field(() => Date, { nullable: true })
  deletedAt: Date;
}
