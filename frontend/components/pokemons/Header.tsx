import {
  ContentSwitcherMode,
  IPageState,
  PageAction,
  PageActionTypes,
} from '@/components/pokemons/types'
import styles from '@/styles/pokemons.module.scss'
import { Grid, List } from '@carbon/icons-react'
import {
  ContentSwitcher,
  Dropdown,
  IconButton,
  Search,
  Switch,
} from '@carbon/react'
import React from 'react'

interface IHeaderProps {
  initialPageState: IPageState
  pageState: IPageState
  dispatch: React.Dispatch<PageAction>
}

const getIndexOfContentSwitcherMode = (mode: ContentSwitcherMode) =>
  Object.values(ContentSwitcherMode).indexOf(mode)

export const Header: React.FC<IHeaderProps> = ({
  initialPageState,
  pageState,
  dispatch,
}: IHeaderProps) => {
  return (
    <div className={styles.header}>
      <ContentSwitcher
        onChange={({ name }: { name: ContentSwitcherMode }) => {
          dispatch({
            type: PageActionTypes.SET_CONTENT_SWITCH_MODE,
            payload: name,
          })
        }}
        className={styles.contentSwitcher}
        selectedIndex={getIndexOfContentSwitcherMode(
          pageState.contentSwitchMode,
        )}
      >
        <Switch
          name={ContentSwitcherMode.All}
          text="All"
          index={getIndexOfContentSwitcherMode(ContentSwitcherMode.All)}
        />
        <Switch
          name={ContentSwitcherMode.Favorites}
          text="Favorites"
          index={getIndexOfContentSwitcherMode(ContentSwitcherMode.Favorites)}
        />
      </ContentSwitcher>
      <Search
        labelText="Search label"
        className={styles.search}
        onChange={(e: React.BaseSyntheticEvent) => {
          dispatch({
            type: PageActionTypes.SET_SEARCH,
            payload: e.target.value,
          })
        }}
        onClear={() => {
          dispatch({
            type: PageActionTypes.SET_SEARCH,
            payload: '',
          })
        }}
        defaultValue={initialPageState.search}
      />
      <Dropdown
        className={styles.dropdown}
        id="default-0"
        label="Type"
        type="default"
        items={initialPageState.pokemonTypes.map((pt) => ({ id: pt }))}
        itemToString={(item: { id: string }) => item.id}
      />
      <IconButton
        label="123 label"
        className={styles.listViewButton}
        kind="ghost"
      >
        <List size={20} />
      </IconButton>
      <div className={styles.divider} />
      <IconButton
        label="123 label"
        className={styles.gridViewButton}
        kind="ghost"
      >
        <Grid size={20} />
      </IconButton>
    </div>
  )
}
