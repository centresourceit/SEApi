import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginUserInput } from './dto/loginuser.input';
import { SignUpUserInput } from './dto/signup.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { ChangePasswordInput } from './dto/changepassword.input';
import { ContactUserInput } from './dto/contact.input';

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

  @Mutation((returns) => Auth)
  signup(@Args('signUpUserInput') signUpUserInput: SignUpUserInput) {
    return this.authService.signup(
      signUpUserInput.email,
      signUpUserInput.password,
    );
  }

  @Mutation(() => Boolean)
  changepassword(
    @Args('changePasswordInput') changePasswordInput: ChangePasswordInput,
  ) {
    return this.authService.changepassword(changePasswordInput);
  }

  @Mutation(() => Boolean)
  forgetpassword(@Args('mail', { type: () => String }) mail: string) {
    return this.authService.forgetpassword(mail);
  }

  @Mutation(() => Boolean)
  contactUs(@Args('contactUserInput') contactUserInput: ContactUserInput) {
    return this.authService.contactUs(contactUserInput);
  }

  @Mutation(() => Boolean)
  resendmail(
    @Args('mail', { type: () => String }) mail: string,
    @Args('name', { type: () => String }) name: string,
  ) {
    return this.authService.sendMail(mail, name);
  }
}
