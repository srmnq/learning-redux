import React from 'react'
import { saveForm } from '../redux/redux'
import { useDispatch, useSelector } from 'react-redux'
import { sort, toggleIncludeA } from '../redux/redux'

export default function Form() {
  const dispatch = useDispatch()
  const form = useSelector(state => state.form)

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
      <label htmlFor="completed">show only completed</label>
      <select name="completed" onChange={e => dispatch(saveForm(e))}>
        <option>Yes</option>
        <option>No</option>
      </select>
      {/* <label name="include">includes letter</label> */}
      <label>a</label>
      <input
        onClick={() => dispatch(toggleIncludeA())}
        name="include"
        type="checkbox"
        checked={form.include && 'checked'}
      ></input>
      <label>b</label>
      <input name="include" type="checkbox" value="b"></input>
      <button onClick={e => dispatch(sort(e))}>Sort alphabetical</button>
    </form>
  )
}
