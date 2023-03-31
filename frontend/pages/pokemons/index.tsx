// @ts-ignore
import { Button, Loading, ProgressBar, Search } from '@carbon/react'
import React from 'react'

export const PokemonsPage: React.FC = () => {
  return (
    <div>
      Hi there Dummy pokemons page
      <Button>Hi there</Button>
      <Loading description="Active loading indicator" withOverlay={false} />
      <ProgressBar
        label="Progress bar label"
        helperText="Optional helper text"
        value={75}
      />
      <Search />
    </div>
  )
}

export default PokemonsPage
