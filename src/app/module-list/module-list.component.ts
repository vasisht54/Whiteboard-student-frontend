import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/ModuleServiceClient';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private service: ModuleServiceClient, private route: ActivatedRoute) { }

  modules = [
    {_id: '1', title: 'module A'},
    {_id: '2', title: 'module B'},
    {_id: '3', title: 'module C'}
  ];

  courseId = '';
  moduleId = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;
      this.service.findModulesForCourse(this.courseId)
        .then(actualModules => this.modules = actualModules);
    });
  }

}