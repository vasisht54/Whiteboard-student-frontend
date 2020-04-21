import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionServiceClient} from '../services/QuestionServiceClient';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private svc: QuestionServiceClient,
              private route: ActivatedRoute) { }
  questions = [];
  quizId = '';
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.svc.findQuestionsForQuiz(this.quizId)
        .then(qs => this.questions = qs);
    });
  }
}
