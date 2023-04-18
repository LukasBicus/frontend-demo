export enum ContentSwitcherMode {
  All = 'all',
  Favorites = 'favorites',
}

export enum ViewMode {
  ListView = 'listView',
  GridView = 'gridView',
}

export interface IPageState {
  contentSwitchMode: ContentSwitcherMode
  viewMode: ViewMode
  search?: string
  type?: string
}

export enum PageActionTypes {
  SET_CONTENT_SWITCH_MODE = 'SET_CONTENT_SWITCH_MODE',
  SET_VIEW_MODE = 'SET_VIEW_MODE',
  SET_SEARCH = 'SET_SEARCH',
  SET_TYPE = 'SET_TYPE',
  RESET_TYPE = 'RESET_TYPE',
}

export interface ISetContentSwitchModeAction {
  type: PageActionTypes.SET_CONTENT_SWITCH_MODE
  payload: ContentSwitcherMode
}

export interface ISetViewModeAction {
  type: PageActionTypes.SET_VIEW_MODE
  payload: ViewMode
}

export interface ISetSearchAction {
  type: PageActionTypes.SET_SEARCH
  payload: string
}

export interface ISetTypeAction {
  type: PageActionTypes.SET_TYPE
  payload: string
}
export interface IResetTypeAction {
  type: PageActionTypes.RESET_TYPE
}

export type PageAction =
  | ISetContentSwitchModeAction
  | ISetViewModeAction
  | ISetSearchAction
  | ISetTypeAction
  | IResetTypeAction
