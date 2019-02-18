import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from './components/Home'
import Semilleros from './components/Semilleros'
import Revista from './components/Revista'
import Proyectos from './components/Proyectos'
import Simposio from './components/Simposio'
import TopSection from './components/TopSection'
import Footer from './components/Footer'
import Semillero from './components/Semillero'
import './App.css'

const semilleros = ['innovatics', 'siclog', 'neurocomarketing', 'siam', 'aleph', 'industriascreativas']

class App extends Component {
  render() {
    return (
      <Router>
          <div className="app">
            <div className="content">
              <Route render={ (props) => {
                return (
                  <TopSection location={props.location.pathname} />
                )
              }} />
              <Route render={({ location }) =>
                <TransitionGroup exit={false}>
                  <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
                  <Switch location={location}>
                    <Route exact path="/" render={() => <Home  />} />
                    <Route path="/semilleros" render={() => <Semilleros  />} />
                    <Route path="/revista" render={() => <Revista />}/>
                    <Route path="/proyectos" render={() => <Proyectos />}/>
                    <Route path="/simposio" render={() => <Simposio />}/>
                    {semilleros.map((item) => (
                      <Route key={item} path={`/${item}`} render={() => <Semillero variant={item} />}/>
                    ))}
                    <Route render={() => <h1>Page not found</h1>} />
                  </Switch>
                  </CSSTransition>
                </TransitionGroup>
              }/>
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
