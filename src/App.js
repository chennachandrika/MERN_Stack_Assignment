import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoginFormPage from './components/LoginFormPage'
import HomePage from './components/HomePage'
import NotFoundView from './components/NotFoundView'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginFormPage} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <Route component={NotFoundView} />
    </Switch>
  </BrowserRouter>
)

export default App
