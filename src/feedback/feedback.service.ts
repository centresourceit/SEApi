import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class FeedbackService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllFeedback() {
    const feedback = await this.prisma.feedback.findMany({
      include: { user: true },
    });
    if (feedback.length == 0)
      throw new BadRequestException('There is no feedback.');
    return feedback;
  }

  async getAllFeedbackById(id: number) {
    const feedback = await this.prisma.feedback.findFirst({
      where: { id },
      include: { user: true },
    });
    if (!feedback)
      throw new BadRequestException('No feedback exist with this id.');
    return feedback;
  }

  async createFeedback(createFeedbackInput: CreateFeedbackInput) {
    const feedback = await this.prisma.feedback.create({
      include: { user: true },
      data: {
        userId: createFeedbackInput.userId,
        feedbackType: createFeedbackInput.feedbackType,
        comments: createFeedbackInput.comments.map((principle) => ({
          principleId: principle.principleId,
          principle: principle.principle,
          comment: principle.comment,
          status: principle.status,
          updatedAt: principle.updatedAt.toJSON(),
        })),
        resultComment: createFeedbackInput.resultComment,
        experienceRate: createFeedbackInput.experienceRate,
        toolComment: createFeedbackInput.toolComment,
        generalComment: createFeedbackInput.generalComment,
        email: createFeedbackInput.email,
        status: createFeedbackInput.status,
      },
    });

    if (!feedback) throw new BadRequestException('Unable to create feedback');
    return feedback;
  }
}
