import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/Repository.model';

@Component({
  selector: 'app-last-repos-container',
  templateUrl: './last-repos-container.component.html',
  styleUrls: ['./last-repos-container.component.scss'],
})
export class LastReposContainerComponent implements OnInit {
  repos: Repository[] = [];

  constructor() {}

  ngOnInit(): void {
    this.repos = [
      { id: 1, name: 'something', url: 'https://www.google.ca' },
      { id: 2, name: 'something else', url: 'https://www.google.ca' },
      { id: 3, name: 'something else entirely', url: 'https://www.google.ca' },
    ];
  }
}
