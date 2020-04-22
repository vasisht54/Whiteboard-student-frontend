import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (quizId) => {
    return fetch(`https://vasisht-server-node.herokuapp.com/api/quizzes/${quizId}/questions`)
      .then(response => response.json());
  }
}
