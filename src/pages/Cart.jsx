import React, { useState } from 'react'
import "./Cart.css"
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
// import { ebookkids } from '../component/EbookKidsdata'
import { useCart } from 'react-use-cart'

const Cart = () => {
  const { isEmpty, totalUniqueItems,items, totalItems,cartTotal,updateItemQuantity,
    removeItem,emptyCart, } = useCart();
    // if(isEmpty) return <h2>Your Cart Is Empty</h2>
    

    

    
    return (
        <div>
            <Navbar />
            <div className="COURSEBUNDLE">
          <div className="CourseBundle">
            <div className="CourseBundleTop">
              <div className="Top">
                <div className="text">
                  <p className='w-100 d-flex align-items-center'>
                    <a href="/">
                      <i className="ri-home-3-fill"></i> Home
                    </a>
                    <i
                      style={{ fontSize: "2vmax" }}
                      className="ri-arrow-right-s-line"
                    ></i>
                    <span className=''>Shopping cart</span>
                  </p>
                  <h1>Shopping cart </h1>
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
            <div className='cartmain'>
                <div className='cartfisrt'>
                    <div className='cartleft'>
                        <h4>Your cart items</h4>
                        <div className='cartdis'>
                            <h6>Items</h6>
                            <h6>Price</h6>
                        </div>
                        <div className='cartline'></div>
                        
                        <div>
        <div>
            <h5>Cart ({totalUniqueItems}),totalItems:({totalItems})</h5>
            <table className='table table-light table-hover m-0'>
                <tbody>
                    {items.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height:'6rem'}} alt="" />
                                </td>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>Quantity ({item.quantity})</td>
                                <button onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <button onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                <button onClick={()=>removeItem(item.id)}>Remove Item</button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div>
            <h2>Total Amount: {cartTotal}</h2>
        </div>
        <div>
            <button onClick={()=>emptyCart()}>Clear Cart</button>
            <button className='btn btn-primary'>Buy Now</button>
        </div>
       
    </div>
                    </div>
                    <div className='cartright'>
                        <h6>Total</h6>
                        <div className='cartdol'>
                            <p>Subtotal</p>
                            <h6>$0</h6>
                        </div>
                        <div className='cartdol'>
                            <p>Subtotal</p>
                            <h6>$0</h6>
                        </div>
                        <input type="text" placeholder='Apply coupon' />
                        <button>Apply</button>
                        <div className='check'>
                            <input type="checkbox" />
                            <p>Send as a gift</p>
                        </div>
                        <div className='cartemail'>
                            <input type="text" placeholder='Email Address' />
                        </div>
                        <div className='cartbutton'>
                            <button>Continue to payment</button>
                        </div>

                    </div>
                </div>

               
            </div>
           
            <Footer/>
        </div>
    )
}

export default Cart