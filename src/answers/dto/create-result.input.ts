import { InputType, Int, Field } from '@nestjs/graphql';
import { Result, Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateResultInput {
  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  userId: number;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  projectId: number;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  licenseId: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  assesementId: number;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  totalScore: number;

  @IsOptional()
  @Field(() => Result, { nullable: true })
  resultStatus: Result;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  certified: Status;

  @IsNotEmpty()
  @Field(() => Int, { nullable: true })
  certificatedId: number;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  certificatePrivacy: Status;

  @IsOptional()
  @Field(() => Status, { nullable: true })
  status: Status;
}
