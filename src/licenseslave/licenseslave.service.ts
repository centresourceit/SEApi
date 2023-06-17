import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateLicenseslaveInput } from './dto/update-licenseslave.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LicenseslaveService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllLicenseslave() {
    const license = await this.prisma.user_license_slave.findMany({
      include: { user: true, licenseType: true },
      where: { deletedAt: null },
    });
    if (license.length == 0)
      throw new BadRequestException('There is no license.');
    return license;
  }

  async getAllLicenseslaveById(id: number) {
    const license = await this.prisma.user_license_slave.findFirst({
      where: { id, deletedAt: null },
      include: { user: true, licenseType: true },
    });
    if (!license)
      throw new BadRequestException('No licenseslave exist with this id.');
    return license;
  }

  async updateLicenseslaveById(id: number, slave: UpdateLicenseslaveInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(slave)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.user_license_slave.findUnique({
      where: { id: id },
      include: { user: true, licenseType: true },
    });

    if (!existingUser) {
      throw new NotFoundException(`Licenseslave with id ${id} not found.`);
    }

    const updatedlicense = this.prisma.user_license_slave.update({
      where: { id: id },
      data: dataToUpdate,
      include: { user: true, licenseType: true },
    });
    if (!updatedlicense)
      throw new BadRequestException('Unable to update Licenseslave.');
    return updatedlicense;
  }

  async deleteLicenseSlaveById(slave: UpdateLicenseslaveInput) {
    const existing = await this.prisma.user_license_slave.findUnique({
      where: { id: slave.id },
    });

    if (!existing) {
      throw new NotFoundException(`Licenseslave with id ${slave.id} not found`);
    }

    const deleteLicenseslave = this.prisma.user_license_slave.update({
      where: { id: slave.id },
      data: { deletedAt: slave.deletedAt },
    });

    if (!deleteLicenseslave)
      throw new BadRequestException('Unable to update licenseslave.');
    return deleteLicenseslave;
  }
}
