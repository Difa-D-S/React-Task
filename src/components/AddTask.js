import {useState} from 'react'
import './AddTask.css'

export const AddTask = ({tasks, setTasks}) => {

    const [taskValue, setTaskValue] = useState('')

    // const handleChange = (event) => {
    //     console.log(event.target.value)
    //     setTaskValue(event.target.value)
    // }

    const [progress, setProgress] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();

        const task = {
            id: Math.floor(Math.random() * 100000),
            name : taskValue,
            completed: Boolean(progress)
        }
        // console.log(typeof (Boolean(progress)));
        console.log(task);
        setTasks([...tasks, task])
        handleReset()
    }

    const handleReset = () => {
        setTaskValue('')
        setProgress('')
    }

  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}>
            <input onChange={(event) => {setTaskValue(event.target.value)}} type='text' placeholder='Add Task' name='task' id='task' value={taskValue} autoComplete='off'></input>
            <select onChange={(event) => {setProgress(event.target.value)}} value={progress}>
                <option value={false}>Pending</option>
                <option value={true}>completed</option>
            </select>
            <button type="submit">Add Task</button>
            <button onClick={handleReset}>Reset</button>
        </form>
        <p>{taskValue}</p>
    </section>
    
  )
}

