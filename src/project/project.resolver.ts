import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(AuthGuard)
@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => [Project])
  getAllProject() {
    return this.projectService.getAllProject();
  }

  @Query(() => Project)
  getAllProjectById(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.getAllProjectById(id);
  }

  @Mutation(() => Project)
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.createProject(createProjectInput);
  }

  @Mutation(() => Project)
  updateProjectById(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectService.updateProjectById(
      updateProjectInput.id,
      updateProjectInput,
    );
  }

  @Mutation(() => Project)
  deleteProjectById(
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectService.deleteProject(updateProjectInput);
  }
}
