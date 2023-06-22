import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { PrismaService } from 'prisma/prisma.service';
import { CreateResultInput } from './dto/create-result.input';
import { UpdateResultInput } from './dto/update-result.input';
import { SearchResultInput } from './dto/search-result.input';

@Injectable()
export class AnswersService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllAnswers() {
    const answers = await this.prisma.assesement_result_revised.findMany({
      include: { assesement_result: true },
    });
    if (answers.length == 0)
      throw new BadRequestException('There is no answers');
    return answers;
  }

  async getAllResults() {
    const results = await this.prisma.assesement_result.findMany({
      include: {
        user: true,
        license: true,
        project: true,
        assesement: true,
      },
    });

    if (results.length == 0)
      throw new BadRequestException('There is no results');

    return results;
  }

  async searchResult(searchResultInput: SearchResultInput) {
    const results = await this.prisma.assesement_result.findMany({
      where: searchResultInput,
      include: {
        user: true,
        license: true,
        project: true,
        assesement: true,
      },
    });

    if (results.length == 0)
      throw new BadRequestException('There is no results');
    return results;
  }

  async createResults(
    createAnswerInput: CreateAnswerInput,
    createResultInput: CreateResultInput,
  ) {
    const answer = await this.prisma.assesement_result_revised.create({
      data: {
        result: createAnswerInput.answers.map((answer) => ({
          question: answer.question,
          answer: answer.answer,
          mark: answer.mark,
          rec: answer.rec,
          status: answer.status,
          updatedAt: answer.updatedAt.toJSON(),
        })),
      },
    });

    if (!answer) throw new BadRequestException('Unable to create answers');
    createResultInput.assesementId = answer.id;

    const result = await this.prisma.assesement_result.create({
      data: {
        userId: createResultInput.userId,
        projectId: createResultInput.projectId,
        licenseId: createResultInput.licenseId,
        assesementId: createResultInput.assesementId,
        totalScore: createResultInput.totalScore,
        certificatedId: createResultInput.certificatedId.toString(),
      },
    });

    return { ...result, answer };
  }

  async updateResults(
    updateAnswerInput: UpdateAnswerInput,
    updateResultInput: UpdateResultInput,
  ) {
    const resultsearch = await this.prisma.assesement_result.findFirst({
      where: {
        userId: updateResultInput.userId,
        projectId: updateResultInput.projectId,
      },
    });

    if (!resultsearch)
      throw new BadRequestException(
        `Result with id ${updateResultInput.id} not found`,
      );

    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(updateResultInput)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const result = await this.prisma.assesement_result.update({
      where: {
        id: resultsearch.id,
      },
      data: dataToUpdate,
    });

    const answer = await this.prisma.assesement_result_revised.update({
      where: { id: result.id },
      data: {
        result: updateAnswerInput.answers.map((answer) => ({
          question: answer.question,
          answer: answer.answer,
          mark: answer.mark,
          rec: answer.rec,
          status: answer.status,
          updatedAt: answer.updatedAt.toJSON(),
        })),
      },
    });
    return { ...result, answer };
  }
}
