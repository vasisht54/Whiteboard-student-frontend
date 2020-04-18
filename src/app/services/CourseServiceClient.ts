import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () => {
    return fetch('https://wbdv-generic-server.herokuapp.com/api/001347476/modules')
      .then(response => response.json());
  }
}
