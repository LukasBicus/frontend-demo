import {
  ContentSwitcherMode,
  IPageState,
  PageAction,
  PageActionTypes,
  ViewMode,
} from './types'

export const initialState: IPageState = {
  contentSwitchMode: ContentSwitcherMode.All,
  viewMode: ViewMode.ListView,
  search: undefined,
  type: undefined,
}

export const pageReducer = (
  state: IPageState = initialState,
  action: PageAction,
): IPageState => {
  switch (action.type) {
    case PageActionTypes.SET_CONTENT_SWITCH_MODE:
      return {
        ...state,
        contentSwitchMode: action.payload,
      }
    case PageActionTypes.SET_VIEW_MODE:
      return {
        ...state,
        viewMode: action.payload,
      }
    case PageActionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }
    case PageActionTypes.SET_TYPE:
      return {
        ...state,
        type: action.payload,
      }
    default:
      return state
  }
}
