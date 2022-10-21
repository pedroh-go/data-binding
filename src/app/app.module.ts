import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule // Isso resolve: Can't bind to 'ngModel' since it isn't a known property of 'input'.ngtsc(-998002) ao usar Two-way data binding nos formulários
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
