import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import Navbar from '../components/Navbar';
import Promo from '../components/Promo/Promo';
import Footer from '../components/Footer/Footer';

import verticalLine from '../assets/line.svg';

const MyCart = () => {

    const {user} = useAuthContext();
  return (
    <div className='page-container'>
       <Promo/>
       <Navbar/>
       {!user && 
         <div className='cart'>
            <h2>Check out all our elegant ceramics</h2>
            <h5 className='page-subtitle'>Home Décor</h5>
              product 1 component goes here
            <h5 className='page-subtitle'>DRINK SET</h5>
              product 2 component goes here 
            <h5 className='page-subtitle'>TABLEWARE</h5>
            product 3 component goes here
           
         </div>  
         
       }
       {user && 
        <div className='cart'>
             <h2>My Cart</h2>
             <div className="cart-top">
                <div className="delivery-info">
                    <form >
                        <h3>Contact</h3>
                        <div className="input-wrap">
                            <span>Email</span>
                            <input type="email" id="email"/>
                        </div>

                        <h3>Delivery</h3>
                        <div className="row-wrap">
                            <div className="input-wrap">
                                <span>First Name</span>
                                <input type="text" id="firstname" />
                            </div>
                        
                            <div className="input-wrap">
                                <span>Last Name</span>
                                <input type="text" id="lastname" />
                            </div>
                        </div>
                        
                       
                        <div className="input-wrap">
                            <span>Country</span>
                            <input type="text" id="country" />
                        </div>
                       
                   
                        <div className="input-wrap">
                            <span>Address</span>
                            <input type="text" id="address" />
                        </div>
                        
                        <div className="row-wrap">
                            <div className="input-wrap">
                                <span>City</span>
                                <input type="text" id="city" />
                            </div>
                            
                            <div className="input-wrap">
                                <span>Post Code</span>
                                <input type="text" id="postcode" />
                            </div>
                        </div>
                        
                        
                        <div className="input-wrap">
                            <span>Phone</span>
                            <input type="text" id="phone" /> 
                        </div>
                       
                        
                        <h3>Shipping method</h3>
                        <label><input type="radio" name="radio"/>Standard shipping</label>
                        <label><input type="radio" name="radio" checked="checked" />Express shipping</label>

                    </form>
                </div>
                <div className="center-line" ><img src={verticalLine } alt="center-line" /></div>
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="orders">
                          <p>THE INFO FOR THIS AREA WILL NEED CONNECT TO DATABASE AND STRIPE </p>
                    </div>
                    <button className='btn' >Check  Out</button>
                </div>
            </div>

            <div className="cart-bottom">

                 <div className="payment-section">
                   <h3>Payment Details</h3>
                    <div className="stripe-payment-form">
                        <p>THE INFO FOR THIS AREA WILL BE PASRSED FROM STRIPE </p>

                    </div>
                 </div>
                 
                 <div className="order-summary">
                    
                    <div className="publicity">
                         <h2>BOXING DAY</h2>
                         <h4>SPECIAL PRICE WITH </h4>
                         <h4>PROMOTION CODE</h4> 
                         <h4><span style={{color:'#FFC107'}}>"BOXINGCREAMICS"</span>.</h4> 
                         <h4>LIMITED OFFER ONLY FOR </h4>
                         <h3><span style={{color:'var(--black-color)', fontWeight:'bold'}}>FIRST 200 ORDERS!!</span></h3>
                    </div>
                   
                </div>

            </div>

         </div>  
       }
       
       <Footer/>
     </div> 
  )
}

export default MyCart