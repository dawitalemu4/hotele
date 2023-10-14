'use client'
import React, { useState, useEffect } from 'react';
import AddToCart from './AddToCart';
import Cart from './Cart';
import Checkout from './Checkout';

export default function Modal( hotel: any ) {

    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [cartLength, setCartLength] = useState(0);

    const handleCartModal = (cartLength: number) => {
        if (cartLength > 0) {
            setCartLength(cartLength);
            setShowCart(true);
        } else {
            setCartLength(0)
            setShowCart(false);
        }
    }

    const showCheckoutModal = () => {
        setShowCheckout(true);
    }

    const closeCheckoutModal = () => {
        setShowCheckout(false);
    }

    useEffect(() => {

        const cart = localStorage.getItem('cart');
        if (cart) {
            const cartArray = JSON.parse(cart);
            setCartLength(cartArray.length);
            handleCartModal(cartArray.length);
        } else {
            setCartLength(0);
            handleCartModal(0);
            setShowCart(false);
        }

    }, [cartLength]);

    return (
        <div>
            <AddToCart hotel={hotel} changeCartState={(cartLength) => handleCartModal(cartLength)} />
            {showCart && <Cart showCheckout={showCheckoutModal} cartLength={cartLength} />}
            {showCheckout && <Checkout updateCart={(cartLength) => handleCartModal(cartLength)} closeCheckout={closeCheckoutModal} />}
        </div>
    )
}