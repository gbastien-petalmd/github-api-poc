import { Injectable } from '@angular/core';
import { Repository } from '../models/Repository.model';
import { Observable, map } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';

@Injectable()
export class RepositoriesFacade {
  constructor(private apollo: Apollo) {}

  public repositories(): Observable<Repository[]> {
    return this.apollo
      .watchQuery({
        query: gql`
          {
            organization(login: "pasta-org") {
              repositories(first: 5) {
                nodes {
                  id
                  name
                  url
                }
              }
            }
          }
        `,
      })
      .valueChanges.pipe(
        map(({ data }: any) => data.organization.repositories.nodes)
      );
  }
}
