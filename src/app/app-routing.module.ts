import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormControlComponent } from './reactive-form-control/reactive-form-control.component';
import { RecivingDataComponent } from './reciving-data/reciving-data.component';

const routes: Routes = [
  {path:'', component:TodoComponent},
  {path:'rfc', component:ReactiveFormControlComponent},
  {path:'rdc', component:RecivingDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
