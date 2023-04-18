import { pageReducer, initialState } from './pageReducer'
import {
  ContentSwitcherMode,
  ViewMode,
  PageActionTypes,
  PageAction,
  ISetContentSwitchModeAction,
  ISetViewModeAction,
  ISetSearchAction,
  ISetTypeAction,
} from './types'

describe('pageReducer', () => {
  it('should return the initial state', () => {
    const unknownAction = {} as unknown as PageAction
    expect(pageReducer(undefined, unknownAction)).toEqual(initialState)
  })

  it('should handle SET_CONTENT_SWITCH_MODE action', () => {
    const contentSwitchMode = ContentSwitcherMode.Favorites
    const action: ISetContentSwitchModeAction = {
      type: PageActionTypes.SET_CONTENT_SWITCH_MODE,
      payload: contentSwitchMode,
    }
    const expectedState = { ...initialState, contentSwitchMode }

    expect(pageReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle SET_VIEW_MODE action', () => {
    const viewMode = ViewMode.GridView
    const action: ISetViewModeAction = {
      type: PageActionTypes.SET_VIEW_MODE,
      payload: viewMode,
    }
    const expectedState = { ...initialState, viewMode }

    expect(pageReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle SET_SEARCH action', () => {
    const search = 'test'
    const action: ISetSearchAction = {
      type: PageActionTypes.SET_SEARCH,
      payload: search,
    }
    const expectedState = { ...initialState, search }

    expect(pageReducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle SET_TYPE action', () => {
    const type = 'example'
    const action: ISetTypeAction = {
      type: PageActionTypes.SET_TYPE,
      payload: type,
    }
    const expectedState = { ...initialState, type }

    expect(pageReducer(initialState, action)).toEqual(expectedState)
  })
})
