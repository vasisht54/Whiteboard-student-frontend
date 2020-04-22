import {Component, Input, OnInit} from '@angular/core';
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';

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

  faTimes = faTimes;
  faCheck = faCheck;

  grade = () => {
    this.grading = true;
  }

  ngOnInit(): void {
  }

}
