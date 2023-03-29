import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FhPasswordRegexService} from "./fh-password-regex.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  checkLower: boolean = true;
  checkUpper: boolean = true;
  checkNumeric: boolean = true;
  checkSymbol: boolean = true;
  checkQuantity: boolean = true;
  checkSpace: boolean = true;
  password: string = "";
  alert: string = "";
  regex: string = "";

  constructor(private fhPasswordRegexService: FhPasswordRegexService) {
  }

  ngOnInit() {
    this.SetForm();
  }

  SetForm(){
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.fhPasswordRegexService.GetEntireRegex(this.checkLower, this.checkUpper, this.checkNumeric, this.checkSymbol, this.checkQuantity, this.checkSpace))
      ])
    });
  }

  OnChangeParametrization(){
    this.password = "";
    this.alert = "";
    this.SetForm();
  }

  GetRegex(){
    this.regex = this.fhPasswordRegexService.GetEntireRegex(this.checkLower, this.checkUpper, this.checkNumeric, this.checkSymbol, this.checkQuantity, this.checkSpace).source;
    setTimeout(() => {
      this.regex = "";
    },8000)
  }
  SubmitForm(){
    this.alert = "E não é que funcionou o regex dinamico :D"
    setTimeout(() => {
      this.alert = "";
    }, 5000);
  }
}
