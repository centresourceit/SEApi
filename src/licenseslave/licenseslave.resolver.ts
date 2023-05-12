import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LicenseslaveService } from './licenseslave.service';
import { Licenseslave } from './entities/licenseslave.entity';
import { CreateLicenseslaveInput } from './dto/create-licenseslave.input';
import { UpdateLicenseslaveInput } from './dto/update-licenseslave.input';

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
  
  @Mutation(() => Licenseslave)
  updateLicenseslaveById(@Args('updateLicenseslaveInput') updateLicenseslaveInput: UpdateLicenseslaveInput) {
    return this.licenseslaveService.updateLicenseslaveById(updateLicenseslaveInput.id, updateLicenseslaveInput);
  }
}
