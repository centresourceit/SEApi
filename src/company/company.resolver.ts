import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(AuthGuard)
@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => [Company])
  getAllCompany() {
    return this.companyService.getAllCompany();
  }

  @Query(() => Company)
  getCompanyById(@Args('id', { type: () => Int }) id: number) {
    return this.companyService.getCompanyById(id);
  }

  @Mutation(() => Company)
  createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
  ) {
    return this.companyService.createCompany(createCompanyInput);
  }

  @Mutation(() => Company)
  updateCompanyById(
    @Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput,
  ) {
    return this.companyService.updateCompanyById(
      updateCompanyInput.id,
      updateCompanyInput,
    );
  }
}
