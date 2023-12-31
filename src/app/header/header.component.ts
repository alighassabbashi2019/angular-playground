import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly _routerService: Router) {}

  goToSignup() {
    this._routerService.navigate(['/auth']);
  }

  goToParent() {
    this._routerService.navigate(['/parent']);
  }

  goToUsersList() {
    this._routerService.navigate(['/users']);
  }

  ngOnInit(): void {}
}
