import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  public displayTodo: string[] =[];
  
  onSave(value: string , inputField : HTMLInputElement) {
    if(value == ''){
      alert('Add Todo')
    }
    else{
      this.displayTodo.push(value);
      inputField.value= ''
    }
    // console.log('value',this.displayTodo);
  }

  delete(index:number){
    console.log('i',index);
    this.displayTodo = this.displayTodo.filter((e,i)=> i !== index)
  }
  
  edit(index:number){
    console.log('editIndex',index);
    let updatedValue = prompt('Edit todo')
    console.log('updatedValue',updatedValue);

    if (updatedValue !== null) {
      this.displayTodo[index] = updatedValue;
    }
    
  }
}
