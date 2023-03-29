import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PasswordModule} from "primeng/password";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DividerModule} from "primeng/divider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import { FhPasswordValidationPipe } from './fh-password-validation.pipe';
import {FhPasswordRegexService} from "./fh-password-regex.service";
import {InputSwitchModule} from "primeng/inputswitch";

@NgModule({
  declarations: [
    AppComponent,
    FhPasswordValidationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PasswordModule,
    FormsModule,
    DividerModule,
    ReactiveFormsModule,
    ButtonModule,
    InputSwitchModule
  ],
  providers: [
    FhPasswordRegexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
