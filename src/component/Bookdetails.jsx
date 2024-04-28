import React from 'react'
import "./Bookdetails.css"

const Bookdetails = () => {
    return (
        <div>
            <div className='bookmain'>
                <div className='bookcontent'>
                    <div className='bookdiv'>
                        <h6>You too win</h6>
                        <div className='bookline'></div>
                        <h5>Created by <span className='text-primary'>John Doe</span></h5>
                        <h5>Publication name Isaac Asimov</h5>
                        <h5>Published date : Tue, 08-Feb-2022</h5>
                        <h5>Category name : Kids</h5>
                        <div className='bookbtn'>
                            <button>Read preview</button>
                            <button>Buy now</button>
                        </div>
                    </div>
                </div>
                <div className='summ'>
                    <h4 className='text-primary'>Summary</h4>
                    <h4>Specification</h4>
                    <h4>Review</h4>
                </div>
                <div className='bookhr'><hr /></div>

                <div className='booklast'>
                    <div className='bookyou'>
                        <h5>You too win</h5>
                        <p className='mt-5'>Flap Writing <br /> Shiv Khera `Qualified Learning Systems Inc. Founder of U.S.A. He is an educator, professional business advisor, highly sought after speaker and successful employer. Shiva Khera has so many identities. <br />
                            He has helped different people to know and inspire their true latent potential. He has spread his progressive message around the world. From Singapore to India. His common sense and deep faith have inspired countless people to re-evaluate their point of view. His long twenty years of research, talent and experience have helped different people in their personal development and perfection.</p>
                        <div className='bookp'>
                            <h6>Index</h6>
                            <p className='mt-1'>* The Importance of Attitude: Creating a Positive Attitude </p>
                            <p>* Success: The Key to Success </p>
                            <p>* Motivation: How to inspire yourself and others every day </p>
                            <p>* Self-esteem: Positive self-esteem and image formation </p>
                            <p>* Personality Skills: Ways to Build a Happy Personality </p>
                            <p>* Subconscious mind and habits: Positive habits and character formation </p>
                            <p>* Goal setting: Goal setting and goal setting </p>
                            <p>* Values ​​and Imagination Planning: Doing the right thing for the right purpose </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Bookdetails