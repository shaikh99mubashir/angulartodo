import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private signUpData: any;

  setSignUpData(data: any) {
    this.signUpData = data;
  }

  getSignUpData() {
    return this.signUpData;
  }
}