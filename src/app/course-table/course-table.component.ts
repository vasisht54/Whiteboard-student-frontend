import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses = [];

  faFileAlt = faFileAlt;

  ngOnInit(): void {
    this.service.findAllCourses()
      .then(actualCourses => this.courses = actualCourses);
  }

}
