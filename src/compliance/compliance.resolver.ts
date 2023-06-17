import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComplianceService } from './compliance.service';
import { Compliance } from './entities/compliance.entity';
import { CreateComplianceInput } from './dto/create-compliance.input';
import { UpdateComplianceInput } from './dto/update-compliance.input';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(AuthGuard)
@Resolver(() => Compliance)
export class ComplianceResolver {
  constructor(private readonly complianceService: ComplianceService) {}

  @Query(() => [Compliance])
  getAllCompliances() {
    return this.complianceService.getAllCompliances();
  }

  @Query(() => Compliance)
  getAllCompliancesById(@Args('id', { type: () => Int }) id: number) {
    return this.complianceService.getAllCompliancesById(id);
  }

  @Mutation(() => Compliance)
  createCompliance(
    @Args('createComplianceInput') createComplianceInput: CreateComplianceInput,
  ) {
    return this.complianceService.createCompliance(createComplianceInput);
  }

  @Mutation(() => Compliance)
  updateComplianceById(
    @Args('updateComplianceInput') updateComplianceInput: UpdateComplianceInput,
  ) {
    return this.complianceService.updateComplianceById(
      updateComplianceInput.id,
      updateComplianceInput,
    );
  }

  @Mutation(() => Compliance)
  deleteComplianceById(
    @Args('updateComplianceInput') updateComplianceInput: UpdateComplianceInput,
  ) {
    return this.complianceService.deleteComplianceById(updateComplianceInput);
  }
}
