import React from 'react'
import Todo from '../Image/images.png'

const Header = () => {
    
  return (
    <div className='todo'>
        <img src={Todo} alt='ToDo' className='todo-img' width={'200px'}/>
    </div>
  )
}

export default Header