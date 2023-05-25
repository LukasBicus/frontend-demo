import {
  ContentSwitcherMode,
  IPageState,
  PageAction,
  PageActionTypes,
  ViewMode,
} from '@/components/pokemons/types'
import {
  ComboBox,
  ContentSwitcher,
  IconButton,
  Search,
  Switch,
} from '@carbon/react'
import ViewHeadline from '@material-design-icons/svg/round/view_headline.svg'
import ViewModule from '@material-design-icons/svg/round/view_module.svg'
import { debounce } from 'lodash'
import React, { useCallback, useRef } from 'react'
import styles from './Header.module.scss'

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
}) => {
  const getViewModeButtonClickHandler = useCallback(
    (mode: ViewMode) => () => {
      dispatch({
        type: PageActionTypes.SET_VIEW_MODE,
        payload: mode,
      })
    },
    [dispatch],
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
      <ComboBox
        className={styles.comboBox}
        id="default-0"
        aria-label="Type"
        placeholder="Type"
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
      <div className={styles.buttons}>
        <IconButton
          label="Switch to list view"
          className={styles.iconButton}
          kind="ghost"
          onClick={getViewModeButtonClickHandler(ViewMode.ListView)}
          align="top-right"
        >
          <ViewHeadline viewBox="0 0 24 24" />
        </IconButton>
        <div className={styles.divider} />
        <IconButton
          label="Switch to grid view"
          className={styles.iconButton}
          kind="ghost"
          onClick={getViewModeButtonClickHandler(ViewMode.GridView)}
          align="top-right"
        >
          <ViewModule viewBox="0 0 24 24" />
        </IconButton>
      </div>
    </div>
  )
}
