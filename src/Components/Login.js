// import {useNavigate} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'


const Login = () =>{
    const {loginUser} = useContext(AuthContext)

    return(
        <div className='login'>
            <form onSubmit={loginUser}>
                <div className="login-container">
                    <div className="container">
                        <label htmlFor="username"><b>Username</b></label>
                        <input type ="text" placeholder="Enter Username" name="username" required/>

                        <label htmlFor="password"><b>Password</b></label>
                        <input type ="password" placeholder="Enter Password" name="password" required/>

                        <input type="submit" value="Login"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login