import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { VotingRepository } from '../@core/repository/voting.repository';
import { VotingMock } from './repository/voting/voting.mock';


const DATA_SERVICE: Provider[] = [
  { provide: VotingRepository, useClass: VotingMock }
];

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...DATA_SERVICE]
    };
  }
}
