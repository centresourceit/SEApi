import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

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
}
