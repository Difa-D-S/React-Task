import React from 'react'
import styles from './TaskCard.module.css'

const TaskCard = (props) => {

  return (
    <>
        <li key={props.task.id} className={props.task.completed ? `completed ${styles.list}` : `incompleted ${styles.list}`}> 
          <div style={{display:"flex", justifyContent:"space-between", alignItems:'center'}}>
            <div>
              <span className={styles.title}>{props.task.id} - {props.task.name}</span>
            </div>
            <div>
              <button onClick={() => props.handleEvent(props.task.id)} className={styles.delete}>Delete</button>
            </div>
          </div>
        </li>
    </>
  )
}

export default TaskCard