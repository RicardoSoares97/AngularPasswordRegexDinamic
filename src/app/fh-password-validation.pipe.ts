import { Pipe, PipeTransform } from '@angular/core';
import {FhPasswordRegexService} from "./fh-password-regex.service";

@Pipe({
  name: 'fhPasswordValidation'
})
export class FhPasswordValidationPipe implements PipeTransform {

  constructor(private fhPasswordRegexService: FhPasswordRegexService) {}

  transform(value: string, parametrization: string): string {
    return this.isValid(value, parametrization) ? 'green' : 'red';
  }

  private isValid(value: string, parametrization: string): boolean {
    if (value.trim() == "") {
      return false;
    }

    switch (parametrization){
      case "lowercase":
        return this.fhPasswordRegexService.TestLowerCaseRegex(value);
      case "uppercase":
        return this.fhPasswordRegexService.TestUpperCaseRegex(value);
      case "numeric":
        return this.fhPasswordRegexService.TestNumericRegex(value);
      case "symbol":
        return this.fhPasswordRegexService.TestSymbolRegex(value);
      case "space":
        return this.fhPasswordRegexService.TestSpaceRegex(value);
      case "quantity":
        return this.fhPasswordRegexService.TestQuantityRegex(value);
    }

    return false;
  }
}
