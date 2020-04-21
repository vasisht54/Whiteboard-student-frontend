import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () => {
    return fetch(`http://localhost:3000/api/quizzes`)
      .then(response => response.json());
  }
}
