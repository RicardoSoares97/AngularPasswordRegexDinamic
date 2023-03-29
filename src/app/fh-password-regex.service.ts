import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FhPasswordRegexService {
  lowerCaseRegex: string = '(?=.*[a-z])';
  upperCaseRegex: string = '(?=.*[A-Z])';
  numericRegex: string = '(?=.*\\d)';
  symbolRegex: string = '(?=.*[_!@#$%^&*()\\[\\]{}|;\':\\",.<>\\/?\\\\])';
  spaceRegex: string = '(?=^\\S*$)';
  quantityRegex: string = '(?=^.{8,})';

  constructor() { }

  TestLowerCaseRegex(value: string){
    return new RegExp(this.lowerCaseRegex).test(value);
  }
  TestUpperCaseRegex(value: string){
    return new RegExp(this.upperCaseRegex).test(value);
  }
  TestNumericRegex(value: string){
    return new RegExp(this.numericRegex).test(value);
  }
  TestSymbolRegex(value: string){
    return new RegExp(this.symbolRegex).test(value);
  }
  TestSpaceRegex(value: string){
    return new RegExp(this.spaceRegex).test(value);
  }
  TestQuantityRegex(value: string){
    return new RegExp(this.quantityRegex).test(value);
  }

  GetEntireRegex(lower: boolean, upper: boolean, numeric: boolean, symbol:boolean, quantityRegex: boolean, space: boolean): RegExp{
    let regex: string = "^";
    if(lower)
      regex += this.lowerCaseRegex;
    if(upper)
      regex += this.upperCaseRegex;
    if(numeric)
      regex += this.numericRegex;
    if(symbol)
      regex += this.symbolRegex;
    if(space)
      regex += this.spaceRegex;
    if(quantityRegex)
      regex += this.quantityRegex;

    return new RegExp(regex);
  }
}
