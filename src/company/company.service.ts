import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateCompanyInput } from './dto/update-company.input';
import { CreateCompanyInput } from './dto/create-company.input';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllCompany() {
    const companys = await this.prisma.company.findMany({
      include: {
        user: true,
      },
    });
    if (companys.length == 0)
      throw new BadRequestException('There is no question');
    return companys;
  }

  async getCompanyById(id: number) {
    const company = await this.prisma.company.findFirst({
      where: { id },
      include: {
        user: true,
      },
    });
    if (!company)
      throw new BadRequestException('No company exist with this id.');
    return company;
  }

  async createCompany(company: CreateCompanyInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(company)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Company = await this.prisma.company.create({
      data: dataToCreate,
    });

    if (!Company) throw new BadRequestException('Unable to create company');
    return Company;
  }

  async updateCompanyById(id: number, company: UpdateCompanyInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(company)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.company.findUnique({
      where: { id: id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Company with id ${id} not found`);
    }

    const updatedlicense = this.prisma.company.update({
      where: { id: id },
      data: dataToUpdate,
    });
    if (!updatedlicense)
      throw new BadRequestException('Unable to update Company.');
    return updatedlicense;
  }
}
