import React from 'react'
import "./CoursesOverview.css"
import CourseOverviewJohnImg from "../assets/Images/CourseOverviewJohnImg.jpg"
import CourseOverviewI1 from "../assets/Images/CoverviewIcon1.png"
import CourseOverviewI2 from "../assets/Images/CoverviewIcon2.png"
import CourseOverviewI3 from "../assets/Images/CoverviewIcon3.png"
import CourseOverviewI4 from "../assets/Images/CoverviewIcon4.png"
import Navbar from './Navbar'
import Footer from './Footer'
import { useParams } from 'react-router-dom'
import { gallery } from './HomeCourseData'





const TopCourseOverview = () => {
   // const [item, setItem] = useState(gallery)
   // const navigate = useNavigate();
   const { id } = useParams();
   console.log(id);
   const obj = gallery[id];
  return (
    <div>
      <Navbar/>
          <div className="CoursesOverview">
            <div className="CoursesOver">
               
               <div className="CourTop">
               <div className="CourTopLeft">
                    {/* <h3>The Data Science Course: Complete Data Science</h3> */}
                    <h3>{obj.title}</h3>
                    <p>{obj.pera}</p>
                    <div className="atara">
                              <div className="one">
                                        <img src={CourseOverviewJohnImg} alt="" />
                                        <h6>Created by</h6>
                                        <h5>Mathew Anderson</h5>
                              </div>
                              <div className="one">
                                        <h6><i class="ri-time-line"></i>00:00:00 Hours</h6>
                              </div>
                              <div className="one">
                                        <h6><i class="ri-user-line"></i>0 Enrolled</h6>
                              </div>
                              <div className="one">
                                        <h6><i style={{color:"yellow"}} class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i>(0 Reviews)</h6>
                              </div>
                    </div>
                    <div className="end">
                            <h1>English</h1>  
                            <h2><span>Last updated</span> <small>Thu, 13-Jul-2023</small></h2>
                    </div>
               </div>
               <div className="CourTopRight"></div>
               </div>
               {/* -------- */}
               <div className="CourBtm">
                    <div className="CourBtmLeft">
                        <div className="CourBtmLeftTop">
                              <h5><a href="/"><i class="ri-bookmark-line"></i> <span>Overview</span></a></h5>
                              <h5><a href="/"><i class="ri-article-line"></i> <span>Curriculum</span></a></h5>
                              <h5><a href="/"><i class="ri-user-line"></i> <span>Instructor</span></a></h5>
                              <h5><a href="/"><i class="ri-message-fill"></i> <span>Reviews</span></a></h5>
                        </div>
                        <div className="CourBtmLeftBtm">
                              <h2>Course description</h2>
                              <p>The horse is a large, strong, and elegant mammal with a long, flowing mane and tail. It is known for its speed, agility, and intelligence, making it a popular animal for riding, racing, and farm work. Horses have long, slender legs with hooves, which enable them to run at high speeds and jump over obstacles. They come in a wide variety of colors and breeds, and have a strong social hierarchy within their herds. </p>
                              <h3>What will i learn?</h3>
                              <h4>Requirements</h4>
                        </div>
                    </div> 
                    <div className="CourBtmRight">
                           <div className="one">
                              <img src={obj.img} alt="" /></div>  
                           <div className="two">
                              <h3>Free </h3>
                              <img  src="https://demo.creativeitem.com/academy/assets/frontend/default-new/image/compare.png" alt="" />
                           </div>
                           <div className="three">
                              <div className="line">
                                        <h6><img src={CourseOverviewI1} alt="" /> Lecture</h6>
                                        <p>0</p>
                              </div>
                              <div className="line">
                              <h6><img src={CourseOverviewI2} alt="" /> Skill level</h6>
                                        <p>Advanced</p>
                              </div>
                              <div className="line">
                              <h6><img src={CourseOverviewI3} alt="" /> Expiry period</h6>
                                        <p>Lifetime</p>
                              </div>
                              <div className="line">
                              <h6><img src={CourseOverviewI4} alt="" /> Certificate</h6>
                               <p>Yes</p>
                              </div>
                           </div>
                           <div className="four">
                              <button>Enroll now</button>
                           </div>
                    </div> 
               </div>
               
</div>
</div>
<Footer/>
</div>
  )
}

export default TopCourseOverview