import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IssParamComponentComponent} from './iss-param-component/iss-param-component.component';


@NgModule({
  declarations: [IssParamComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [IssParamComponentComponent]
})
export class IssParametersModule { }
