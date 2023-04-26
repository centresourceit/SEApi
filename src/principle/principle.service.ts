import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePrincipleInput } from './dto/create-principle.input';
import { UpdatePrincipleInput } from './dto/update-principle.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PrincipleService {
  constructor(private readonly prisma: PrismaService) {}
  async getPrinciple() {
    const principles = await this.prisma.principle.findMany({
      include: { QuestionBank: true },
    });
    if (principles.length == 0)
      throw new BadRequestException('There is no principle');
    return principles;
  }

  async getPrincipleById(id: number) {
    const principle = await this.prisma.principle.findFirst({
      where: { id },
      include: { QuestionBank: true },
    });
    if (!principle)
      throw new BadRequestException('No principle exist with this id.');
    return principle;
  }
}
