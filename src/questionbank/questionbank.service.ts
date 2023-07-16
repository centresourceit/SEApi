import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQuestionbankInput } from './dto/create-questionbank.input';
import { UpdateQuestionbankInput } from './dto/update-questionbank.input';
import { PrismaService } from 'prisma/prisma.service';
import { question_bank } from '@prisma/client';

@Injectable()
export class QuestionbankService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllQuestion() {
    const questions = await this.prisma.question_bank.findMany({
      include: { principle: true, questionPlan: true, complince: true },
      where: { deletedAt: null },
      orderBy: [{ questionRefId: 'asc' }, { version: 'desc' }],
      distinct: ['questionRefId'],
    });
    if (questions.length == 0)
      throw new BadRequestException('There is no question');
    return questions;
  }

  async getQuestionById(id: number) {
    const question = await this.prisma.question_bank.findFirst({
      where: { id, deletedAt: null },
      include: {
        principle: true,
        questionPlan: true,
        complince: true,
      },
    });
    if (!question)
      throw new BadRequestException('No question exist with this id.');

    return question;
  }

  async createQuestion(question: CreateQuestionbankInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(question)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Question: question_bank = await this.prisma.question_bank.create({
      data: dataToCreate,
    });

    if (!Question) throw new BadRequestException('Unable to create question');

    if (question.questionRefId == null || question.questionRefId == undefined) {
      const updatedquestion = this.prisma.question_bank.update({
        where: { id: Question.id },
        data: { questionRefId: Question.id },
      });

      if (!updatedquestion)
        throw new BadRequestException('Unable to set question refrance id.');
      return updatedquestion;
    }
    return Question;
  }

  async updateQuestionById(id: number, question: UpdateQuestionbankInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(question)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existing = await this.prisma.question_bank.findUnique({
      where: { id: id },
    });

    if (!existing) {
      throw new NotFoundException(`Question with id ${id} not found`);
    }

    const updatedquestion = this.prisma.question_bank.update({
      where: { id: id },
      data: dataToUpdate,
    });

    if (!updatedquestion)
      throw new BadRequestException('Unable to update question.');
    return updatedquestion;
  }

  async deleteQuestionById(question: UpdateQuestionbankInput) {
    const existing = await this.prisma.question_bank.findUnique({
      where: { id: question.id },
    });

    if (!existing) {
      throw new NotFoundException(`Question with id ${question.id} not found`);
    }

    const deleteQuesion = this.prisma.question_bank.update({
      where: { id: question.id },
      data: { deletedAt: question.deletedAt },
    });

    if (!deleteQuesion)
      throw new BadRequestException('Unable to update question.');
    return deleteQuesion;
  }
}
