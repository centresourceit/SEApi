import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from 'class-validator';

@InputType()
export class ChangePasswordInput {
  @IsNumber()
  @IsNotEmpty()
  @Field(() => Int)
  id: number;

  @Length(8, 16, { message: 'Old Password has to be at between 8 to 16 chars' })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  oldpassword: string;

  @Length(8, 16, { message: 'New Password has to be at between 8 to 16 chars' })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  newpassword: string;

  @Length(8, 16, { message: 'Re-Password has to be at between 8 to 16 chars' })
  @IsString()
  @IsNotEmpty()
  @Field(() => String)
  repassword: string;
}
