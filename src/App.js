import { Switch, Route } from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
    </Switch>
  </>
)

export default App
