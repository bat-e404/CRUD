import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { TaskFormComponent } from './componentes/task-form/task-form.component';
import { TaskComponent } from './componentes/task/task.component';
import { TaskListComponent } from './componentes/task-list/task-list.component';
import { TaskService } from './services/task.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskFormComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
