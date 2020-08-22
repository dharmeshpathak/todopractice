import React from 'react'

function Input(props) {
    return (
        <>
             <input
          className=" px-2 py-2"
          id={props.id}
          name={props.name}
          placeholder={`Enter ${props.name}`}
          style={{
            border: "none",
            backgroundColor: "lightcyan",
            color: "red",
            borderColor: "transparent",
            outline: "none",
            borderBottom: "2px solid blue"
          }}
        />
        </>
    )
}

export default Input
