import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-users-list-container',
  templateUrl: './users-list-container.component.html',
  styleUrls: ['./users-list-container.component.scss'],
})
export class UsersListContainerComponent implements OnInit {
  users: User[] = [];

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        id: 1,
        name: 'Gabrielle Bastien',
        avatarUrl:
          'https://avatars.githubusercontent.com/u/71276537?s=100&u=f0988a0de943c732f3995cdf46b24c6dd394162c&v=4',
      },
      {
        id: 2,
        name: 'Emanuele Spies',
        avatarUrl:
          'https://avatars.githubusercontent.com/u/2243930?u=5d71f31835906a2523bbbe42bfa1806b3700dda9&v=4',
      },
    ];
  }
}
