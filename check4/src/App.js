import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './redux'
import Posts from './components/Posts'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Posts></Posts>
      </div>
    </Provider>
  )
}

export default App
