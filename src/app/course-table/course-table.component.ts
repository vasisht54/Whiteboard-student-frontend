import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses = [];

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(actualCourses => this.courses = actualCourses);
  }

}
