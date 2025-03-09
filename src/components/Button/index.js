import React from 'react'

const CustomButton = (props) => {
  return (
    <button style={{
        backgroundColor:'red',
        color:'white',
        padding:'10px',
        fontSize:'16px',



    }}
    onClick={props.handleclick}>
        {props.label}

    </button>
  )
}

export default CustomButton
