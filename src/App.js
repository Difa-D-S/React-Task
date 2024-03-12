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



import React, {useState} from 'react'
import './App.css'

const App = () => {
const [tasks, setTasks] = useState(
      [
        { id: 1, name: "Ram", completed: true },
        { id: 2, name: "Edit React", completed: false },
        { id: 3, name: "Watch Video", completed: true }
      ]
    )
  
    const [show, setShow] = useState(true);

    const Delete = (id) => {
      setTasks(tasks.filter( task => task.id !== id ))
    }
    
    return (
      <div className='App'>
        <h2>Task List</h2>
        <button onClick={() => setShow(!show)}>Toggle</button>
        <ul>
          {show && tasks.map( (item) => (
            <li key={item.id} className={tasks.completed ? 'completed' : 'incompleted'}> {item.id} - {item.name} 
            <button onClick={() => Delete(item.id)}>Delete</button>
            </li>
          ) )}
        </ul>
      </div>
    )
}
  
export default App