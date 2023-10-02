'use client'
import React, { useState, useEffect } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

export default function Hero(events: any) {
    const [currentEvent, setCurrentEvent] = useState(0);

    const left = () => {
        if (currentEvent > 0) {
            setCurrentEvent(currentEvent - 1);
        }
    };

    const right = () => {
        if (currentEvent < 9) {
            setCurrentEvent(currentEvent + 1);
        }
    };

    useEffect(() => {
        const container = document.getElementById('Hero');
        const LeftArrow = document.getElementById('LeftArrowContainer');
        const RightArrow = document.getElementById('RightArrowContainer');

        if (container) {
            const scrollPosition = currentEvent * window.innerWidth;
            window.scrollTo({
                top: 0,
                left: scrollPosition,
                behavior: 'smooth'
            });
        }

        if (currentEvent == 0) {
            if (LeftArrow) {
                LeftArrow.style.display = 'none';
            }
            if (RightArrow) {
                RightArrow.style.display = 'flex';
            }
        }
        else if (currentEvent == 9) {
            if (LeftArrow) {
                LeftArrow.style.display = 'flex';
            }
            if (RightArrow) {
                RightArrow.style.display = 'none';
            }
        }
        else {
            if (LeftArrow) {
                LeftArrow.style.display = 'flex';
            }
            if (RightArrow) {
                RightArrow.style.display = 'flex';
            }
        }
    }, [currentEvent]);

    return ( 
        <div id="Hero">
            <div id="HeroContainer">
                <div id="EventListContainer">
                    <div id="LeftArrowContainer" onClick={left}>
                        <BsArrowLeftShort id="LeftArrow" />
                    </div>
                    {events.events.map((event: any) => (
                        <div id='Event' key={event.id}>
                            <div id="ImageContainer">
                                <img id='Image' src={event.img} />
                            </div>
                            <div id="EventInfo">
                                <div id="EventName">
                                    <p id="Name">{event.title}</p>
                                </div>
                                <div id="EventAddress">
                                    <p id="Address">{event.address}</p>
                                </div>
                                <div id="EventLocation">
                                    <a id="LocationLink" href={`/events/${event.location}`}>Location - {event.location}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div id="RightArrowContainer"  onClick={right}>
                        <BsArrowRightShort id="RightArrow" />
                    </div>
                </div>
            </div>
        <style>
            {`
                #Hero {
                    display: flex;
                    position: relative;
                    width: 1000vw;
                    height: 80vh;
                    margin-top: 15vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    z-index: 2;
                }
                #HeroContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #EventListContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    align-items: center;
                }
                #LeftArrowContainer {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    height: 100px;
                    width: 100px;
                    cursor: pointer;
                }
                #RightArrowContainer {
                    display: none;
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    height: 100px;
                    width: 100px;
                    cursor: pointer;
                }
                #LeftArrow, #RightArrow {
                    height: 100%;
                    width: 100%;
                    color: white;
                }
                #Event {
                    display: flex;
                    position: relative;
                    width: 70vw;
                    height: 80vh;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                #ImageContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 50%;
                    justify-content: center;
                    align-items: center;
                }
                #Image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                #EventInfo {
                    display: flex;
                    position: relative;
                    width: 99%;
                    height: 50%;
                    flex-direction: column;
                    overflow-y: scroll;
                }
                #EventInfo::-webkit-scrollbar {
                    width: 5px;
                    background: transparent;
                }
                #EventInfo::-webkit-scrollbar-thumb {
                    background: grey;                
                }
                #EventName {
                    
                }
                #Name {
                    color: white;
                    font-size: 30px;
                    font-family: InterBold;
                }
                #EventAddress {

                }
                #Address {
                    color: white;
                    font-size: 12px;
                }
                #EventLocation {
                    
                }
                #LocationLink {
                    color: white;
                    font-size: 12px;
                }
            `}
        </style>
        </div>
    )
}