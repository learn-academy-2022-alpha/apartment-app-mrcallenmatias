import React, { Component } from "react"
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Index from './pages/Index'
import Edit from './pages/Edit'
import New from './pages/New'
import NotFound from './pages/NotFound'
import Show from './pages/Show'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Home exact path="/" component={Home}/>
          <Index path="/index" component={Index}/>
          <Show path="/show" component={Show}/>
          <Edit path="/edit" component={Edit}/>
          <New path="/new" component={New}/>
          <NotFound path="/notfound" component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App
