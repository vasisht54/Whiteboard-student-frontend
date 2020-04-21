import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/QuizServiceClient';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes = [];
  constructor(private service: QuizServiceClient) { }

  ngOnInit(): void {
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
  }

}
