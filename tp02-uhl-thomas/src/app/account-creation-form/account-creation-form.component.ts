import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-creation-form',
  templateUrl: './account-creation-form.component.html',
  styleUrls: ['./account-creation-form.component.scss']
})
export class AccountCreationFormComponent implements OnInit {
  name:string;
  firstname:string;
  address:string;
  postal:number;
  city:string;
  tel:string;
  mail:string;
  password:string;
  passwordConfirmation:string;

  constructor() { }

  ngOnInit(): void {
  }

}
