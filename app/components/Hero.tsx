'use client'
import React, { useState, useEffect } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

export default function Hero(hotels: any) {
    const [currentHotel, setCurrentHotel] = useState(0);

    const left = () => {
        if (currentHotel > 0) {
            setCurrentHotel(currentHotel - 1);
        }
    };

    const right = () => {
        if (currentHotel < 3) {
            setCurrentHotel(currentHotel + 1);
        }
    };

    useEffect(() => {
        const container = document.getElementById('Hero');
        const LeftArrow = document.getElementById('LeftArrowContainer');
        const RightArrow = document.getElementById('RightArrowContainer');

        if (container) {
            const scrollPosition = currentHotel * window.innerWidth;
            window.scrollTo({
                top: 0,
                left: scrollPosition,
                behavior: 'smooth'
            });
        }

        if (currentHotel == 0) {
            if (LeftArrow) {
                LeftArrow.style.display = 'none';
            }
            if (RightArrow) {
                RightArrow.style.display = 'flex';
            }
        }
        else if (currentHotel == 3) {
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
    }, [currentHotel]);

    return ( 
        <div id="Hero">
            <div id="HeroContainer">
                <div id="HotelListContainer">
                    <div id="LeftArrowContainer" onClick={left}>
                        <BsArrowLeftShort id="LeftArrow" />
                    </div>
                    {hotels.hotels.map((hotel: any) => (
                        <div id='Hotel' key={hotel.id}>
                            <div id="ImageContainer">
                                <img id='Image' src={hotel.img} />
                            </div>
                            <div id="HotelInfo">
                                <div id="HotelName">
                                    <a id="Name" href={`/${hotel.id}`}>{hotel.title}</a>
                                </div>
                                <div id="HotelAddress">
                                    <p id="Address">{hotel.address} - <a id="LocationLink" href={`/events/${hotel.location}`}>{hotel.location}</a></p>
                                </div>
                                <div id="HotelDescription">
                                    <p id="Description">{hotel.description}</p>
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
                    width: 400vw;
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
                #HotelListContainer {
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
                #Hotel {
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
                #HotelInfo {
                    display: flex;
                    position: relative;
                    width: 99%;
                    height: 45%;
                    margin-top: 5%;
                    flex-direction: column;
                    overflow-y: scroll;
                }
                #HotelInfo::-webkit-scrollbar {
                    width: 5px;
                    background: transparent;
                }
                #HotelInfo::-webkit-scrollbar-thumb {
                    background: grey;                
                }
                #HotelName {
                    
                }
                #Name {
                    color: white;
                    font-size: 30px;
                    font-family: InterBold;
                }
                #HotelAddress {

                }
                #Address {
                    color: white;
                    font-size: 12px;
                }
                #HotelDescription {
                    
                }
                #Description {
                    color: white;
                }
                #LocationLink {
                    color: white;
                }
            `}
        </style>
        </div>
    )
}