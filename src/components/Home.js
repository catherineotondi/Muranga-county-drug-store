import React, { Fragment } from "react";
import Drugs from "./Drugs";
import { Link, useNavigate } from 'react-router-dom';
import "../css/style.css"


const Home = () => {

    let history = useNavigate();

    const handleEdit = (id, name, description) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Description', description);
        localStorage.setItem('Id', id);
        
    }

    const handleDelete = (id) => {
       
        let index = Drugs.map(function (e) {
            return e.id
        }).indexOf(id);

        Drugs.splice(index, 1)
        
        history('/home');
    }

    return (<Fragment>
        <div>
            <table>
                <thead>
                    <tr>
                        <th><i>NAME</i></th> 
                        <th><i>DESCRIPTION</i> </th> 
                        <th><i>QUANTITY</i> </th> 
                        <th> ACTIONS</th> 
                    </tr>

                </thead>
                <tbody>
                    {
                        Drugs && Drugs.length > 0 ? Drugs.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Description}</td>
                                    <td>{item.Quantity}</td>
                                    <td>
                                        <Link to={`/edit`}>
                                        <button style={{ color: 'blue',padding: "10px 20px",borderRadius: "14px",fontWeight:"bold" }}onClick={() => handleEdit(item.id, item.Name, item.Description)}>UPDATE</button>
                                        </Link>
                                        &nbsp;
                                        <button  style={{ color: 'red',padding: "10px 20px",borderRadius: "14px", fontWeight:"bold"  }}onClick={() => handleDelete(item.id)}>DELETE</button>
                                        
                                        
                                        
                                    </td>
                        </tr>
                            )
                        })
                            :"No Drugs Available"
                    }
                    
                </tbody>

            </table>
            <br>
            </br>

            <Link to={"/addDrug"}>
                <button style={{ backgroundColor: 'blue',padding: "10px 20px",borderRadius: "14px", fontWeight:"bold", color:"white"  }}>ADD DRUG</button>
            </Link>


        </div>

    </Fragment>  );
}
 
export default Home;