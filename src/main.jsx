import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./style/main.sass"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import NewBook from './routes/NewBook'
import UpdateBook from './routes/UpdateBook'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path= "update/:id" element={<UpdateBook />}/>
          <Route path="/new" element={<NewBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
