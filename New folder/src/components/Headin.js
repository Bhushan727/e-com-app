import React from 'react'
import { useSelector } from 'react-redux'

const Headin = () => {
    const amount = useSelector(state => state.amount);

  return (
    <div>
        <h1>Numbers are here</h1>
        <h3> {amount} </h3>
    </div>
  )
}

export default Headin