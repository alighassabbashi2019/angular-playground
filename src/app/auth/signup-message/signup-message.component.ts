import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CreateUserDto } from 'shared/dtos/user.dto';

@Component({
  selector: 'app-signup-message',
  templateUrl: './signup-message.component.html',
  styleUrls: ['./signup-message.component.scss']
})
export class SignupMessageComponent implements OnInit, OnChanges {

  @Input() show!: boolean
  @Input() createdAt!: Date
  @Input() user!: CreateUserDto

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
      // listen to show, createdAt, user changes
  }

  ngOnInit(): void {
  }

}
