import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LicenseslaveService } from './licenseslave.service';
import { Licenseslave } from './entities/licenseslave.entity';
import { CreateLicenseslaveInput } from './dto/create-licenseslave.input';
import { UpdateLicenseslaveInput } from './dto/update-licenseslave.input';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { SearchLicenseslaveInput } from './dto/search-licenseslave.input';

@UseGuards(AuthGuard)
@Resolver(() => Licenseslave)
export class LicenseslaveResolver {
  constructor(private readonly licenseslaveService: LicenseslaveService) {}

  @Query(() => [Licenseslave])
  getAllLicenseslave() {
    return this.licenseslaveService.getAllLicenseslave();
  }

  @Query(() => Licenseslave)
  getAllLicenseslaveById(@Args('id', { type: () => Int }) id: number) {
    return this.licenseslaveService.getAllLicenseslaveById(id);
  }

  @Query(() => [Licenseslave])
  searchLicenseslave(
    @Args('searchLicenseslaveInput')
    searchLicenseslaveInput: SearchLicenseslaveInput,
  ) {
    return this.licenseslaveService.searchLicenseslave(searchLicenseslaveInput);
  }

  @Mutation(() => Licenseslave)
  createLicenseSlave(
    @Args('createLicenseslaveInput')
    createLicenseslaveInput: CreateLicenseslaveInput,
  ) {
    return this.licenseslaveService.createLicenseSlave(createLicenseslaveInput);
  }

  @Mutation(() => Licenseslave)
  updateLicenseslaveById(
    @Args('updateLicenseslaveInput')
    updateLicenseslaveInput: UpdateLicenseslaveInput,
  ) {
    return this.licenseslaveService.updateLicenseslaveById(
      updateLicenseslaveInput.id,
      updateLicenseslaveInput,
    );
  }

  @Mutation(() => Licenseslave)
  deleteLicenseSlaveById(
    @Args('updateLicenseslaveInput')
    updateLicenseslaveInput: UpdateLicenseslaveInput,
  ) {
    return this.licenseslaveService.deleteLicenseSlaveById(
      updateLicenseslaveInput,
    );
  }
}
