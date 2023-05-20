 import React, {createContext} from 'react'
import {theme} from './theme'
type ThemeContextProviderProps = {
	children: React.ReactNode 
}
export const ThemeContexts = createContext(theme)

export const ThemeContextProvider = ({children}:ThemeContextProviderProps)=> {
  return  <ThemeContexts.Provider value={theme}>{children}</ThemeContexts.Provider> 
	medical visa - 10days 
 
}
 