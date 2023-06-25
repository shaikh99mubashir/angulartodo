import { Component } from '@angular/core';
import { DataService } from '../services/DataService ';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataState } from '../ngrx/data.reducer';
import { getData } from '../ngrx/selector';
@Component({
  selector: 'app-reciving-data',
  templateUrl: './reciving-data.component.html',
  styleUrls: ['./reciving-data.component.css']
})
export class RecivingDataComponent {
  // signUpData: any;

  // constructor(private dataService: DataService) {}

  // ngOnInit() {
  //   this.signUpData = this.dataService.getSignUpData();
  //   console.log('Received signUpData:', this.signUpData);
  // }


   data$: Observable<any>;

  constructor(private store: Store<DataState>) {
    this.data$ = this.store.pipe(select(getData));
    console.log('this.data',this.data$);
    
  }

}
