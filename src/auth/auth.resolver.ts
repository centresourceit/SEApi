import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginUserInput } from './dto/loginuser.input';
import { SignUpUserInput } from './dto/signup.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query((returns) => Auth)
  signin(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.signin(
      loginUserInput.email,
      loginUserInput.password,
    );
  }

  // @Query((returns) => Auth)
  // signin(
  //   @Args({ name: 'email', type: () => String }) email: string,
  //   @Args({ name: 'password', type: () => String }) password: string,
  // ) {
  //   return this.authService.signin(email, password);
  // }

  @Mutation((returns) => Auth)
  signup(@Args('signUpUserInput') signUpUserInput: SignUpUserInput) {
    return this.authService.signup(
      signUpUserInput.email,
      signUpUserInput.password,
    );
  }
  // @Mutation((returns) => Auth)
  // signup(
  //   @Args({ name: 'email', type: () => String }) email: string,
  //   @Args({ name: 'password', type: () => String }) password: string,
  // ) {
  //   return this.authService.signup(email, password);
  // }

  @Query((returns) => String)
  @UseGuards(AuthGuard)
  signout(@Context('user') user: any) {
    return 'user signout sucessfull';
  }

  @Query((returns) => String)
  @UseGuards(AuthGuard)
  getdata(@Context('user') user: any) {
    return 'user signout sucessfull';
  }
}
