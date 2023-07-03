import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { PrismaService } from 'prisma/prisma.service';
import { SearchProjectInput } from './dto/search-project.input';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProject() {
    const projects = await this.prisma.project.findMany({
      where: { deletedAt: null },
    });
    if (projects.length == 0)
      throw new BadRequestException('There is no projects');
    return projects;
  }

  async getAllProjectById(id: number) {
    const project = await this.prisma.project.findFirst({
      where: { id, deletedAt: null },
    });
    if (!project)
      throw new BadRequestException('No project exist with this id.');
    return project;
  }

  async searchProject(search: SearchProjectInput) {
    const project = await this.prisma.project.findMany({
      where: search,
    });

    if (project.length == 0)
      throw new BadRequestException('There are no projects.');
    return project;
  }

  async createProject(project: CreateProjectInput) {
    const dataToCreate: any = {};

    for (const [key, value] of Object.entries(project)) {
      if (value) {
        dataToCreate[key] = value;
      }
    }

    const Project = await this.prisma.project.create({
      data: dataToCreate,
    });

    if (!Project) throw new BadRequestException('Unable to create project');
    return Project;
  }

  async updateProjectById(id: number, project: UpdateProjectInput) {
    const dataToUpdate: {
      [key: string]: any;
    } = {};

    for (const [key, value] of Object.entries(project)) {
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

  async deleteProjectById(project: UpdateProjectInput) {
    const existing = await this.prisma.project.findUnique({
      where: { id: project.id },
    });

    if (!existing) {
      throw new NotFoundException(`Project with id ${project.id} not found`);
    }

    const deleteProject = this.prisma.project.update({
      where: { id: project.id },
      data: { deletedAt: project.deletedAt },
    });

    if (!deleteProject)
      throw new BadRequestException('Unable to update project.');
    return deleteProject;
  }
}
