import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (moduleId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001347476/modules/${moduleId}/lessons`)
      .then(response => response.json());
  }
}
