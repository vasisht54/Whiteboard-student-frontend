import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (quizId) => {
    return fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
      .then(response => response.json());
  }
}
