import {Route,Routes} from 'react-router-dom'
import SignUp from '../components/SignUp'
import App from '../App'
import Login from '../components/LogIn'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/'  element ={<App/>}></Route>
            <Route path='/login' element = {<Login/>}></Route>
            <Route path='/register' element = {<SignUp/>}></Route>
        </Routes>
    )
}

export default AppRoutes