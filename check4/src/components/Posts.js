import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, toggleTodo, showAll, search } from '../redux'

export default function Posts() {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()
  const searchInput = useSelector(state => state.searchInput)
  const allShown = useSelector(state => state.showAll)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      <input type="text" onChange={e => dispatch(search(e))}></input>
      <button onClick={() => dispatch(showAll())}>
        {allShown ? 'show completed todos' : 'show all'}
      </button>

      {allShown
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
