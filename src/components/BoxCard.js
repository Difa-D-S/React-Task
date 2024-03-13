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
      <div className={show ? "" : "hidden"}>
          <div className={`box ${result}`}>
              {show && children}
          </div>
          <button onClick={() => (setShow(!show))}>Hide</button>
      </div>
    )
  }

export default BoxCard