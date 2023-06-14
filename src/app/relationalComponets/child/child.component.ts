import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() IncomingData!: string;
  @Output() outgoingData = new EventEmitter<string>()

  constructor() {}

  sendDataToParent() {
    this.outgoingData.emit('data from child!')
  }

  ngOnInit(): void {
  }

}
