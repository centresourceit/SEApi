import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class LoginUserInput {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  email: string;

  @Length(8, 16, { message: 'Password has to be at between 8 to 16 chars' })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  password: string;
}
