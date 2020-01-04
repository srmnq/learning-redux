import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer } from './reducer'

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

//action

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: 'FETCH_POSTS',
        payload: data
      })
    )
}

export const saveForm = e => {
  e.preventDefault()
  const form = e.target.parentNode
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  return {
    type: 'SAVE_FORM',
    payload: data
  }
}
