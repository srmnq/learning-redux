import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, toggleTodo } from '../redux'

export default function Posts() {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const [showAll, setShowAll] = useState(true)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      <input type="text" onChange={e => setSearchInput(e.target.value)}></input>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'show completed todos' : 'show all'}
      </button>

      {showAll
        ? posts
            .filter(post => post.title.includes(searchInput))
            .map(post => (
              <div className="post-container">
                <li>{post.title}</li>
                <input
                  type="checkbox"
                  checked={post.completed ? 'checked' : ''}
                  onChange={() => dispatch(toggleTodo(post.id))}
                  key={post.id}
                ></input>
              </div>
            ))
        : posts
            .filter(post => post.title.includes(searchInput))
            .filter(post => post.completed === true)
            .map(post => (
              <div className="post-container">
                <li>{post.title}</li>
                <input
                  type="checkbox"
                  checked={post.completed ? 'checked' : ''}
                  onChange={() => dispatch(toggleTodo(post.id))}
                  key={post.id}
                ></input>
              </div>
            ))}
    </div>
  )
}
