import React from 'react'
import CustomButton from '../Button'

const Banner = () => {

    function buttonclicked(){
      console.log("Button clicked");
    }
    return (
    <div style={{
        backgroundColor:"grey",
        height:'200px',
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        color:'whitesmoke'
    }}>
        <h1>Banner Page</h1>
        <CustomButton label={"Click to view banner"}  handleclick={buttonclicked}/>
    </div>
  )
}

export default Banner
