import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Point } from '../../../model/Point'
import A from './A'
import $ from './App.module.scss'
import B from './B'
import logo from './logo.svg'

const { log } = console

export const App = () => {

  const [points, setPoints] = useState<Point[]>([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/points`)
      .then(response => response.json())
      .then(response => setPoints(response))
      .catch(log)
  })

  return (
    <div className={$.App}>
      <header className={$.header}>
        <img src={logo} className={$.logo} alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save it to reload.
        </p>
        <div>{JSON.stringify(points)}</div>
      </header>
    </div>
  )
}

export default () => (
  <Router>
    <nav>
      <ul>
        <li><Link to='/a'>A</Link></li>
        <li><Link to='/b'>B</Link></li>
        <li><Link to='/c'>C</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route path='/' exact component={A} />
      <Route path='/a' component={A} />
      <Route path='/b' component={B} />
      <Route path='/c' component={App} />
    </Switch>
  </Router>
)