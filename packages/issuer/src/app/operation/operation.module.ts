import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IssOpComponentComponent} from './iss-op-component/iss-op-component.component';

@NgModule({
  declarations: [IssOpComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [IssOpComponentComponent]
})
export class IssOperationModule { }
