import { Component } from '@angular/core';
import { Validators, ControlGroup, FormBuilder } from '@angular/common';
import { NavController } from 'ionic-angular';
import { RockBand } from '../../interfaces/rockband';
import { Category } from '../../interfaces/category';
import { YearValidation } from '../../validators/year';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  rockBand: RockBand = this.defaultRockBand;
  categories: Category[] = [
    {
      id: 1,
      name: 'Rock'
    },
    {
      id: 2,
      name: 'Pop'
    },
    {
      id: 3,
      name: 'Rock & roll'
    }
  ];
  formRockBand: ControlGroup;


  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.rockBand.category = this.categories[1].id;

    this.formRockBand = this.formBuilder.group({
      name: ['', Validators.compose([ Validators.required, Validators.minLength(4),Validators.maxLength(8),Validators.pattern('[a-zA-Z ]*') ])],
      year: ['', Validators.compose([ YearValidation.isOld, YearValidation.isNotReal ])],
      category: ['', Validators.required],
      email: ['', Validators.required],
    });

  }

  get defaultRockBand(): RockBand{
    return {
      id: -1,
      name: '',
      year: null,
      category: -1,
      email: ''
    }
  }

  saveData(){
    console.log( this.rockBand );
  }
}
