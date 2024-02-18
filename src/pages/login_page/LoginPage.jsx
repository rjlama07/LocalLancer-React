import React from 'react'

import './LoginPage.css'
import logo from '../../assets/logo.png'
import cover from '../../assets/cover.png'

const LoginPage = () => {
  return (
    <div className='main_div'>
        <div className='banner'>
        <img src={cover} alt="" className='logo' />
        </div>
        <div className='login'>
            <img src={logo} alt="" className='logo' />
            <p>Login with Your Username & Password to Log <br/>into your Account and start exploring work<br/>opportunities today!</p>
            <form>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
            </form>
            <div className='rememberme'>
                <input type="checkbox" id='remember' />        
                <label htmlFor="remember">Remember me</label>
               </div>

        </div>

      
    </div>
  )
}

export default LoginPage
