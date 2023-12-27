import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateLicenseslaveInput } from './dto/update-licenseslave.input';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLicenseslaveInput } from './dto/create-licenseslave.input';
import { create } from 'domain';
import { SearchLicenseslaveInput } from './dto/search-licenseslave.input';

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

  async searchLicenseslave(search: SearchLicenseslaveInput) {
    const slave = await this.prisma.user_license_slave.findMany({
      where: search,
      include: { licenseType: true },
    });

    if (slave.length == 0)
      throw new BadRequestException('There are no license slave.');
    return slave;
  }

  async getUserLicenseSlave(id: number) {
    const slave = await this.prisma.user_license_slave.findFirst({
      where: { userId: id },
      include: { licenseType: true, assesement_result: true, user: true },
      distinct: ['createdAt'],
      orderBy: { createdAt: 'desc' },
    });
    if (!slave)
      throw new BadRequestException(
        'There are no license slave for this user.',
      );

    if (slave.licenseType.licenseType == 'FREE') return slave;
    if (new Date(slave.licenseValidity) > new Date()) return slave;

    const freeslave = await this.prisma.user_license_slave.findFirst({
      where: { userId: id, licenseType: { licenseType: 'FREE' } },
      include: { licenseType: true, assesement_result: true, user: true },
      distinct: ['createdAt'],
    });
    if (freeslave) return freeslave;
    const createfreeslave = await this.prisma.user_licenses_master.findFirst({
      where: { licenseType: 'FREE' },
    });
    if (!createfreeslave)
      throw new BadRequestException('There is no free License in project.');

    const createfreelicense = await this.createLicenseSlave({
      licenseValidity: new Date(),
      paymentAmount: 0,
      paymentReference: '',
      paymentStatus: 'ACTIVE',
      status: 'ACTIVE',
      userId: id,
      licenseTypeId: createfreeslave.id,
    });
    return createfreelicense;
  }

  async createLicenseSlave(license: CreateLicenseslaveInput) {
    const userlicense = await this.prisma.user_license_slave.findFirst({
      where: { userId: license.userId, licenseTypeId: license.licenseTypeId },
      include: { licenseType: true },
    });
    if (userlicense) {
      const validDays: number = userlicense.licenseType.licenseValidTill;
      if (userlicense.licenseType.licenseType == 'FREE') return userlicense;

      // if lincense is not expired then create a the new license with last license validity + validDays
      if (new Date(userlicense.licenseValidity) > new Date()) {
        const createLicense = await this.prisma.user_license_slave.create({
          data: {
            licenseValidity: new Date(
              new Date(userlicense.licenseValidity).setDate(
                new Date(userlicense.licenseValidity).getDate() + validDays,
              ),
            ),
            paymentAmount: license.paymentAmount,
            paymentReference: license.paymentReference,
            paymentStatus: license.paymentStatus,
            status: license.status,
            userId: license.userId,
            licenseTypeId: license.licenseTypeId,
          },
          include: { user: true, licenseType: true },
        });
        if (!createLicense)
          throw new BadRequestException('Unable to create license slave');
        return createLicense;
      } else {
        const dataToCreate: any = {};

        for (const [key, value] of Object.entries(license)) {
          if (value) {
            dataToCreate[key] = value;
          }
        }

        const License = await this.prisma.user_license_slave.create({
          data: dataToCreate,
        });

        if (!License)
          throw new BadRequestException('Unable to create license slave');
        return License;
      }
    }

    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(license)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const License = await this.prisma.user_license_slave.create({
      data: dataToCreate,
    });

    if (!License)
      throw new BadRequestException('Unable to create license slave');
    return License;
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
