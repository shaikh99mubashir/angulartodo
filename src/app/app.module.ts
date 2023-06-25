import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormControlComponent } from './reactive-form-control/reactive-form-control.component';
import { RecivingDataComponent } from './reciving-data/reciving-data.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dataReducer } from './ngrx/data.reducer';
import { DataEffects } from './ngrx/data.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ReactiveFormControlComponent,
    RecivingDataComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ data: dataReducer }),
    EffectsModule.forRoot([DataEffects]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
