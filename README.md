# GithubApiPoc
This POC was built to test using the Apollo Cache as a local state management in an Angular app, instead of using Ngrx.
It was built **Angular 13**, **Angular Material**, **apollo-angular** and the **Github GraphQL Api**.

## What was done
* A list of the last five repositories of the [pasta-org Github organization](https://github.com/pasta-org), with a view more button leading to a list of All repositories, paginated with 15 items per page (pager not working yet).
* A (very (very) simple) form to create a new repository (WIP for the update of the cache after the mutation to show the new item in the list)
* A list of Github users who are members of the pasta-org organization, with a modal showing some details about the user when clicked on.


## What could be done / explored
* Fix the cache update after the `createRepository` mutation (find out why `readQuery` returns `null` even though all fields are provided to the query)
* Plug the pagination on the repositories list (we already fetch x items per page, but the pager doesn't work yet)
* Add a local data to each repository (like a `selected` or `viewed` attribute), using a local-only field
* Try _something_ with `cache.modify` and `cache.evict`
* Allow editing a repository (maybe edit the description?)
* If possible, lock a repository while it's being edited by another user ? This could be done via a subscription ? Is it possible using the API ?


## My conclusion
For now, I think Ngrx is cleaner and easier. In theory, using the Apollo cache for state management seems straightforward, but there are many little details that block development. It might only be to fix all those problems and document them along the way so that devs' path is clear when developing, but I am not sure that in the end, we'll be able to fix all those problems without ugly hacks. 

To me it seems better, at this time, to use apollo-angular to make server requests but to keep using Ngrx as a state management solution.

---

## Generated readme
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
