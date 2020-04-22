import {Component, Input, OnInit} from '@angular/core';
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  @Input()
  question = {_id: '', title: '', question: '', answer: '', correct: ''};
  grading = false;
  faCheck = faCheck;
  faTimes = faTimes;

  answer = null;

  grade = () => {
    this.grading = true;
  }

  ngOnInit(): void {
  }

}
