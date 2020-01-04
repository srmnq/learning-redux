import React, { useEffect } from 'react'
import { fetchPosts } from '../redux/redux'
import { useSelector, useDispatch } from 'react-redux'

export default function Posts() {
  const posts = useSelector(state => state.posts)
  const form = useSelector(state => state.form)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className="posts">
      {posts
        .filter(post => post.title.includes(form.name))
        .filter(post => String(post.id).includes(String(form.id)))
        .filter(post => (form.completed === 'yes' ? post.completed : post))
        .map(post => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <input
              type="checkbox"
              checked={post.completed ? 'checked' : ''}
            ></input>
          </div>
        ))}
    </div>
  )
}
