import React, { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card"



function Fieldf() {
  const [Title, setTitle] = useState("");
  const [Text, setText] = useState("");
  const [values,setValues] = useState([]);
 
 
  const titleChange = e => {
    setTitle(e.target.value.trim());
  };
  const textChange = e => {
   
    setText(e.target.value.trim());
  };

  const summit = ()=>{
      // console.log(Title,Text)
      if(Title !== "" && Text !== "" ){
          setValues((oldvalues)=>{
            return [...oldvalues,{ title:Title,
              text : Text}]
             
          })
      }

      setText("")
      setTitle("")

  }


  const removeNote = (id) => {
    // console.log("deleted");
  setValues((oldvalues)=>{
return oldvalues.filter((item,index) =>{
return id !== index
})
  })}



  return (
      <>
    <div className="container shadow-lg p-3 mb-5 bg-white rounded col-8 col-lg-6 col-xl-6 col-md-6 " >
      <div className=" mb-3 mt-5  d-flex justify-content-center  ">
        <input 
         className=" px-2 py-2 col-lg-6"
          id="title"
          name="title"
          placeholder="Enter title"
          value={Title}
          onChange={titleChange}
          style={{
            border: "none",
            backgroundColor: "lightcyan",
            color: "red",
            borderColor: "transparent",
            outline: "none",
            borderBottom: "2px solid blue",
            fontFamily:"georgia"
          }}
        />
      </div>
      <div className="  d-flex justify-content-center">
      <input 
         className=" px-2 py-1  col-lg-6"
          id="text"
          name="text"
          placeholder="Enter note"
          value={Text}
          onChange={textChange}
          style={{
            border: "none",
            backgroundColor: "lightcyan",
            color: "red",
            borderColor: "transparent",
            outline: "none",
            borderBottom: "2px solid blue",
            fontFamily:"georgia"
          }}
        />

        
      </div>
      <button className="btn btn-light my-3" onClick ={summit}>Add Note</button>
    </div>
    <div className = "container d-flex justify-content-center  flex-wrap align-content-xxl-center my-5">
       { values.map((value,index)=>{
         return(
           <Card key = {index} id = {index} text = {value.text} title = {value.title} onSelect ={removeNote}/>
        
        
        )
       })}
    </div>
    </>
  );
}

export default Fieldf;
