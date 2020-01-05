import React, { useEffect } from 'react'
import { fetchPosts } from '../redux/redux'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleTodo } from '../redux/redux'

export default function Posts() {
  const posts = useSelector(state => state.posts)
  const form = useSelector(state => state.form)
  const sort = useSelector(state => state.sort)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div>
      {sort
        ? posts

            .filter(post => post.title.includes(form.name))
            .filter(post => String(post.id).includes(String(form.id)))
            .filter(post => (form.completed === 'Yes' ? post.completed : post))
            .map(post => (
              <div className="posts" key={post.title}>
                <label htmlFor="completed-checkbox"></label>
                <input
                  onChange={() => dispatch(toggleTodo(post.id))}
                  name="completed-checkbox"
                  id="completed-checkbox"
                  type="checkbox"
                  checked={post.completed && 'checked'}
                ></input>
                <h1>{post.title}</h1>
                <Link to={`/Post/${post.id}`} className="weiter-link">
                  <button className="btn weiter-btn">Weiter</button>
                </Link>
              </div>
            ))
            .sort((a, b) => {
              var a1 = a.key.toLowerCase()
              var b1 = b.key.toLowerCase()
              return a1 < b1 ? -1 : a1 > b1 ? 1 : 0
            })
        : posts

            .filter(post => post.title.includes(form.name))
            .filter(post => String(post.id).includes(String(form.id)))
            .filter(post => (form.completed === 'Yes' ? post.completed : post))
            .map(post => (
              <div className="posts" key={post.title}>
                <label htmlFor="completed-checkbox"></label>
                <input
                  onChange={() => dispatch(toggleTodo(post.id))}
                  name="completed-checkbox"
                  id="completed-checkbox"
                  type="checkbox"
                  checked={post.completed && 'checked'}
                ></input>
                <h1>{post.title}</h1>
                <Link to={`/Post/${post.id}`} className="weiter-link">
                  <button className="btn weiter-btn">Weiter</button>
                </Link>
              </div>
            ))}
    </div>
  )
}
