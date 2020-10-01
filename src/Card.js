import React from "react";
function Card(props) {
  
    
  
  return (
    <>
      <div style={{ display: "flex", textAlign: "center", padding: "40px" }}>
        <div
          className="card shadow-lg p-3 mb-5 bg-white rounded"
          style={{ width: "20rem" }}
        >
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item"
              style={{
                backgroundColor: "lightcyan",
                color: "grey",
                fontFamily: "Helvetica"
              }}
            >
              {props.title}
            </li>
            <li
              className="list-group-item"
              style={{ fontFamily: "Laila", color: "red" }}
            >
    
            
              {" "}
              {props.text}
            </li>
    
            <li
              className="list-group-item"
              style={{ fontFamily: "Majnu", color: "yellow" }}
            >
    
              {" "}
              {props.text}
            </li>        
    
            <li className="list-group-item">
              <button
                className="btn btn-light "
                style={{ color: "red"}}
                onClick={()=>
                    props.onSelect(props.id)
                    }
              ><span style={{fontWeight:"bolder", padding: "10px"}}>
                X</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
