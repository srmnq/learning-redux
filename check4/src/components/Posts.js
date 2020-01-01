import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, toggleTodo } from '../redux'

export default function Posts() {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      {posts.map(post => (
        <div>
          <li>{post.title}</li>
          <input
            type="checkbox"
            checked={post.completed ? 'checked' : ''}
          ></input>
          <button onClick={() => dispatch(toggleTodo(post.id))}>click</button>
        </div>
      ))}
    </div>
  )
}
