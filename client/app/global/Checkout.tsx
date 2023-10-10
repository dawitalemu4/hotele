'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface CheckoutProps {
    closeCheckout: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ closeCheckout }) => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getTotalPrice = () => {
        const cart = localStorage.getItem('cart');
        const cartArray = cart ? JSON.parse(cart) : [];
        let total = 0;

        cartArray.forEach((item: any) => {
            total += item.price;
        });

        setTotalPrice(total);
    }

    const setItems = () => {
        const cart = localStorage.getItem('cart');
        const cartArray = cart ? JSON.parse(cart) : [];
        setCart(cartArray);
        getTotalPrice();
    }

    const removeItem = (index: number) => {
        const cart = localStorage.getItem('cart');
        const cartArray = cart ? JSON.parse(cart) : [];

        if (cartArray.length <= 1) {
            localStorage.removeItem('cart');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            const updatedCart = cartArray.filter((item: any) => item.id !== index);
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }

        setItems();
        getTotalPrice();
    }

    useEffect(() => {

        setItems();

    }, []);

    return (
        <div id='Checkout'>
            <div id="Exit" onClick={closeCheckout}>
                <AiOutlineClose id="ExitIcon" onClick={closeCheckout} />
            </div>
            <div id="CheckoutContainer">
                <div id="CheckoutHeaderContainer">
                    <p id="CheckoutHeader">Checkout</p>
                </div>
                <div id="CheckoutItemsContainer">
                    {cart.length === 0 ? 
                        ( 
                            <div id="CheckoutEmptyContainer">
                                <p id="CheckoutEmpty">Your cart is empty.</p>
                            </div> 
                        )
                    :
                        ( 
                            cart.map((item: any) => (
                                <div id="CheckoutItem" key={item.id}>
                                    <div id="CheckoutItemInfoContainer">
                                        <p id="CheckoutItemName">{item.title}</p>
                                        <p id="CheckoutItemPrice">${item.price}</p>
                                    </div>
                                    <div id="CheckoutItemRemoveContainer">
                                        <p id="CheckoutItemRemove" onClick={() => removeItem(item.id)}>Remove</p>
                                    </div>
                                </div>
                            )) 
                        )
                    }
                </div>
                <div id="TotalPriceContainer">
                    <p id="TotalPrice">Total: ${totalPrice}</p>
                </div>
            </div>
            <style>
                {`
                    #Checkout {
                        display: flex;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        justify-content: center;
                        align-items: center;
                        border-radius: 10px;
                        background-color: rgba(0, 0, 0, 0.7);
                        cursor: pointer;
                        z-index: 10;
                    }
                    #Exit {
                        display: flex;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                    }
                    #ExitIcon {
                        display: flex;
                        position: fixed;
                        top: 30px;
                        left: 30px;
                        font-size: 40px;
                        color: white;
                        cursor: pointer;
                        z-index: 12;
                    }
                    #CheckoutContainer {
                        display: flex;
                        position: relative;
                        width: 70%;
                        height: 80%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        border-radius: 10px;
                        background-color: white;
                        cursor: default; 
                        z-index: 13;
                    }
                    #CheckoutHeaderContainer {
                        display: flex;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #CheckoutHeader {
                        font-size: 30px;
                        font-family: InterBold;
                    }
                    #CheckoutItemsContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 70%;
                        flex-direction: column;
                        align-items: center;
                        overflow-y: scroll;
                    }
                    #CheckoutItemsContainer::-webkit-scrollbar {
                        width: 10px;
                        background-color: transparent;
                    }
                    #CheckoutItemsContainer::-webkit-scrollbar-thumb {
                        background-color: #c4c4c4;
                        border-radius: 10px;
                    }
                    #CheckoutItem {
                        display: flex;
                        position: relative;
                        width: 80%;
                        height: 20%;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px solid black;
                    }
                    #CheckoutItemRemoveContainer {
                        display: flex;
                        position: relative;
                        width: 20%;
                        height: 100%;
                        justify-content: center;
                        align-items: center;
                    }
                    #TotalPriceContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                    }
                    #CheckoutItemName {
                        font-size: 18px;
                        font-family: InterSemi;
                        overflow-x: scroll;
                    }
                    #CheckoutItemName::-webkit-scrollbar {
                        display: none;
                    }
                    #TotalPrice {
                        font-size: 25px;
                        font-family: InterBold;
                    }
                    #CheckoutEmptyContainer {
                        display: flex;
                        position: relative;
                        width: 90%;
                        height: 100%;
                        font-size: 20px;
                        font-family: InterSemi;
                        justify-content: center;
                        align-items: center;
                    }

                    #CheckoutItemRemove { cursor: pointer; }
                `}
            </style>
        </div>
    )
}

export default Checkout;