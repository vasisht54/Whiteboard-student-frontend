import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer-component',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private service: CourseServiceClient, private route: ActivatedRoute) { }

  courseId: '';

  course: {_id: '1', title: 'a'};

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.courseId = params.courseId;
        this.service.findCourseById(this.courseId)
          .then(actualCourse => this.course = actualCourse);
    });
  }

}
