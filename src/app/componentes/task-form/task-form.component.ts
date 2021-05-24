import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }
  addTask(title: String , des:String) {
    this.taskService.addTask({
      title: title,
      des: des
    });

    return false;
  }
}
