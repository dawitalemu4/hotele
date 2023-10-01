import React from 'react';

export default function Hero(location: any) {

    return ( 
        <div id="Hero">
            <div id="HeroContainer">
                <p>{location.location.title}</p>
            </div>
        <style>
            {`
                #Hero {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                #HeroContainer {}
                p {
                    color: red;
                }
            `}
        </style>
        </div>
    )
}