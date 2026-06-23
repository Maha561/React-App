import { useState } from "react";


const course1="HTML" 

function Course(props){

    // let purchased = false;
    
    const[purchased,setPurchased] = useState(false)

    function byCourse(){

        setPurchased(true)

       

        

    }

    

    return(
        
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={byCourse}>Buy now </button>
            <p>{purchased?"already purchased" : "get it now "}</p>
        </div>
    );
}

export default Course