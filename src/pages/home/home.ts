import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodoPage } from '../edit-todo/edit-todo'
import { DataProvider } from '../../providers/data/data';
import { s3 } from 'fine-uploader/lib/s3';
import { FineUploader, UIOptions } from 'fine-uploader';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  s3UIOptions: s3.S3UIOptions;
  s3Uploader: s3.FineUploader;

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
    this.dataService.load();
  }

  addTodo() {
    this.navCtrl.push(EditTodoPage)
  }

  editTodo(todo) {
    this.navCtrl.push(EditTodoPage, {
      todo: todo 
    })
  }

  ionViewDidEnter() {
       
    this.s3UIOptions = {
      debug: true,
      element: document.getElementById('fine-uploader-manual-trigger'),
      template: "qq-template-manual-trigger",
      request: {
          endpoint: 'http://fineuploader-test-attachment.s3.amazonaws.com',
          accessKey: 'AKIAIARVO27XY6WOEDTQ'
      },
      signature: {
          endpoint: '/server'
      },
      // uploadSuccess: {
      //     endpoint: '/server'
      // },
      // iframeSupport: {
      //     localBlankPagePath: '/server'
      // },
      retry: {
          enableAuto: true // defaults to false
      }
      // deleteFile: {
      //     enabled: true, // defaults to false
      //     endpoint: '/s3handler'
      // }
    }
    this.s3Uploader = new s3.FineUploader(this.s3UIOptions);

  }

  uploadFiles() {
    this.s3Uploader.uploadStoredFiles();
  }

}
