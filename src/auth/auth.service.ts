import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { GraphQLError, assertWrappingType } from 'graphql';
import { Prisma, user } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { LoginUserInput } from './dto/loginuser.input';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/contents';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async signup(email: string, password: string) {
    const foundUser: user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (foundUser) throw new BadRequestException('email already exist');
    const hashedPassword = await this.hashPassword(password);

    let user = await this.prisma.user.create({
      data: { email: email, password: hashedPassword },
    });

    const token = await this.singToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    if (!user) return { user: user };
    return { ...user, token };
  }

  async signin(email: string, password: string) {
    const user: user = await this.prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) throw new BadRequestException('Wrong Credentials');

    const isMatch = await this.comparePassword({
      password: password,
      hash: user.password,
    });
    if (!isMatch) throw new BadRequestException('Wrong Credentials');
    const token = await this.singToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    return { ...user, token };
  }

  async signout() {}

  async findUserByEmail(email: string): Promise<user> {
    const user: user = await this.prisma.user.findUnique({
      where: { email: email },
    });
    return user;
  }

  async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePassword(args: {
    password: string;
    hash: string;
  }): Promise<boolean> {
    return await bcrypt.compare(args.password, args.hash);
  }

  async singToken(args: {
    id: number;
    email: string;
    role: string;
  }): Promise<string> {
    const payload = args;
    return this.jwt.signAsync(payload, {
      secret: jwtSecret,
    });
  }
}
