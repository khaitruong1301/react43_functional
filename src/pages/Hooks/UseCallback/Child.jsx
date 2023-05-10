import React,{memo} from 'react'

const Child = (props) => {


    console.log('child render')

  return (
    <div className='bg-dark text-white my-2 p-3 fs-3'>
        child component : {props.uiLike()}
    </div>
  )
}

export default memo(Child)



