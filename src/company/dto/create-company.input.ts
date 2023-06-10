import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Stream } from 'stream';

interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@InputType()
export class CreateCompanyInput {
  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  name: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  logo: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  website: string;

  @IsNotEmpty()
  @Field(() => String, { nullable: true })
  email: string;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  ctoContact: Number;

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
