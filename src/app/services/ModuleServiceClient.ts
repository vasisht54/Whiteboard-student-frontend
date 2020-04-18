import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (courseId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/001347476/courses/${courseId}/modules`)
      .then(response => response.json());
  }
}
