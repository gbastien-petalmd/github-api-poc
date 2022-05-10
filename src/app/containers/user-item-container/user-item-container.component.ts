import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-user-item-container',
  templateUrl: './user-item-container.component.html',
  styleUrls: ['./user-item-container.component.scss'],
})
export class UserItemContainerComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}

  handleClick(event: MouseEvent): void {
    console.log(this.user);
  }
}
