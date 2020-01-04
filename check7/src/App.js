import React from 'react'
import './App.css'
import PostWrapper from './components/PostWrapper'
import { Provider } from 'react-redux'
import { store } from './redux/redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostWrapper></PostWrapper>
      </div>
    </Provider>
  )
}

export default App
