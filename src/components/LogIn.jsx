import { Link } from 'react-router-dom'
import '../styles/Input.css'

const Login = () => {

    const SignUp = {
        Container: {
            width:'80%',
            height:'calc(100vh - 60px)',
            margin:'auto',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            overflow:'scroll',
            overflowX:'hidden',
        },
        Form: {
            height:'fit-content',
            width:'400px',
            margin:'20px 20px 20px',
            background:'whitesmoke',
            padding:'20px 50px 20px',
            boxShadow:'2px 2px 5px 1px #0003',
            borderRadius:'20px',
            backgroundImage:'linear-gradient(to bottom,whitesmoke,#fff)'
        }
    }
    return(

    <>
    <div style={SignUp.Container} className="input-scroller row">
    <form style={SignUp.Form} className="col s6">

       <div className="input-field col s12">
          <input id="username" type="text" className="validate" />
          <label htmlFor="username">username</label>
        </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>


      <div className="row">
        <button style={{width:'200px'}}  className="teal white-text waves-light">Login</button>
        <div style={{color: 'grey', marginTop:'7px'}}>
            <span>create new account | </span>
            <Link to={'/register'}>register</Link>
        </div>
      </div>
    </form>
  </div>
    </>

    )
}

export default Login