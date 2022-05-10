import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/Repository.model';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss'],
})
export class ReposListComponent implements OnInit {
  @Input() repos: Repository[] = [];

  constructor() {}

  ngOnInit(): void {}
}
