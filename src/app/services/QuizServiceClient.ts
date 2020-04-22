import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () => {
    return fetch(`https://vasisht-server-node.herokuapp.com/api/quizzes`)
      .then(response => response.json());
  }
}
