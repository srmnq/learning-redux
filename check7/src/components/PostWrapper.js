import Posts from './Posts'
import Form from './Form'

import React from 'react'

export default function PostWrapper() {
  return (
    <div className="post-wrapper">
      <Form></Form>
      <Posts></Posts>
    </div>
  )
}
