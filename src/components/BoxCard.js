import React, {useState} from 'react'

// const BoxCard = (props) => {         // object
//   return (
//     <div>
//         <div className='box'>
//             {props.children}
//         </div>
//     </div>
//   )
// }

       // OR

const BoxCard = ({children, result}) => {         // Destructuring object
    
    const [show, setShow] = useState(true);

    return (
      <div style={{display:"flex", justifyContent:"center"}}>
        <div className={show ? "" : "hidden"}>
          <div className={`box ${result}`}>
              {show && children}
          </div>
          <div className='toggle'>
            <button onClick={() => (setShow(!show))} className='Show'>Hide</button>
          </div>
        </div>
      </div>
    )
  }

export default BoxCard