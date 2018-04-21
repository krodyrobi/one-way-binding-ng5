import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() history: string[];

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.history.splice(0, 1), 1000);
  }

}
