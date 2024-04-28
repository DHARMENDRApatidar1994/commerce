import React, { useState } from 'react'
import "./LogIn.css"
import LogInImg from "../assets/images/JoinNowImg.gif"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { useNavigate } from 'react-router-dom'
import { BsEyeSlashFill } from 'react-icons/bs';
import { RiEyeFill} from 'react-icons/ri';

const LogIn = () => {
  const navigate = useNavigate();
  const [emailPlaceholder, setEmailPlaceholder] = useState('Enter your email');
  const [passwordPlaceholder, setPasswordPlaceholder] = useState('Enter your valid password');

  const handleLoginClick = (placeholderEmail, placeholderPassword) => {
    setEmailPlaceholder(placeholderEmail);
    setPasswordPlaceholder(placeholderPassword);
  };
  const [passwordVisible, setPasswordVisible] = useState(false); // Initialize password visibility state
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <Navbar/>
          <div className="LogIn">
                    <div className="log">
          <div className="logLeft">
                  <img src={LogInImg} alt="" />
          </div>
          <div className="logRight">
                    <div className="logTop">
                    <h3>Log in<span>!</span></h3>
                    <p>Explore, learn, and grow with us. enjoy a seamless and <br /> enriching educational journey. lets begin!</p>
                    </div>
                    <div className="logMedium">
                          <form>
                          <div className="one">
                                        <label>Your email</label>
                                        <div className="int">
                                        <i class="ri-user-fill"></i>        
                                        <input type="text" placeholder={emailPlaceholder} required />
                                        </div>
                          </div>
                          <div className="one">
                                        <label>Password</label>
                                        <div className="int">
                                        <i class="ri-git-repository-private-fill"></i>     
                                        <input
                type={passwordVisible ? "text" : "password"} // Set input type based on passwordVisible state
                placeholder={passwordPlaceholder} required
              />
              <span onClick={togglePasswordVisibility}>
                {passwordVisible ? <BsEyeSlashFill /> : <RiEyeFill />} {}
              </span>
                                        </div>
                          </div>
                          <div className="forgot ">
                              <a onClick={()=>{
                      
                      navigate("/forgetPassword")
                    }}>Forgot password?</a>
                          </div>
                          <div className="one">
                                  <button>Log in</button>
                          </div>
                          </form>
                    </div>
                    <div className="logBottom">
                              <div className="btm">
                                  <h3>Login as-</h3>
                                  <div className="btns">
                                    <button onClick={() => handleLoginClick('student@example.com', 'student_password')}>Student</button>
                                    <button onClick={() => handleLoginClick('admin@example.com', 'admin_password')}>Admin</button>
                                    <button onClick={() => handleLoginClick('instructors@example.com', 'instructors_password')}>Instructors</button>
                                  </div>
                                  <p >Don't have an account? <a className='text-primary' onClick={()=>{
                      
                      navigate("/JoinNow")
                    }}>Sign up</a></p>
                                  <h6>_______________________or_______________________</h6>
                                  <button><i class="ri-facebook-circle-fill"></i> Continue with facebook</button>

                              </div>
                    </div>
          </div>
          
          
          
          
          </div>
          </div>
          <Footer/>
    </div>
  )
}

export default LogIn