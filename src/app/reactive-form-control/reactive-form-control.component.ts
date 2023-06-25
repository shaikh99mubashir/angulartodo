import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/DataService ';
import { Store } from '@ngrx/store';
import { sendData } from '../ngrx/data.actions';
@Component({
  selector: 'app-reactive-form-control',
  templateUrl: './reactive-form-control.component.html',
  styleUrls: ['./reactive-form-control.component.css']
})
export class ReactiveFormControlComponent {
  signUpData = {}
  flag2 = false;
  isSubmitted: boolean = false;

  constructor(private dataService: DataService,private router: Router,private store: Store) {}
  signUpForm = new FormGroup({
    name:new FormControl('',[Validators.required,]),
    email:new FormControl('',[Validators.required,Validators.email],),
    // password:new FormControl('',[Validators.required,]),
  })

  getValue(){
    console.log('this.signUpForm.value',this.signUpForm.value);
    if (this.signUpForm.valid) {
      this.signUpData = this.signUpForm.value;
      this.dataService.setSignUpData(this.signUpData);
      // this.store.dispatch(sendData({ payload: this.signUpData }));
      console.log('this.signUpData', this.signUpData);
      this.router.navigate(['/rdc']);
    } else {
      this.isSubmitted = true;
      console.log('Fields are missing');
    }
  }
}
