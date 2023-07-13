import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Role } from '@prisma/client';
import { Auth } from 'src/auth/entities/auth.entity';
import { SignUpUserInput } from 'src/graphql';

@UseGuards(AuthGuard)
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(new RoleGuard(Role.ADMIN))
  @Query(() => [User])
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Query(() => User)
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Mutation(() => User)
  updateUserById(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.updateUserById(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  deleteUserById(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.deleteUserById(updateUserInput);
  }
}
