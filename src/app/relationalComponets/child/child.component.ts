import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() IncomingData!: string;
  @Output() outgoingData = new EventEmitter<string>();
  showClickMe: boolean = true;

  constructor() {}

  sendDataToParent() {
    this.outgoingData.emit('data from child!')
  }

  ngOnInit(): void {
    setInterval(()=> {
      this.showClickMe = !this.showClickMe
    },1000)
  }

}
