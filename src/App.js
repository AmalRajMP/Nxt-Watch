import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { eachDayOfInterval, isLastDayOfMonth } from 'date-fns'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  state = { isLightTheme: true, savedVideosList: [] }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  addOrRemoveSavedVideo = (video) => {
    const { savedVideosList } = this.state
    const savedVideo = savedVideosList.find((item) => item.id === video.id)
    if (savedVideo === undefined) {
      this.setState((prevState) => ({
        savedVideosList: [...prevState.savedVideosList, video],
      }))
    } else {
      this.setState((prevState) => ({
        savedVideosList: prevState.savedVideosList.filter(
          (item) => item.id !== video.id
        ),
      }))
    }
  }

  render() {
    const { isLightTheme, savedVideosList } = this.state

    return (
      <>
        <ThemeAndVideoContext.Provider
          value={{
            isLightTheme,
            toggleTheme: this.toggleTheme,
            savedVideosList,
            addOrRemoveSavedVideo: this.addOrRemoveSavedVideo,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
          </Switch>
        </ThemeAndVideoContext.Provider>
      </>
    )
  }
}

export default App
