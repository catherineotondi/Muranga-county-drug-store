import React, {useState,useEffect} from "react";
import Drugs from "./Drugs";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';

const DrugsAdded = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();

    let index = Drugs.map(function (e) {
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let a = Drugs[index];
        a.Name = name;
        a.Description = description;
        a.Quantity = quantity;
        
        history("/home");
    }


    useEffect(() => {
        setName(localStorage.getItem('Name'));
        setDescription(localStorage.getItem('Description'));
        setId(localStorage.getItem('Id'));


    },[])

    return ( 
        <div>
          <form>
                <label>Name
                &nbsp;
                <input type="text" placeholer="Enter Name"  onChange={(e) => setName(e.target.value)} required />
                </label> <br></br>
                
                
                <label>Description
                &nbsp;
                <input type="text" placeholer="Enter Description"  onChange={(e) => setDescription(e.target.value)} required />
                </label>
                <br></br>

                <label>Quantity
                &nbsp;
                <input type="number" placeholer="Enter quantity"  onChange={(e) => setQuantity(e.target.value)} required />
                </label>
                <br></br>
                
                
                <button  onClick={(e) => handleSubmit(e)} type="submit">SUBMIT</button>
           </form>  
        </div>
     );
}
 
export default DrugsAdded;