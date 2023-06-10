import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateComplianceInput } from './dto/create-compliance.input';
import { UpdateComplianceInput } from './dto/update-compliance.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ComplianceService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllCompliances() {
    const compliance = await this.prisma.compliance.findMany();
    if (compliance.length == 0)
      throw new BadRequestException('There is no compliance.');
    return compliance;
  }

  async getAllCompliancesById(id: number) {
    const compliance = await this.prisma.compliance.findFirst({
      where: { id },
    });
    if (!compliance)
      throw new BadRequestException('No compliance exist with this id.');
    return compliance;
  }

  async createCompliance(compliance: CreateComplianceInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(compliance)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Compliance = await this.prisma.compliance.create({
      data: dataToCreate,
    });

    if (!Compliance)
      throw new BadRequestException('Unable to create compliance');
    return Compliance;
  }

  async updateComplianceById(id: number, compliance: UpdateComplianceInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(compliance)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingcompliance = await this.prisma.compliance.findUnique({
      where: { id: id },
    });

    if (!existingcompliance) {
      throw new NotFoundException(`compliance with id ${id} not found`);
    }

    const updatedcompliance = this.prisma.compliance.update({
      where: { id: id },
      data: dataToUpdate,
    });
    if (!updatedcompliance)
      throw new BadRequestException('Unable to update compliance.');
    return updatedcompliance;
  }
}
