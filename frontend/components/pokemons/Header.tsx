import {
  ContentSwitcherMode,
  IPageState,
  PageAction,
  PageActionTypes,
  ViewMode,
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
import { debounce } from 'lodash'
import React, { useCallback, useRef } from 'react'

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
  const getViewModeButtonClickHandler = useCallback(
    (mode: ViewMode) => () => {
      dispatch({
        type: PageActionTypes.SET_VIEW_MODE,
        payload: mode,
      })
    },
    [],
  )
  const handleSearchChangeRef = useRef(
    debounce((e: React.BaseSyntheticEvent) => {
      dispatch({
        type: PageActionTypes.SET_SEARCH,
        payload: e.target.value,
      })
    }, 300),
  )
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
        onChange={handleSearchChangeRef.current}
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
        items={initialPageState.pokemonTypes}
        itemToString={(item: string) => item}
        initialSelectedItem={initialPageState.type}
        onChange={(e: { selectedItem: string }) => {
          dispatch({
            type: PageActionTypes.SET_TYPE,
            payload: e.selectedItem,
          })
        }}
      />
      <IconButton
        label="123 label"
        className={styles.listViewButton}
        kind="ghost"
        onClick={getViewModeButtonClickHandler(ViewMode.ListView)}
      >
        <List size={20} />
      </IconButton>
      <div className={styles.divider} />
      <IconButton
        label="123 label"
        className={styles.gridViewButton}
        kind="ghost"
        onClick={getViewModeButtonClickHandler(ViewMode.GridView)}
      >
        <Grid size={20} />
      </IconButton>
    </div>
  )
}
