import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUser() {
    const user = await this.prisma.user.findMany({
      include: {
        company: true,
        project: true,
        assesement_result: true,
        user_license_slave: true,
      },
    });
    if (user.length == 0) throw new BadRequestException('There is no user');
    return user;
  }

  async getUserById(id: number) {
    const user = await this.prisma.user.findFirst({
      where: { id },
      include: {
        company: true,
        project: true,
        assesement_result: true,
        user_license_slave: true,
      },
    });
    if (!user) throw new BadRequestException('No user exist with this id.');
    return user;
  }

  async updateUserById(id: number, user: UpdateUserInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(user)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { id: id },
    });

    if (!existingUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const updateduser = this.prisma.user.update({
      where: { id: id },
      data: dataToUpdate,
    });
    if (!updateduser) throw new BadRequestException('Unable to update.');
    return updateduser;
  }
}
