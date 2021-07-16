import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AcqOperationModule, AcqParametersModule}  from '@pwc/acquirer';
import {IssOperationModule, IssParametersModule} from '@pwc/issuer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    AcqOperationModule,
    AcqParametersModule,

    IssOperationModule,
    IssParametersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
