import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionbankInput } from './dto/create-questionbank.input';
import { UpdateQuestionbankInput } from './dto/update-questionbank.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class QuestionbankService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllQuestion() {
    const questions = await this.prisma.questionBank.findMany({
      include: { principle: true },
    });
    if (questions.length == 0)
      throw new BadRequestException('There is no question');
    return questions;
  }

  async getAllQuestionById(id: number) {
    const question = await this.prisma.questionBank.findFirst({
      where: { id },
      include: {
        principle: true,
      },
    });
    if (!question)
      throw new BadRequestException('No question exist with this id.');

    return question;
  }
}
