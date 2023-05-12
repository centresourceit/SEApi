import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async updateProjectById(id: number, user: UpdateProjectInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(user)) {
      if (value) {
        dataToUpdate[key] = value;
      }
    }

    const existing = await this.prisma.project.findUnique({
      where: { id: id },
    });

    if (!existing) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    const updatedproject = this.prisma.project.update({
      where: { id: id },
      data: dataToUpdate,
    });

    if (!updatedproject)
      throw new BadRequestException('Unable to update project.');
    return updatedproject;
  }
}
