import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateResultInput } from './create-result.input';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { Result, Status } from '@prisma/client';

@InputType()
export class UpdateResultInput extends PartialType(CreateResultInput) {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  id: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  projectId: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  licenseId: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  assesementId: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  totalScore: number;

  @IsOptional()
  @Field(() => Result, { nullable: true })
  resultStatus: Result;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  certified: Status;

  @IsOptional()
  @Field(() => String, { nullable: true })
  certificatedId: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  adminComments: string;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  certificatePrivacy: Status;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
