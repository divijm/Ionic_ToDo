import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
    console.log('TODO: Finish add todo')
  }

  editTodo(todo) {
    console.log('TODO: Finish edit todo')
  }
}
