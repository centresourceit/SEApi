import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { AuthModule } from './auth/auth.module';
import { QuestionbankModule } from './questionbank/questionbank.module';
import { PrincipleModule } from './principle/principle.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';
import { ProjectModule } from './project/project.module';
import { LicenseModule } from './license/license.module';
import { AnswersModule } from './answers/answers.module';
import { ComplianceModule } from './compliance/compliance.module';
import { LicenseslaveModule } from './licenseslave/licenseslave.module';
import { FeedbackModule } from './feedback/feedback.module';
import { UploaderModule } from './uploader/uploader.module';

import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      // rootPath: join(process.cwd(), '../public'), // added ../ to get one folder back
      // serveRoot: '/public/', //last slash was important
      serveRoot: '/public',
      rootPath: join(process.cwd(), 'public'),
    }),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      // typePaths: ["./**/*.graphql"]
    }),
    AuthModule,
    QuestionbankModule,
    PrincipleModule,
    UserModule,
    CompanyModule,
    ProjectModule,
    LicenseModule,
    AnswersModule,
    ComplianceModule,
    LicenseslaveModule,
    FeedbackModule,
    UploaderModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
