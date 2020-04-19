import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/LessonServiceClient';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) { }

  lessons: [
    {_id: '', title: ''}
  ];

  moduleId: '';
  lessonId: '';
  courseId: '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.moduleId;
      this.lessonId = params.lessonId;
      this.courseId = params.courseId;
      this.service.findLessonsForModule(this.moduleId).then(actualLessons => this.lessons = actualLessons);
    });
  }

}
