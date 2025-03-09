import React from 'react'

const Authorization = ({username}) => {
  return (
    <div>
      <div style={{
                backgroundColor:"grey",
                height:'200px',
                display:'flex',
                justifyContent:'center',
                alignItems:"center",
                color:'green'
      }}> Not Authorized {username}</div>
    </div>
  )
}

export default Authorization
