import React, { useReducer } from 'react'

const reducer = (state, action) => {
   if(action.type === "Increase"){
    return {count: state.count + 1}
   }else if(action.type === "decrease"){
    return { count: state.count - 1}
   }
   else{
    return state
   }
    

}

const UseReducer = () => {

    // const [count, setCount] = useState(0);

    const initialState = {count: 0}

    const [counter, dispatch] = useReducer(reducer, initialState)

    const increase = () => {
        // setCount(count + 1)
        dispatch({type: "Increase"})
    }
    const decrease = () => {
        // setCount(count - 1)
        dispatch({type: "decrease"})
    }

  return (
    <div>
        <p>{counter.count}</p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default UseReducer