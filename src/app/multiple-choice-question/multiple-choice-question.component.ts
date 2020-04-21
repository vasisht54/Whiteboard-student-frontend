import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question: { _id: '', title: '', question: '', choices: [], correct: '', answer: '' };
  grading = false;
  answer = null;

  grade = () => {
    this.grading = true;
  }

  ngOnInit(): void {
  }

}
