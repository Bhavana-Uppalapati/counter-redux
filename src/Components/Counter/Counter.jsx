import React from 'react'
import { Increment } from '../../Redux/ActionCreators/ActionCreators'
import { Decrement } from '../../Redux/ActionCreators/ActionCreators'
import { useDispatch } from 'react-redux'

export default function Counter() {
    let dispatch = useDispatch()
  return (
  <>
  <h1>Counter : </h1>
  <button onClick={()=>{
  dispatch( Increment())
  }}> Increment</button>
  <button onClick={()=>dispatch(Decrement())
}>Decrement</button>
  </>
  )
}
