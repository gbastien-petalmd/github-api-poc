import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoriesFacade } from 'src/app/facades/repositories.facade';
import { Repository } from 'src/app/models/Repository.model';

@Component({
  selector: 'app-last-repos-container',
  templateUrl: './last-repos-container.component.html',
  styleUrls: ['./last-repos-container.component.scss'],
})
export class LastReposContainerComponent implements OnInit {
  repos: Observable<Repository[]>;

  constructor(private repositoriesFacade: RepositoriesFacade) {}

  ngOnInit(): void {
    this.repos = this.repositoriesFacade.repositories();
  }
}
