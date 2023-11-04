import { Link } from 'react-router-dom';


const LogIn = () => {
    return ( 
        <div>
         
            <form>
            <h1>LOG IN</h1>
                <label><b>Username</b> &nbsp;
                    <input type="text" placeholder="Enter your username" required />
                </label><br></br><br></br>
                <label><b>Password</b> &nbsp;
                    <input type="password" placeholder="Enter Password(min 4characters)" />
                </label><br></br><br></br>
                
               
                <Link to={`/home`}>
                <input type="submit" />
             </Link><br></br><br></br>
                    
                    <div>
                        <div>Don't have an Account ? <a href="/signup"> <span className='link'>Sign Up Here</span> </a> </div>
                    </div>
                </form>
        </div>
     );
}
 
export default LogIn;