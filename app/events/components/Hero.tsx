import React from 'react';

export default function Hero(events: any) {
    
    console.log(events);

    return ( 
        <div id="Hero">
            <div id="HeroContainer">
                {events.events.map((event: any) => (
                    <div id='' key={event.id}>
                        <p>{event.title}</p>
                    </div>
                ))}
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