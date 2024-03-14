import React, {useState} from 'react'
import TaskCard from './TaskCard';
import BoxCard from './BoxCard';


const TaskList = ({tasks, setTasks}) => {
    
    
      const [show, setShow] = useState(true);

      // const styles = {
      //     color: show ? "green" : "blue",
      //     fontSize: "25px",
      //     fontWeight:"bold"
      //  }
  
      const Delete = (id) => {
        setTasks(tasks.filter( task => task.id !== id ))
      }
  return (
    <>
        {/* <h2 style={styles}>Task List</h2> */}

        <h2 style={ {fontWeight:"bold", fontSize:"30px", textAlign:"center", margin:"35px"} }>Task List</h2>

        <div className='toggle'>
          <button onClick={() => setShow(!show)} className='Show'> {show ? "Hide" : "Show"} </button>
        </div> 
       
        <div style={{display:"flex", justifyContent:"center"}}>
          <div className='list-center'>
            <ul className='list'>
              {show && tasks.map( (item) => (
                <TaskCard task={item} handleEvent={Delete}/>
              ) )}
            </ul>
          </div>
        </div>

        <div style={{textAlign:'center'}}>
          <BoxCard result="success">
            <p className='title'> Lorem, ipsum </p>
            <p>adfh skdfhkdf kdshf dksfh dshf dskjfh sdfh dsjfh </p>
          </BoxCard>
          <BoxCard result="warning">
            <p className='title'> Lorem, ipsum </p>
            <p>adfh skdfhkdf kdshf dksfh dshf dskjfh sdfh dsjfh </p>
          </BoxCard>
          <BoxCard result="alerter">
            <p className='title'> Lorem, ipsum </p>
            <p>adfh skdfhkdf kdshf dksfh dshf dskjfh sdfh dsjfh </p>
          </BoxCard>
        </div>
    </>
  )
}

export default TaskList