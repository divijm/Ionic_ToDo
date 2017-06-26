import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodoPage } from '../edit-todo/edit-todo'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todos: any; 

  constructor(public navCtrl: NavController) {
    this.todos = [
      {title: 'Todo 1', description: 'abc'},
      {title: 'Todo 2', description: 'abc'},
      {title: 'Todo 3', description: 'abc'},
      {title: 'Todo 4', description: 'abc'},
      {title: 'Todo 5', description: 'abc'},
    ]
  }

  ionViewDidLoad() {

  }

  addToDo() {
    this.navCtrl.push(EditTodoPage)
  }

  editToDo(todo) {
    this.navCtrl.push(EditTodoPage, {
      todo: todo 
    })
  }
}
