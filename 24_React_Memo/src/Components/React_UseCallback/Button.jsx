import React from 'react'

function Button({children,handleIncrement}) {
    console.log('Button re-render', children);
  return (
   <>
   <button onClick={handleIncrement} className='btn btn-danger'>{children}</button>
   </>
  )
}

export default React.memo(Button);