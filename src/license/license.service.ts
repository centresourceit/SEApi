import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLicenseInput } from './dto/create-license.input';
import { UpdateLicenseInput } from './dto/update-license.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LicenseService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllLicense() {
    const license = await this.prisma.user_licenses_master.findMany();
    if (license.length == 0)
      throw new BadRequestException('There is no license.');
    return license;
  }

  async getAllLicenseById(id: number) {
    const license = await this.prisma.user_licenses_master.findFirst({
      where: { id },
    });
    if (!license)
      throw new BadRequestException('No license exist with this id.');
    return license;
  }

  async createLicense(license: CreateLicenseInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(license)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const License = await this.prisma.user_licenses_master.create({
      data: dataToCreate,
    });

    if (!License) throw new BadRequestException('Unable to create license');
    return License;
  }

  async updateLicenseById(id: number, license: UpdateLicenseInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(license)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.user_licenses_master.findUnique({
      where: { id: id },
    });

    if (!existingUser) {
      throw new NotFoundException(`Licenses with id ${id} not found`);
    }

    const updatedlicense = this.prisma.user_licenses_master.update({
      where: { id: id },
      data: dataToUpdate,
    });
    if (!updatedlicense)
      throw new BadRequestException('Unable to update Licenses.');
    return updatedlicense;
  }
}
