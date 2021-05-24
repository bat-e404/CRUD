import { Injectable } from '@angular/core';
import {Task } from '../models/Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];
  constructor() { 
    this.tasks = [
      {
        title: "Leer",
        des: "Tengo que leer"
      },
      {
        title: "Leer",
        des: "Tengo que leer"
      }
    ];

  }
  getTasks(){
      return this.tasks;
  }
  addTask(t: Task){
    this.tasks.push(t);
  }
  delateTask(t: Task) {
    for(let i = 0; i < this.tasks.length; i++ ){
      if(t == this.tasks[i]){
        this.tasks.splice(i,1);
      }
    }
  }
}
