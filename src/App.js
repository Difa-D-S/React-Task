// import React, {useState} from 'react';
// import './App.css';

//   const App = () => {
//       const [state, setState] = useState(0);
    
//       const handleAdd = () => {
//         setState(state + 1)
//         // setState(state => state + 1)
//         // setState(state => state + 1)
//         // setState(state => state + 1)
//       }
//       const handleSub = () => {
//         setState(state - 1)
//       }
//       const Reset = () => {
//         setState("0")
//       }
//       return (
//         <>
//         <div className="App">
//           <p>{state}</p>
//           <button onClick={handleAdd}>ADD</button>
//           <button onClick={handleSub}>SUB</button>
//           <button onClick={Reset}>RESET</button>
//         </div>
//         </>
//       )
//     }


// export default App;



import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import TaskList from './components/TaskList'

const App = () => {

    return (
      <div className='App'>
        <Header />
        <TaskList randomValue = "random" />
      </div>
    )
}
  
export default App