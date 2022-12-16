import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import NewBook from './routes/NewBook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
