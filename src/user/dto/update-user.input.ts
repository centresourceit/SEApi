import { Role, Status } from '@prisma/client';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @IsOptional()
  @Field(() => String, { nullable: true })
  name: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  email: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  contact: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  address: String;

  @IsOptional()
  @Field(() => String, { nullable: true })
  profession: String;

  @IsOptional()
  @Field(() => Role, { nullable: true })
  role: Role;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
