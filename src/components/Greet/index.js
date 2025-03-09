import React from 'react'

const Greet = (props) => {
  return (
    <div>
        <h1>Welcome {props.user}</h1>
      <p>This is your protected content</p>
      <button className='btn btn-primary'>Click me</button>
    </div>
  )
}

export default Greet
