import React from 'react'
import "./ForgotPas.css"
import ForgotImg  from "../assets/Images/ForgotImg.gif"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const ForgotPas = () => {
  return (
    <div>
      <Navbar/>
           <div className="ForgotPas">
                <div className="Forgot">
                
                <div className="ForgotLeft">
                  <img src={ForgotImg} alt="" />
                </div>
                <div className="ForgotRight">
                        <div className="Top">
                              <h3>Forgot password<span>!</span></h3>
                              <p>Explore, learn, and grow with us. enjoy a seamless and <br /> enriching educational journey. lets begin!</p>
                        </div>
                        <div className="Medium">
                              <form>  
                                  <div className="one">
                                        <label>Your email</label>
                                        <div className="int">
                                        <i class="ri-user-fill"></i>        
                                        <input type="text" placeholder="Enter your email" required />
                                        </div>
                                  </div>
                                  <div className="one">
                                  <button><a href="/">Sign Up</a></button>
                                  </div>
                                  <div className="one">
                                  <button><a href="/"><i class="ri-arrow-left-s-line"></i>Back to login</a></button>
                                  </div>
                              </form>
                        </div>
                       
                </div>


</div>
</div>
<Footer/>
</div>
  )
}

export default ForgotPas