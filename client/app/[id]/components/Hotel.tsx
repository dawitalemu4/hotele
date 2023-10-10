'use client'
import '../../globals.css'
import React from 'react';
import Modal from '../../global/Modal';

export default function Hero(hotel: any) {

    return ( 
        <div id="Hero">
            <div id="HeroContainer">
                <div id='Hotel'>
                    <div id="ImageContainer">
                        <img id='Image' src={hotel.hotel.img} />
                    </div>
                    <div id="HotelInfo">
                        <div id="HotelName">
                            <p id="Name">{hotel.hotel.title} - <a id="LocationLink" href={`/events/${hotel.hotel.location}`}>{hotel.hotel.location}</a></p>
                        </div>
                        <div id="HotelAddress">
                            <p id="Address">{hotel.hotel.address}</p>
                        </div>
                        <div id="HotelDescription">
                            <p id="Description">{hotel.hotel.description}</p>
                        </div>
                        <div id="HotelPrice">
                            <Modal hotel={hotel} />
                        </div>
                    </div>
                </div>
            </div>
        <style>
            {`
                #Hero {
                    display: flex;
                    position: relative;
                    width: 100vw;
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
                    margin-top: 3%;
                    padding-right: 1%;
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
                }border-bottom: 1px solid white;
                }
            `}
        </style>
        </div>
    )
}