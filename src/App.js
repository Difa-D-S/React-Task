import React, {useState} from 'react';
import './App.css';

  const App = () => {
      const [state, setState] = useState(0);
    
      const handleAdd = () => {
        // setState(state + 1)
        setState(state => state + 1)
        setState(state => state + 1)
        setState(state => state + 1)
      }
      return (
        <>
        <div className="App">
          <p>{state}</p>
          <button onClick={handleAdd}>ADD</button>
          <button>SUB</button>
          <button>RESET</button>
        </div>
        </>
      )
    }


export default App;


// const [tasks, setTasks] = useState(
  //     [
  //       {
  //         id: 1, name: "Ram", completed: true
  //       },
  //       {
  //         id: 1, name: "Edit React", completed: false
  //       },
  //       {
  //         id: 1, name: "Watch Video", completed: true
  //       }
  //     ]
  //   )
  
  //   const [show, setShow] = useState(true)
  
  //   const handleEvent = (id) => {
  //     setTasks(tasks.filter( (task) => task.id !== id))
  //   }
  //   return (
  //     <div className='App'>
  //       <h2>Task List</h2>
  //       <button onClick={ () => setShow(!show)}>Toggle</button>
  //       <ul>
  //         {show && tasks.map((task) => (
  //           <li key={task.id}>
  //             <span>{task.id} - {task.name}</span>
  //             <button onClick={() => handleEvent(task.id)}>Delete</button>
  //           </li>
  //         ) )}
  //       </ul>
  //     </div>
  //   )
  