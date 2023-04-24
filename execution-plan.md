### Questions
- responsivity -> mobile view?
- icons for grid view / list view, and more... | material-icons v4?
- font family?
- designs in figma?


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

- [x] Setup Apollo
  - generate types from schema
  - fetch data for pokemons and list them on pokemons page

- [x] Style header tabs, search group, dropdown, toggle button group (just UI components, no functionality)

- [x] Setup a reducer for PokemonsPage state (actions)
  - add tests
  - set pokemons filter based on state

- [x] Implement spinner & loadingPage

- [x] Implement Popularity component (with favorite/unFavorite)

- [x] Implement PokemonsPage list view

- [x] Implement PokemonsPage grid view (make grid view default)

- [x] Implement PokemonDetail page
  - title
  - description area
  - Popularity
  - navigation to Pokemon detail page
- [x] Implement evolution component


- [x] Define application Head component - fav icon, title (Pokemon)

Steps - optional features
- [x] Use https://v4.mui.com/components/material-icons/ v4 material icons
- [x] Implement PlaySound component on Pokemon detail page (with sound effect)
- [x] Add infinite scroll
  - setup onScrollNearEnd event
  - setup apollo for pagination
- [x] Implement quick view button, that shows a modal with more information about pokemon
- [x] Implement notifications for favorite/unfavorite mutations results
- [ ] Add a visual effect to PlaySound component
- [ ] Add an effect to Popularity component
- [x] Add debounce to search
- [ ] After return from detail, scroll to the selected pokemon's item
- [x] Implement no results page (after filter/no result from backend)
- [x] Store current filter in session
