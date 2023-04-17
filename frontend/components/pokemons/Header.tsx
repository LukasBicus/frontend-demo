import styles from '@/styles/pokemons.module.scss'
import { Edit } from '@carbon/icons-react'
import {
  ContentSwitcher,
  Dropdown,
  IconButton,
  Search,
  Switch,
} from '@carbon/react'
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
interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = ({}: IHeaderProps) => {
  return (
    <div className={styles.header}>
      <ContentSwitcher onChange={() => {}} className={styles.contentSwitcher}>
        <Switch name="all" text="All" />
        <Switch name="favorites" text="Favorites" />
      </ContentSwitcher>
      <Search labelText="Search label" className={styles.search} />
      <Dropdown
        className={styles.dropdown}
        id="inline"
        titleText="Inline dropdown label"
        label="Dropdown menu options"
        type="inline"
        items={items}
        itemToString={(item: { id: string; text: string }) =>
          item ? item.text : ''
        }
      />
      <IconButton label="123 label" className={styles.listViewButton}>
        <Edit />
      </IconButton>
      <div className={styles.divider} />
      <IconButton label="123 label" className={styles.gridViewButton}>
        <Edit />
      </IconButton>
    </div>
  )
}
