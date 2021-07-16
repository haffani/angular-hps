import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IssParametersModule} from './parameters/parameters.module';
import {IssOperationModule} from './operation/operation.module';

import { IssuerComponent } from './issuer.component';


@NgModule({
  declarations: [
    IssuerComponent,
  ],
  imports: [
    BrowserModule,
    IssOperationModule,
    IssParametersModule
  ],
  providers: [],
  bootstrap: [IssuerComponent]
})
export class IssuerModule { }
