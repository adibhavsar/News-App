import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

function NavBar() {
  // eslint-disable-next-line
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <ul>
          <Link style={{textDecoration:"none"}} to='/' ><li style={{fontSize:"20px", padding:"0px 10px 0px 10px"}}>News App</li></Link>
           <Link style={{textDecoration:"none"}} to='/' ><li>Home</li></Link>
           <Link style={{textDecoration:"none"}} to='/about' ><li>About Us</li></Link>
           <Link style={{textDecoration:"none"}} to='/contact' ><li>Contact Us</li></Link>
           
           {/* <button onClick={()=>navigate(window.history.back())}>Back</button> */}
        </ul>
        <p>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
    </div>
  )
}
export default NavBar;
