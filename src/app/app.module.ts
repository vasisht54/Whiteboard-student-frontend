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

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
