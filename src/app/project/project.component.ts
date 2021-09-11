import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../app.component";



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [
  ]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() project: Project
  @Input() projectItemIdIndex: number | undefined



  ngOnInit(): void {
  }

}
