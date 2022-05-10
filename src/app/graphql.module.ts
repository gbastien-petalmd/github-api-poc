import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { RepositoriesFacade } from './facades/repositories.facade';
import { setContext } from '@apollo/client/link/context';

const uri = 'https://api.github.com/graphql';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const auth = setContext((operation, context) => {
    return {
      headers: {
        Authorization: `bearer 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`,
      },
    };
  });

  return {
    link: ApolloLink.from([auth, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
    RepositoriesFacade,
  ],
})
export class GraphQLModule {}
