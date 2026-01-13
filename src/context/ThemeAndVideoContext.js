import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isLightTheme: true,
  toggleTheme: () => {},
  savedVideosList: [],
  addOrRemoveSavedVideo: () => {},
})

export default ThemeAndVideoContext
