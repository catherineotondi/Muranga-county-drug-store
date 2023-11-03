import { Link } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <div className='homebody'>
            <div className='hometext'>
                <h1>SAFE <span className='headertext'>DRUG</span> STORAGE<br></br>
                    <span className='headertext'> QUALITY</span> WELLBEING</h1>
                <p>Manage drugs by visiting the Muranga Drug store for proper <br></br>
                    management since health is wealth!!!
                </p>
            </div>
            
            

            <Link to={`/signup`}>
            <button onClick={() => alert("Kindly Sign Up then Log In to access the Drugs in store")}>VISIT STORE</button>  
            </Link>

          
        </div>
     );
}
 
export default HomePage;