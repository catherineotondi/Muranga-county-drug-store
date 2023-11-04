import { Link } from 'react-router-dom';

const SignUp = () => {
    return ( 
        <>

                <form>
                    <h1>SIGN UP</h1>
                    <label><b>Username</b> &nbsp;
                        <input type="text"  name="username" placeholder="Pick a username" required />
                    </label><br></br><br></br>
                    
                    <label><b>Password</b> &nbsp;
                        <input type="password"  name="password" placeholder="Enter Password " required /><br></br>
                </label><br></br>
                <label><b>Confirm Password</b> &nbsp;
                        <input type="password"  name="password_confirmation" placeholder="Confirm Password" required /><br></br>
                    </label><br></br><br></br>
                 
                <Link to={`/Login`}>
                    <input type="submit" onClick={() => alert(" You can now log in to view Drugs in store")} />
                </Link>
                <br></br><br></br>
                    
                        <div> Have an Account? <a  href="/login"> <span className='link'> Log In </span></a> </div>
                </form>
        

          
        </>

        
     );
}
 
export default SignUp;