import { useEffect, useRef } from "react"
import './styles/Header.css'

import {Link} from 'react-router-dom'

import M from "materialize-css"
import icon_sidebar from './assets/sidebar.svg'
const Header = () => {
    const MoblieSidenav = useRef()

    useEffect(() => {
        M.Sidenav.init(MoblieSidenav.current)
    })

    function handleSideNav() {
      var instance = M.Sidenav.getInstance(MoblieSidenav.current)
      instance.close()
    }

    return <>
     <nav>
    <div className="nav-wrapper teal">
      <span className="brand-logo center"><Link to={'/'}>KhataOk.com</Link></span>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><img style={{borderRadius: '20%',margin:'5px',padding: '12px 18px 12px', backgroundColor:'white'}} height={'80%'} src={icon_sidebar} alt="sidebar" /></a>
      <ul className="right hide-on-med-and-down black-text">

        <li ><Link to={'/'} >Home</Link></li>
        <li ><Link to={'/login'} >Log In</Link></li>
        <li  ><Link to={'/register'} >start</Link></li>
        </ul>
    </div>
  </nav>

  <ul ref = {MoblieSidenav} className="sidenav" id="mobile-demo">
    <h3 style={{textAlign:'center',width:'80%',margin:'20px auto'}}>KhataOk</h3>
    <p style={{width:'80%',margin:'auto',color:'teal',textAlign:'left'}}>accounting services to help your business</p>
        <li onClick={handleSideNav} ><Link to={'/'} >Home</Link></li>
        <li onClick={handleSideNav}><Link to={'/login'} >Log In</Link></li>
        <li onClick={handleSideNav}><Link to={'/register'} >start</Link></li>
  </ul>
          
    </>
}

export default Header