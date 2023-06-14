import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childData!: string;

  constructor() { }

  eventHandler(event: string) {
    this.childData = event
  }

  ngOnInit(): void {
  }

}
