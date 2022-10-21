import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { elementAt, find } from 'rxjs';
import {v4 as uuidv4} from 'uuid';
import {TodoModel} from "./models/Todo.model";
import {TodoCreate} from "./DTO/todo-create.dto";
import {TodoUpdate} from "./DTO/todo-update.dto";

enum TodoStatutEnum{
    'actif'="en cours",
    'waiting'="En attente",
    'done'="Finalisé"
}


@Controller('todo')
export class ToDoModuleController {
    private todos=[];
    
   @Get('get')
   getTodos(){
       return this.todos ;
   }

 //AVEC DTO
  @Post('post')
 addTodo(@Body() todoCreate: TodoCreate): TodoModel[] {
  
  const todo = new TodoModel(todoCreate.name, todoCreate.description);
        this.todos.push(todo);
        return this.todos;
    }

 
  @Get(':id')
  getbyId(@Param('id') id){
     return this.todos.find(todo => todo.id ===id);

  } 
  @Delete('/:id')
  deleteTodoById(@Param() params) {
      const id = params.id;
      const todo = this.todos.find((element) => element.id === id);
      if (todo) {
          const todoId = this.todos.indexOf(todo);
          this.todos.splice(todoId, 1);
          return this.todos;
      } else {
          return 'not found';
      }
  }

  @Put('/:id')
  updateTodoById(@Param() params, @Body() todoUpdate: TodoUpdate) {
      const id = params.id;
      const todo = this.todos.find((element) => element.id === id);
      if (todo) {
          const todoId = this.todos.indexOf(todo);
          if (todoUpdate.name !== undefined)
              this.todos[todoId].name = todoUpdate.name;
          if (todoUpdate.description !== undefined)
              this.todos[todoId].description = todoUpdate.description;
          if (todoUpdate.status !== undefined)
              this.todos[todoId].status = todoUpdate.status;
          return this.todos;
      } else {
          return 'not found';
      }
  }
}