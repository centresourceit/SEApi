import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';

// import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.mjs';
// import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.mjs';
// const graphqlUploadExpress = require('graphql-upload/graphqlUploadExpress.mjs');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // app.use(helmet());

  //global validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // app.use(
  //   '/graphql',
  //   graphqlUploadExpress({ maxFileSize: 50000000, maxFiles: 10 }),
  // );

  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(5573);
}
bootstrap();
