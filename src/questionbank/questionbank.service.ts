import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateQuestionbankInput } from './dto/create-questionbank.input';
import { UpdateQuestionbankInput } from './dto/update-questionbank.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class QuestionbankService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllQuestion() {
    const questions = await this.prisma.question_bank.findMany({
      include: { principle: true },
    });
    if (questions.length == 0)
      throw new BadRequestException('There is no question');
    return questions;
  }

  async getAllQuestionById(id: number) {
    const question = await this.prisma.question_bank.findFirst({
      where: { id },
      include: {
        principle: true,
      },
    });
    if (!question)
      throw new BadRequestException('No question exist with this id.');

    return question;
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
    if (!updatedquestion) throw new BadRequestException('Unable to update question.');
    return updatedquestion;
  }
}
