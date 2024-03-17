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



import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
// import { AddTask } from './components/AddTask';


const App = () => {

  const [tasks, setTasks] = useState(
    [
      { id: 14533, name: "Ram", completed: false },
      { id: 23452, name: "Edit React", completed: false },
      { id: 33745, name: "Watch Video", completed: true }
    ]
  )

    return (
      <div className='App'>
        <Header />
        <main>
          {/* <AddTask tasks={tasks} setTasks={setTasks} /> */}
          <TaskList tasks={tasks} setTasks={setTasks} />
        </main>
        <Footer />
      </div>
    )
}
  
export default App