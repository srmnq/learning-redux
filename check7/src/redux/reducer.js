const initialstate = {
  posts: [],
  form: { name: '', id: '', completed: 'Yes', include: true },
  sort: false,
  loading: false,
  error: null
}

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case 'FETCH_POSTS':
      return { ...state, posts: payload }
    case 'SAVE_FORM':
      return { ...state, form: payload }
    case 'SORT':
      return { ...state, sort: !state.sort }
    case 'INCLUDE_A':
      return { ...state, form: { ...state.form, include: !state.form.include } }
    case 'TOGGLE_TODO':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === payload ? { ...post, completed: !post.completed } : post
        )
      }
    case 'FETCH_PRODUCTS_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      }

    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: payload.products
      }

    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: payload.error,
        posts: []
      }

    default:
      return state
  }
}
