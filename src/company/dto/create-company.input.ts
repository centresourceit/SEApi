import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { GraphQLScalarType } from 'graphql/type';
import { async } from 'rxjs';
import { Stream } from 'stream';

// let fileUploader: GraphQLScalarType = undefined;

// const GraphQLUpload = async () => {
//   return (await import('graphql-upload/GraphQLUpload.mjs')).default;
// };

// const upload = GraphQLUpload();
// upload.then((val) => (fileUploader = val));

let fileUploader: GraphQLScalarType = undefined;

const GraphQLUpload = () => {
  return import('graphql-upload/GraphQLUpload.mjs').then(
    (module) => module.default,
  );
};

const upload = async () => {
  const val = await GraphQLUpload();
  fileUploader = val;
};
upload();

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

  // @IsNotEmpty()
  // @Field(() => fileUploader)
  // image: Promise<FileUpload>;
}
