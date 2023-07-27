import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class ContactUserInput {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  text: string;
}
