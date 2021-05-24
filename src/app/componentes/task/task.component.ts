import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService} from '../../services/task.service';
 
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task : Task | undefined;
  constructor( public taskService : TaskService) { }

  ngOnInit(): void {
  }
  delateTask(task: Task) {
    if(confirm('¿Estas seguro?')){
      this.taskService.delateTask(task);
    }
   
  }
}
