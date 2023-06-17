import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePrincipleInput } from './dto/create-principle.input';
import { UpdatePrincipleInput } from './dto/update-principle.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class PrincipleService {
  constructor(private readonly prisma: PrismaService) {}
  async getPrinciple() {
    const principles = await this.prisma.principle.findMany({
      include: { question_bank: true },
      where: { deletedAt: null },
    });

    if (principles.length == 0)
      throw new BadRequestException('There is no principle');
    return principles;
  }

  async getPrincipleById(id: number) {
    const principle = await this.prisma.principle.findFirst({
      where: { id, deletedAt: null },
      include: { question_bank: true },
    });
    if (!principle)
      throw new BadRequestException('No principle exist with this id.');
    return principle;
  }

  async createPrinciple(principle: CreatePrincipleInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(principle)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Principle = await this.prisma.principle.create({
      data: dataToCreate,
    });

    if (!Principle) throw new BadRequestException('Unable to create principle');
    return Principle;
  }

  async updatePrincipleById(id: number, principle: UpdatePrincipleInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(principle)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.principle.findUnique({
      where: { id: id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Principle with id ${id} not found`);
    }

    const updatedprinciple = this.prisma.principle.update({
      where: { id: id },
      data: dataToUpdate,
    });
    if (!updatedprinciple)
      throw new BadRequestException('Unable to update Principle.');
    return updatedprinciple;
  }

  async deletePrincipleById(principle: UpdatePrincipleInput) {
    const existing = await this.prisma.principle.findUnique({
      where: { id: principle.id },
    });

    if (!existing) {
      throw new NotFoundException(
        `Principle with id ${principle.id} not found`,
      );
    }

    const deletePrinciple = this.prisma.principle.update({
      where: { id: principle.id },
      data: { deletedAt: principle.deletedAt },
    });

    if (!deletePrinciple)
      throw new BadRequestException('Unable to update principle.');
    return deletePrinciple;
  }
}
