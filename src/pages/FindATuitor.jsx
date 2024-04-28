import React from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Bookdetails from '../component/Bookdetails'
import EbookReview from '../component/EbookReview'

const FindATuitor = () => {
  return (
    <div>
         <Navbar/>
         <div className="COURSEBUNDLE">
          <div className="CourseBundle">
            <div className="CourseBundleTop">
              <div className="Top">
                <div className="text">
                  <p className='w-100'>
                    <a href="/">
                      <i className="ri-home-3-fill"></i> Home
                    </a>
                    <i
                      style={{ fontSize: "2vmax" }}
                      className="ri-arrow-right-s-line"
                    ></i>
                    <span className=''>List of tuitions</span>
                  </p>
                  <h1>List of tuitions </h1>
                </div>
                <div className="Book">
                  <img
                    src="https://demo.creativeitem.com/academy/assets/frontend/default-new/image/brd-book.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Bookdetails/>
        <EbookReview/>
       
        <Footer/>
    
    </div>
  )
}

export default FindATuitor