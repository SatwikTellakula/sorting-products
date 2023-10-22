import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/register" component={RegistrationForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/products" component={Products} />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
