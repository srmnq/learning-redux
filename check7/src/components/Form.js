import React from 'react'
import { saveForm } from '../redux/redux'
import { useDispatch } from 'react-redux'

export default function Form() {
  const dispatch = useDispatch()

  return (
    <form className="form">
      <label htmlFor="name">Name</label>
      <input
        onChange={e => dispatch(saveForm(e))}
        id="name"
        name="name"
        type="text"
      ></input>
      <label htmlFor="id">ID</label>
      <input
        onChange={e => dispatch(saveForm(e))}
        id="id"
        name="id"
        type="number"
      ></input>
      <label htmlFor="name">show only completed</label>
      <select onChange={e => dispatch(saveForm(e))}>
        <option>yes</option>
        <option>No</option>
      </select>
    </form>
  )
}
