### Questions
- responsivity -> mobile view?


### Steps - required features

- [x] Setup Next
  - typescript
  - setup prettier

- [x] Setup css: 
  - sass - https://nextjs.org/docs/basic-features/built-in-css-support#sass-support
  - Carbon design https://carbondesignsystem.com/
  - setup theme (primary color: #72c0a1)

- [x] Create dummy PokemonsPage
  - dummy header with dummy content.

- [ ] Setup Apollo
  - generate types from schema
  - fetch data for pokemons and list them on pokemons page

- [ ] Fill header with tab, search group, dropdown, toggle button group (just UI components, no functionality)
- [ ] Setup a reducer for PokemonsPage state (actions)
  - add tests
  - set pokemons filter based on state

- [ ] Implement spinner & loadingPage

- [ ] Implement Popularity component (with favorite/unFavorite)

- [ ] Implement PokemonsPage list view

- [ ] Implement PokemonsPage grid view (make grid view default)

- [ ] Implement PokemonDetail page
  - title
  - description area
  - Popularity
- [ ] Implement evolution component


- [ ] Define application Head component - fav icon, title (Pokemon)

Steps - optional features
- [ ] Implement PlaySound component on Pokemon detail page (with sound effect)
- [ ] Add infinite scroll
  - setup onScrollNearEnd event
  - setup apollo for pagination
- [ ] Implement quick view button, that shows a modal with more information about pokemon
- [ ] Implement notifications for favorite/unfavorite mutations results
- [ ] Add a visual effect to PlaySound component
- [ ] Add an effect to Popularity component
- [ ] Add debounce to search
- [ ] After return from detail, scroll to the selected pokemon's item
- [ ] Implement no results page (after filter/no result from backend)
- [ ] Store current filter in session
