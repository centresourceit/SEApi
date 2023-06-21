import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { GraphQLScalarType } from 'graphql/type';
import { async } from 'rxjs';
import { Stream } from 'stream';

@InputType()
export class CreateCompanyInput {
  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  name: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  website: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  logo: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  email: string;

  @IsNotEmpty()
  @Field(() => Float, { nullable: true })
  ctoContact: number;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  description: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  address: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
