import React from 'react'
import { useDispatch } from 'react-redux'

import { actionCreators } from '../state/index'

const Btns = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <div>
            <h3>increase</h3>
            <button onClick={()=>dispatch(actionCreators.depositMoney(5))}> + </button>
        </div>
        <div>
            <h3>deccrease</h3>
            <button onClick={()=>dispatch(actionCreators.withdrawMoney(5))}> - </button>
        </div>
    </div>
  )
}

export default Btns