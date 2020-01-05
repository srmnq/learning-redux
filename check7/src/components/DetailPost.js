import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function DetailPost() {
  const posts = useSelector(state => state.posts)
  let location = useLocation()
  const pathname = location.pathname
  const id = pathname.slice(6)

  return (
    <div>
      {posts
        .filter(post => String(post.id) === String(id))
        .map(post => (
          <div>
            <h1>{post.title}</h1>
          </div>
        ))}
    </div>
  )
}
