import React, { useEffect, useState } from 'react'
import { Point } from '../../../model/Point'
import './App.css'
import logo from './logo.svg'

const { log } = console

export default () => {

  const [points, setPoints] = useState<Point[]>([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL || ''}/api/points`)
      .then(response => response.json())
      .then(response => setPoints(response))
      .catch(log)
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save it to reload.
        </p>
        <div>{JSON.stringify(points)}</div>
      </header>
    </div>
  )
}