import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {
  
  todo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todo = {
      title: '',
      description: ''
    }
  }

  ionViewDidLoad() {
    let todo = this.navParams.get('todo')

    if(typeof(todo) !== "undefined") {
      this.todo = todo 
    }
  }

  save() {
    this.navCtrl.pop()
  }

}
