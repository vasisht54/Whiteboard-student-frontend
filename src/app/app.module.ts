import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/CourseServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomeComponent } from './home/home.component';
import { ModuleListComponent } from './module-list/module-list.component';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/LessonServiceClient';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
