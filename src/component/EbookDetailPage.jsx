import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import EbookOverview from './EbookOverview'
import EbookReview from './EbookReview'
import Bookdetails from './Bookdetails'
import { useParams } from 'react-router-dom'
import { ebookkids } from './EbookKidsdata'

const EbookDetailPage = () => {
  const { id } = useParams();
   console.log(id);
   const obj = ebookkids[id];
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
                    <span className=''>Ebook detail</span>
                  </p>
                  <h1>Ebook detail </h1>
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
          <h3 className='text-center mt-5'>Other Related ebooks</h3>
        <div className='ebookboxes'>
                
                    <div   className='ebookbox'>
                       <img src={obj.img} width={200} alt="" />
                       <p>{obj.price}</p>
                       <h6>{obj.heading}</h6>
                       <button  >View details</button>
                    </div>
              
               
              </div>
        
        <EbookReview/>
        <Footer/>
    </div>
  )
}

export default EbookDetailPage