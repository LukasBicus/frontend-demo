export const getPokemonDetailByNameRoute = (name: string) =>
  `/${encodeURIComponent(name).toLowerCase()}`
