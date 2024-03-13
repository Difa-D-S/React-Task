import React from 'react'
import styles from './TaskCard.module.css'

const TaskCard = (props) => {
  return (
    <>
        <li key={props.task.id} className={props.task.completed ? 'completed' : 'incompleted'}> 
          <span className={styles.title}>{props.task.id} - {props.task.name} - {props.randomValue}</span>
            <button onClick={() => props.handleEvent(props.task.id)}>Delete</button>
        </li>
    </>
  )
}

export default TaskCard