import React,{useState} from 'react'

function Input(){
  const [inputt, setInputt]=useState("");  

  function handleChange(event){
    const newin=event.target.value;
    console.log(newin);
    setInputt(newin);
    
  }

  return (
    <>
    <h1 className="d-flex justify-content-center border">NEWS POINT</h1>
    <div className="mt-5 mx-5">
        <input onChange={handleChange} type="text" placeholder='Search for news' value={inputt}/>
    </div>
    </>
  )
}
export default Input;