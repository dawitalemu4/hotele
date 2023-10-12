'use client'
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface CartProps {
    showCheckout: () => void;
    cartLength: number;
}

const Cart: React.FC<CartProps> = ({ showCheckout, cartLength }) => {

    return (
        <div id="Cart" onClick={showCheckout}>

            <div id="CartCount">{cartLength}</div>
            
            <div id="CartContainer">
                <AiOutlineShoppingCart id="CartIcon" />
            </div>

            <style>
                {`
                    #Cart {
                        display: flex;
                        position: fixed;
                        bottom: 20px;
                        left: 20px;
                        width: 70px;
                        height: 70px;
                        background-color: grey;
                        justify-content: center;
                        align-items: center;
                        border-radius: 50%;
                        cursor: pointer;
                        z-index: 3;
                    }
                    #CartCount {
                        display: flex;
                        position: absolute;
                        top: -6px;
                        right: -3px;
                        width: 25px;
                        height: 25px;
                        background-color: white;
                        color: black;
                        font-size: 15px;
                        font-family: InterBold;
                        border-radius: 50%;
                        justify-content: center;
                        align-items: center;
                    }
                    #CartIcon { font-size: 35px; }
                `}
            </style>
        </div>
    );
}

export default Cart;