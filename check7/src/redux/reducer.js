const initialstate = {
  posts: [],
  form: { name: '', id: '', completed: 'yes' }
}

export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case 'FETCH_POSTS':
      return { ...state, posts: payload }
    case 'SAVE_FORM':
      return { ...state, form: payload }

    default:
      return state
  }
}
