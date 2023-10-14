'use client'
import React, { useState } from 'react';

interface AddToCartProps {
    hotel: any;
    changeCartState: (cartLength: number) => void;
}

const AddToCart: React.FC<AddToCartProps> = ({ hotel, changeCartState }) => {

    const [showWarning, setShowWarning] = useState(false);

    const addToCart = (hotel: any) => {
        const cart = localStorage.getItem('cart');
        const cartArray = cart ? JSON.parse(cart) : [];
        const found = cartArray.find((item: any) => item.id === hotel.id);
        if (found) {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 2000);
            return;
        }
        cartArray.push(hotel);
        localStorage.setItem('cart', JSON.stringify(cartArray));
        changeCartState(cartArray.length);
    }

    return (
        <div id="AddToCart">
            <div id="AddToCartContainer">
                <p id="Price">Starting at ${hotel.hotel.price} per night - <a id='AddToCartButton' onClick={() => addToCart(hotel.hotel)}>Add To Cart</a></p>
            </div>
            {showWarning ? 
            (
                <div id="Warning">
                    <p id="WarningText">You have already added this hotel to your cart!</p>
                </div>
            ) 
            : 
                null
            }
            <style>
                {`
                    #AddToCartButton {
                        color: white;
                        font-size: 15px;
                        font-family: InterBold;
                        cursor: pointer;
                        border-bottom: 1px solid white;
                    }
                    #Price {
                        color: white;
                        font-size: 15px;
                        font-family: InterBold;
                    }
                    #Warning {
                        display: flex;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 99%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        font-size: 20px;
                        background-color: rgba(0, 0, 0, 0.85);
                    }
                `}
            </style>
        </div>
    );
}

export default AddToCart;