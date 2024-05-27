import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {
skills:Array<string>=["HTML5","CSS3","JAVASCRIPT","ANGULAR"];
  constructor() { }

  ngOnInit(): void {
  }

}
