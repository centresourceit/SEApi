import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProject() {
    const projects = await this.prisma.project.findMany();
    if (projects.length == 0)
      throw new BadRequestException('There is no projects');
    return projects;
  }

  async getAllProjectById(id: number) {
    const project = await this.prisma.project.findFirst({
      where: { id },
    });
    if (!project)
      throw new BadRequestException('No project exist with this id.');
    return project;
  }
}
