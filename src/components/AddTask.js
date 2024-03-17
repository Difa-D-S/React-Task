import {useState} from 'react'
import './AddTask.css'

export const AddTask = ({tasks, setTasks}) => {

    const [taskValue, setTaskValue] = useState('')

    // const handleChange = (event) => {
    //     console.log(event.target.value)
    //     setTaskValue(event.target.value)
    // }

    const [show, setShow] = useState(true)

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
        setShow(true);
        handleReset()
    }

    const handleReset = () => {
        setTaskValue('')
        setProgress('')
    }

  return (
    <section className='addtask'>
        <div className={show ? "" : "hidden"}>
          <button onClick={() => setShow(!show)} className="Show"> Add </button>
        </div> 
           {!show && <div className='form'>
            <form >
                <input className="form-design me-2" onChange={(event) => {setTaskValue(event.target.value)}} type='text' placeholder='Add Task' name='task' id='task' value={taskValue} autoComplete='off'></input>
                <select className="form-design me-2" onChange={(event) => {setProgress(event.target.value)}} value={progress}>
                    <option value={false}>Pending</option>
                    <option value={true}>completed</option>
                </select>
               <button type="submit" className="form-design me-2" onClick={handleSubmit}>Add Task</button>
            </form>
            <button onClick={handleReset} className="form-design">Reset</button>
            </div> }
        {/* <p>{taskValue}</p> */}
    </section>
    
  )
}

