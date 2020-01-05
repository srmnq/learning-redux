import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reducer } from './reducer'

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

//action

export const fetchProductsBegin = () => ({
  type: 'FETCH_PRODUCTS_BEGIN'
})

export const fetchProductsSuccess = products => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  payload: { products }
})

export const fetchProductsFailure = error => ({
  type: 'FETCH_PRODUCTS_FAILURE',
  payload: { error }
})

export function fetchPosts() {
  return dispatch => {
    dispatch(fetchProductsBegin())
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchProductsSuccess(data))
      })
      .catch(error => dispatch(fetchProductsFailure(error)))
  }
}

// export const fetchPosts = () => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data =>
//       dispatch({
//         type: 'FETCH_POSTS',
//         payload: data
//       })
//     )
// }

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
export const toggleTodo = id => {
  return { type: 'TOGGLE_TODO', payload: id }
}

export const sort = e => {
  e.preventDefault()
  return { type: 'SORT' }
}
export const toggleIncludeA = () => {
  return { type: 'INCLUDE_A' }
}
