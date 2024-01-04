import React from "react";


import Promo from "../components/Promo/Promo";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer/Footer'
import OrderImg from '../assets/orderConfirmation.png';

const OrderConfirmation = (props) => {

    //Todo: get the order number, date and amount from the params

    // const { number, date, amount } = props.order;
    let number = "BXDP12MO";
    let date = "2021-09-15";
    let amount = "CA$1000";


    return (
        <div className="order-confirmation-page" >
            <Promo />
            <Navbar />
            <div className="order-confirmation-container">
                <div className="order-confirmation-title-container">
                    <div className="order-confirmation-title">
                        CERAMICS
                    </div>
                    <div className="order-confirmation-text">
                        Order confirmation
                    </div>
                </div>
                <div className="order-confirmation-wrapper">

                    <div className="order-confirmation-info-container">
                        <div className="order-confirmation-info-title">
                            Thank you for your purchase!
                        </div>
                        <div className="order-confirmation-info-notice">
                            In a few minutes you will receive an email with the details of your order.
                        </div>

                        <hr className="order-confirmation-info-line"></hr>

                        <div className="order-confirmation-item">
                            <div className="order-confirmation-item-title">
                                Order number
                            </div>
                            <div className="order-confirmation-item-text">
                                {number}
                            </div>
                        </div>
                        <div className="order-confirmation-item">
                            <div className="order-confirmation-item-title">
                                Order date
                            </div>
                            <div className="order-confirmation-item-text">
                                {date}
                            </div>
                        </div>
                        <div className="order-confirmation-item">
                            <div className="order-confirmation-item-title">
                                Total amount
                            </div>
                            <div className="order-confirmation-item-text">
                                {amount}
                            </div>
                        </div>


                        <hr className="order-confirmation-info-line"></hr>

                        <div className="order-confirmation-info-notice">
                            We remind you that during sale and promotions, delivery times may be longer than usual.
                        </div>

                        <div className="order-confirmation-button-container">
                            <button className="order-confirmation-button">Discover the latest</button>
                        </div>
                    </div>
                    <div className="order-confirmation-image-container">
                        <img src={OrderImg} alt="order-confirmation" className="order-confirmation-image" />
                    </div>
                </div>


            </div>


            <Footer />
        </div>
    )
};

export default OrderConfirmation;
