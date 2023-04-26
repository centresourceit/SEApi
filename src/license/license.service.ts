import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLicenseInput } from './dto/create-license.input';
import { UpdateLicenseInput } from './dto/update-license.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LicenseService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllLicense() {
    const license = await this.prisma.userLicensesMaster.findMany();
    if (license.length == 0)
      throw new BadRequestException('There is no license');
    return license;
  }

  async getAllLicenseById(id: number) {
    const license = await this.prisma.userLicensesMaster.findFirst({
      where: { id },
    });
    if (!license)
      throw new BadRequestException('No license exist with this id.');
    return license;
  }
}
