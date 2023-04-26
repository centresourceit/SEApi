import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllCompany() {
    const companys = await this.prisma.company.findMany({
      include: {
        User: true,
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
        User: true,
      },
    });
    if (!company)
      throw new BadRequestException('No company exist with this id.');
    return company;
  }
}
