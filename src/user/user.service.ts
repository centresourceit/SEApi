import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllUser() {
    const user = await this.prisma.user.findMany({
      include: {
        company: true,
        Project: true,
        assesementresult: true,
        UserLicenseslave: true,
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
        Project: true,
        assesementresult: true,
        UserLicenseslave: true,
      },
    });
    if (!user) throw new BadRequestException('No user exist with this id.');
    return user;
  }
}
