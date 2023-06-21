import { Component } from '@angular/core';

interface TodoItem {
  id:number;
  value: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  public displayTodo: TodoItem[] = [];
  buttonValue = 'Add';

  id=0;
  onSave(value: any , inputField : HTMLInputElement):any {
    console.log('displayTodo',this.displayTodo);
    console.log('value===>',value);
    if(value == ''){
      alert('Add Todo')
    }
    else if(this.buttonValue == 'update'){
      this.buttonValue = 'Add'
      this.displayTodo[this.id].value=value;    

    }
    else{
      const todoItem: TodoItem = { id:this.displayTodo.length,value:value };
      this.displayTodo.push(todoItem);
      inputField.value= ''
    }
  }


  
  edit(index:number,value:any,inputField : HTMLInputElement,){
    this.buttonValue = 'update'
    console.log('editIndex',index);
    console.log('editvalue',value);
    console.log('displayTodo',this.displayTodo);
    console.log('inputField',inputField.value);
    inputField.value= value.value;
    this.id=index;
    console.log('this.displayTodo[index].value',this.displayTodo[index].value);
    



  }

  delete(index:number){
    console.log('i',index);
    this.displayTodo = this.displayTodo.filter((e,i)=> i !== index)
   
  }
}
