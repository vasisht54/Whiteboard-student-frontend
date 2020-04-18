import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () => {
    return fetch('https://wbdv-generic-server.herokuapp.com/api/001347476/courses')
      .then(response => response.json());
  }

  findCourseById = (courseId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001347476/courses/${courseId}`)
      .then(response => response.json());
  }
}
