import React, {useState} from "react";
import Drugs from "./Drugs";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';


const DrugAddition = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let x = name,
            y = description,
            z = quantity;
        
        Drugs.push({ id: uniqueId, Name: x, Description: y, Quantity: z });

        history("/home");
    }
    return ( 
        <div>
            <form>
                <h1>DRUG DETAILS</h1>
                <label>Name
                &nbsp;
                <input type="text" placeholer="Enter Name" required onChange={(e) => setName(e.target.value)} />
                </label> <br></br><br></br>
                
                
                <label>Description
                &nbsp;
                <input type="text" placeholer="Enter Description" required onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br></br> <br></br>

                <label>Quantity
                &nbsp;
                <input type="number" placeholer="Enter quantity" required onChange={(e) => setQuantity(e.target.value)} />
                </label>
                <br></br><br></br>
                
                
                <button style={{ backgroundColor: 'blue',padding: "10px 20px",borderRadius: "10px", fontWeight:"bold", color:"white"  }}  onClick={(e) => handleSubmit(e)} type="submit">SUBMIT</button>
           </form>
        </div>
     );
}
 
export default DrugAddition;