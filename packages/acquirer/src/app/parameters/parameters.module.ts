import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcqParamComponentComponent} from './acq-param-component/acq-param-component.component';


@NgModule({
  declarations: [AcqParamComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [AcqParamComponentComponent]
})
export class AcqParametersModule { }
