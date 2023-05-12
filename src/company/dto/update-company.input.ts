import { Role, Status } from '@prisma/client';
import { CreateCompanyInput } from './create-company.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateCompanyInput extends PartialType(CreateCompanyInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  logo: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  website: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  ctoContact: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  description: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  address: String;

  @IsOptional()
  @Field(() => Role, { nullable: true })
  role: Role;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
