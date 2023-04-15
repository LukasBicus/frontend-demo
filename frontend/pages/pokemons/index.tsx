import {
  // @ts-ignore
  Button,
  // @ts-ignore
  Loading,
  // @ts-ignore
  ProgressBar,
  // @ts-ignore
  Search,
  // @ts-ignore
  ContentSwitcher,
  // @ts-ignore
  Switch,
  Dropdown,
} from '@carbon/react'
import { Add } from '@carbon/icons-react'
import React from 'react'

const items = [
  {
    id: 'option-0',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'option-1',
    text: 'Option 1',
  },
  {
    id: 'option-2',
    text: 'Option 2',
  },
  {
    id: 'option-3',
    text: 'Option 3 - a disabled item',
    disabled: true,
  },
  {
    id: 'option-4',
    text: 'Option 4',
  },
  {
    id: 'option-5',
    text: 'Option 5',
  },
]

export const PokemonsPage: React.FC = () => {
  return (
    <div>
      Hi there Dummy pokemons page
      <Button isExpressive>Hi there</Button>
      <Button kind="tertiary" isExpressive>
        Hi there
      </Button>
      <Button
        renderIcon={Add}
        iconDescription="Icon Description"
        hasIconOnly
        onClick={() => console.log('onClick')}
      />
      <ContentSwitcher onChange={() => {}}>
        <Switch name="one" text="First section" />
        <Switch name="two">Second section</Switch>
        <Switch name="three" text="Third section" />
      </ContentSwitcher>
      <Loading description="Active loading indicator" withOverlay={false} />
      <ProgressBar
        label="Progress bar label"
        helperText="Optional helper text"
        value={75}
      />
      <Search />
      <Dropdown
        id="inline"
        titleText="Inline dropdown label"
        label="Dropdown menu options"
        type="inline"
        items={items}
        itemToString={(item: { id: string; text: string }) =>
          item ? item.text : ''
        }
      />
    </div>
  )
}

export default PokemonsPage
