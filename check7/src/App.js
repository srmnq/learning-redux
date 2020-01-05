import React from 'react'
import './App.css'
import PostWrapper from './components/PostWrapper'
import DetailPost from './components/DetailPost'
import { Provider } from 'react-redux'
import { store } from './redux/redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <PostWrapper></PostWrapper>
            </div>
          </Route>
          <Route patch="Post/:id">
            <div>
              <DetailPost>hallo</DetailPost>
            </div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
