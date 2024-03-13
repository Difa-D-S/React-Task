import React, {useState} from 'react'
import TaskCard from './TaskCard';
import BoxCard from './BoxCard';

const TaskList = (props) => {
    const [tasks, setTasks] = useState(
        [
          { id: 1, name: "Ram", completed: true },
          { id: 2, name: "Edit React", completed: false },
          { id: 3, name: "Watch Video", completed: true }
        ]
      )
    
      const [show, setShow] = useState(true);

      const styles = {
          color: show ? "green" : "blue",
          fontSize: "25px",
          fontWeight:"bold"
       }
  
      const Delete = (id) => {
        setTasks(tasks.filter( task => task.id !== id ))
      }
  return (
    <>
        {/* <h2 style={styles}>Task List</h2> */}

        <h2 style={ {color:"red", fontSize:"50px"} }>Task List</h2>

        <div className='toggle'>
          <button onClick={() => setShow(!show)} style={styles}> {show ? "hide" : "show"} </button>
        </div> 
        <ul>
          {show && tasks.map( (item) => (
            <TaskCard randomValue = {props.randomValue} task={item} handleEvent={Delete}/>
          ) )}
        </ul>

        <BoxCard result="bg-success">
          <p className='title'> Lorem, ipsum </p>
          <p>adfh skdfhkdf kdshf dksfh dshf dskjfh sdfh dsjfh </p>
        </BoxCard>
        <BoxCard result="bg-warning">
          <p className='title'> Lorem, ipsum </p>
          <p>adfh skdfhkdf kdshf dksfh dshf dskjfh sdfh dsjfh </p>
        </BoxCard>
        <BoxCard result="bg-primary">
          <p className='title'> Lorem, ipsum </p>
          <p>adfh skdfhkdf kdshf dksfh dshf dskjfh sdfh dsjfh </p>
        </BoxCard>
    </>
  )
}

export default TaskList