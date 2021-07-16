import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AcquirerComponent } from './acquirer.component';
import { AcqOperationModule} from './operation/operation.module';
import { AcqParametersModule} from './parameters/parameters.module';

@NgModule({
  declarations: [
    AcquirerComponent,

  ],
  imports: [
    BrowserModule,
    AcqOperationModule,
    AcqParametersModule
  ],
  providers: [],
  bootstrap: [AcquirerComponent],
  exports: [AcquirerComponent]
})
export class AcquirerModule { }
