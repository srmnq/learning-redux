import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  posts: [],
  showAll: true,
  searchInput: ''
}

//reducers
const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'FETCH_POSTS':
      return { ...state, posts: payload }

    case 'TOGGLE_TODO':
      return {
        ...state,
        posts: state.posts.map(todo =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        )
      }

    case 'SHOW_ALL':
      return {
        ...state,
        showAll: !state.showAll
      }
    case 'SEARCH_INPUT':
      return {
        ...state,
        searchInput: payload
      }

    default:
      return state
  }
}

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

// action

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => dispatch({ type: 'FETCH_POSTS', payload: data }))
    .catch(() => console.log('error'))
}
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: id
})

export const showAll = () => ({
  type: 'SHOW_ALL'
})
export const search = e => ({
  type: 'SEARCH_INPUT',
  payload: e.target.value
})
