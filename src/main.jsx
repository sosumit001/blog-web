import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element = {<App/>} >
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
