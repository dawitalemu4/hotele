'use client'
import React, { useState, useEffect } from 'react';
import AddToCart from './AddToCart';
import Cart from './Cart';
import Checkout from './Checkout';

export default function Modal( hotel: any ) {

    const [showCart, setShowCart] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);
    const [cartLength, setCartLength] = useState(0);

    const showCheckoutModal = () => {
        setShowCheckout(true);
    }

    const closeCheckoutModal = () => {
        setShowCheckout(false);
    }

    useEffect(() => {

        const cart = localStorage.getItem('cart');
        const cartArray = cart ? JSON.parse(cart) : [];
        setCartLength(cartArray.length);

        if (cartArray.length > 0) {
            setShowCart(true);
        } else {
            setShowCart(false);
        }

    }, []);

    return (
        <div>
            <AddToCart hotel={hotel} />
            {showCart && <Cart showCheckout={showCheckoutModal} cartLength={cartLength} />}
            {showCheckout && <Checkout closeCheckout={closeCheckoutModal} />}
        </div>
    )
}