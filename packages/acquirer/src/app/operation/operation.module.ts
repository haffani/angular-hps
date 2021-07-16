import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AcqOpComponentComponent} from './acq-op-component/acq-op-component.component';

@NgModule({
  declarations: [AcqOpComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [AcqOpComponentComponent]
})
export class AcqOperationModule { }
