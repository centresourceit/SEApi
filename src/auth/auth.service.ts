import { BadRequestException, Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { jwtSecret, sendgridapi, websitelink } from 'src/utils/contents';
import sgMail from '@sendgrid/mail';
import { ChangePasswordInput } from './dto/changepassword.input';
import { ContactUserInput } from './dto/contact.input';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async signup(email: string, password: string) {
    const foundUser: user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (foundUser) throw new BadRequestException('email already exist');
    const hashedPassword = await this.hashPassword(password);

    let user = await this.prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: email.split('@')[0],
        status: 'INACTIVE',
      },
    });

    const token = await this.singToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    this.sendMail(user.email, user.email.toString().split('@')[0]);
    if (!user) return { user: user };
    return { ...user, token };
  }

  async signin(email: string, password: string) {
    const user: user = await this.prisma.user.findFirst({
      where: { email: email },
    });
    if (!user) throw new BadRequestException('Wrong Credentials');

    const isMatch = await this.comparePassword({
      password: password,
      hash: user.password,
    });
    const lastfive = user.password.substring(user.password.length - 10);

    if (!(isMatch || lastfive == password)) {
      throw new BadRequestException('Wrong Credentials');
    }

    const token = await this.singToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    return { ...user, token };
  }

  async changepassword(changePasswordInput: ChangePasswordInput) {
    const user: user = await this.prisma.user.findUnique({
      where: { id: changePasswordInput.id },
    });
    if (!user) throw new BadRequestException('No User Exist with this id.');
    const isMatch = await this.comparePassword({
      password: changePasswordInput.oldpassword,
      hash: user.password,
    });
    const lastfive = user.password.substring(user.password.length - 10);

    if (!(isMatch || lastfive == changePasswordInput.oldpassword))
      throw new BadRequestException('Old password did not match. Try again!');

    if (changePasswordInput.newpassword != changePasswordInput.repassword)
      throw new BadRequestException(
        'New Password and Re-Password should be same.',
      );

    const hashedPassword = await this.hashPassword(
      changePasswordInput.newpassword,
    );

    const updateduser = await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });
    if (!updateduser)
      throw new BadRequestException(
        'Unable to update the user password. Try again!',
      );
    return true;
  }

  async forgetpassword(mail: string) {
    const user: user = await this.prisma.user.findFirst({
      where: { email: mail },
    });
    if (!user)
      throw new BadRequestException('No user exist with this email id.');

    await this.sendMailforgetpassword(
      user.email,
      user.password.substring(user.password.length - 10),
    );
    return true;
  }

  async findUserByEmail(email: string): Promise<user> {
    const user: user = await this.prisma.user.findFirst({
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

  async sendMail(mail: string, name: string) {
    sgMail.setApiKey(sendgridapi);
    const msg = {
      to: mail,
      from: 'info@smartethics.net',
      subject: 'Your Smart Ethics Email Verification Link',
      html: `<h3>Hello ${name}</h3><br /><strong> Welcome to Smart Ethics.</strong> <br /><p>Please click on the link to verify your email id</p> <br /><br /><a href="${websitelink}verifyuser/${mail}">Click Here</a><br/><p>If you didn't request to receive this activation mail, please contact the Smart Ethics team</p><br /><br /><p>Your Smart Ethics Team</p>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        return true;
      })
      .catch((error) => {
        throw new BadRequestException(error);
      });
    return false;
  }
  async sendMailforgetpassword(mail: string, password: string) {
    sgMail.setApiKey(sendgridapi);
    const msg = {
      to: mail,
      from: 'info@smartethics.net',
      subject: 'Forgot password Mail',
      html: `<strong>Your password for you ${mail}</strong><br /><p>${password}</p>`,
    };
    sgMail
      .send(msg)
      .then(() => {})
      .catch((error) => {
        throw new BadRequestException(error);
      });
  }

  async contactUs(contactUserInput: ContactUserInput) {
    sgMail.setApiKey(sendgridapi);
    const msg = {
      to: 'contact@smartethics.net',
      from: 'info@smartethics.net',
      subject: 'Contact Us',
      html: `<h3>From ${contactUserInput.name}</h3><br /><strong>user E-Mail ${contactUserInput.email}</strong><br/><br/><br/><p>${contactUserInput.text}</p><br />`,
    };
    sgMail
      .send(msg)
      .then(() => {
        return true;
      })
      .catch((error) => {
        throw new BadRequestException(error);
      });
    return false;
  }
}
