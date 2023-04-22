import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import Marquee from 'react-fast-marquee';



function NavBar() {
  // eslint-disable-next-line
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <ul>
           <Link style={{textDecoration:"none"}} to='/' ><li style={{fontSize:"20px", padding:"0px 10px 0px 10px"}}>News App</li>&nbsp;&nbsp;</Link>
           <Link style={{textDecoration:"none"}} to='/' ><li>Home</li>&nbsp;&nbsp;</Link>
           <Link style={{textDecoration:"none"}} to='/about' ><li>About Us</li>&nbsp;&nbsp;</Link>
           <Link style={{textDecoration:"none"}} to='/Contact' ><li>Contact Us</li>&nbsp;&nbsp;</Link>
           
           {/* <button onClick={()=>navigate(window.history.back())}>Back</button> */}
        </ul>
        <div class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/1.png" alt="breaking" width="800" height="150"  />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/2.png" alt="business" width="800" height="150" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/3.png" alt="entertainment" width="800" height="150" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/4.png" alt="technology" width="800" height="150" />
                </div>
                {/*<div className="mx-4 w-25">
                  <img src="images/health.png" alt="health" width="700"="300" height="250" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/sports.png" alt="sports" width="700"="350" height="250" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/tech.png" alt="tech" width="700"="300" height="250" />
  </div>*/}
              </Marquee>
            </div>
          </div>
        </div>
  </div>
      </div>
  )
}
export default NavBar;
