import {Control} from '@angular/common';

export class YearValidation{

  static isOld(control: Control){
    let value = control.value;
    if(value < 1600){
      return {
        'isOld': true
      }
    }
    return null;
  }

  static isNotReal(control: Control){
    let value = control.value;
    let year = new Date().getFullYear();
    if(value > year){
      return {
        'isNotReal': true
      }
    }
    return null;
  }

}