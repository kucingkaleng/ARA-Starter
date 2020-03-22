import React, {createContext, useContext, useReducer} from 'react'
import { useRememberedState } from '@inertiajs/inertia-react'
import initState from '../states'

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeMenu':
      return {
        ...state,
        activeMenu: action.menuId
      };

    default:
      return state
  }
}

export const StateContext = createContext()

export const StateProvider = ({children}) =>(
  <StateContext.Provider value={useReducer(reducer, useRememberedState(initState))}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)