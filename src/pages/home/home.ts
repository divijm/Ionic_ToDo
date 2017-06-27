import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodoPage } from '../edit-todo/edit-todo'
import { DataProvider } from '../../providers/data/data';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // todos: any; 

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
    // this.todos = [
    //   {title: 'Todo 1', description: 'abc'},
    //   {title: 'Todo 2', description: 'abc'},
    //   {title: 'Todo 3', description: 'abc'},
    //   {title: 'Todo 4', description: 'abc'},
    //   {title: 'Todo 5', description: 'abc'},
    // ]
  }

  ionViewDidLoad() {
    this.dataService.load()
  }

  addTodo() {
    this.navCtrl.push(EditTodoPage)
  }

  editTodo(todo) {
    this.navCtrl.push(EditTodoPage, {
      todo: todo 
    })
  }
}
