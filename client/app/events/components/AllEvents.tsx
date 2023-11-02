'use client'
import '../../globals.css'
import React, { useState, useEffect } from 'react';
import getAllHotelEvents from '../../../services/GET/getAllHotelEvents';
import getEventByID from '../../../services/GET/getEventByID';
import getHotelByID from '../../../services/GET/getHotelByID';
import { BsArrowLeftShort, BsArrowRightShort, BsFilter } from 'react-icons/bs';

export default function Hero(events: any) {
    const [currentEvent, setCurrentEvent] = useState(0);   
    const [allEvents, setAllEvents] = useState(true);
    const [hotelEvents, setHotelEvents] = useState([]); 
    const [hotelEventsData, setHotelEventsData] = useState([]);
    const [width, setWidth] = useState(events.events.length * 100);
    const [filterWidth, setFilterWidth] = useState(50);

    const fetchHotelEvents = async () => {
        const res = await getAllHotelEvents();
        setHotelEvents(res);
    };

    if (hotelEvents && hotelEvents.length === 0) {
        fetchHotelEvents();
    };

    const fetchHotelEventData = async (hotelIDarg: number, eventIDarg: number) => {
        const eventID = String(eventIDarg);
        const hotelID = String(hotelIDarg);
        const event = await getEventByID(eventID);
        const hotel = await getHotelByID(hotelID);
        return [{event: event}, {hotel: hotel}];
    };
    
    const assignHotelEventDataToID = async () => {
        const dataPromises = hotelEvents.map(async (hotelEvent) => {
            const eventData = await fetchHotelEventData(hotelEvent.hotel_id, hotelEvent.event_id);
            return eventData;
        });
        const eventDataArray = await Promise.all(dataPromises);
        setHotelEventsData((prevData) => [...prevData, ...eventDataArray]);
    };

    if (hotelEvents && hotelEventsData.length < hotelEvents.length) {
        assignHotelEventDataToID();
    };

    const left = () => {
        if (currentEvent > 0) {
            setCurrentEvent(currentEvent - 1);
        }
    };

    const right = () => {
        if (currentEvent < (width / 100)) {
            setCurrentEvent(currentEvent + 1);
        }
    };

    const switchHotelEvents = () => {
        setAllEvents(false);
        setWidth(hotelEvents.length * 100);
        setCurrentEvent(0);
    };

    const switchAllEvents = () => {
        setAllEvents(true);
        setWidth(events.events.length * 100);
        setCurrentEvent(0);
    };

    const expandFilterWidth = () => {
        setFilterWidth(200);
    };

    const shrinkFilterWidth = () => {
        setFilterWidth(50);
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
        else if (currentEvent == ((width / 100) - 1)) {
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
                <div id="FilterButtonContainer">
                    {allEvents ? (
                        <div id="FilterButton" onClick={switchHotelEvents} onMouseOver={expandFilterWidth} onMouseLeave={shrinkFilterWidth}>
                            <BsFilter id='FilterIcon' />
                            {filterWidth === 50 ? null : <p id="FilterText">Hotel Events</p> }
                        </div>
                    ) : (
                        <div id="FilterButton" onClick={switchAllEvents} onMouseOver={expandFilterWidth} onMouseLeave={shrinkFilterWidth}>
                            <BsFilter id='FilterIcon' />
                            {filterWidth === 50 ? null : <p id="FilterText">All Events</p> }
                        </div>
                        
                    )}
                </div>
                <div id="LeftArrowContainer" onClick={left}>
                    <BsArrowLeftShort id="LeftArrow" />
                </div>
                {allEvents ? (
                    <div id="EventListContainer">
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
                    </div>
                ) : ( 
                    <div id="EventListContainer">
                        {hotelEvents.map((hotelEvent: any) => (
                            <div id='Event' key={hotelEvent.id}> 
                                <div id="ImageContainer">
                                    <img id='Image' src={hotelEventsData[hotelEvent.id][0].event.img} />
                                </div>
                                <div id="EventInfo">
                                    <div id="EventName">
                                        <p id="Name">{hotelEventsData[hotelEvent.id][0].event.title}</p>
                                    </div>
                                    <div id="HotelName">
                                        <a id="HotelLink" href={hotelEventsData[hotelEvent.id][1].hotel.id}>@ {hotelEventsData[hotelEvent.id][1].hotel.title}</a>
                                    </div>
                                    <div id="EventDescription">
                                        <p id="Description">{hotelEvent.description}</p>
                                    </div>
                                    <div id="EventLocation">
                                        <a id="LocationLink" href={`/events/${hotelEvent.location}`}>Location - {hotelEvent.location}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div id="RightArrowContainer"  onClick={right}>
                    <BsArrowRightShort id="RightArrow" />
                </div>
            </div>
        <style>
            {`
            
                :root { --width: ${width}vw; --filterWidth: ${filterWidth}px; }

                #Hero {
                    display: flex;
                    position: relative;
                    width: var(--width);
                    height: 80vh;
                    margin-top: 20vh;
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
                @keyframes slideIn {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0); }
                }
                #FilterButtonContainer {
                    display: flex;
                    position: fixed;
                    top: 11vh;
                    right: 0;
                    width: var(--filterWidth);
                    height: 50px;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    border-radius: 25px 0 0 25px;
                    animation: slideIn 0.3s;
                }
                #FilterButton {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    padding-left: 15px;
                    color: black;
                    font-size: 20px;
                    font-family: InterBold;
                    cursor: pointer;
                }
                #FilterIcon { 
                    font-size: 40px; 
                    margin-right: 10px; 
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
                    height: 45%;
                    margin-top: 3%;
                    padding-right: 1%;
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
                #Name {
                    color: white;
                    font-size: 30px;
                    font-family: InterBold;
                }
                #HotelName {
                    margin-top: -10px;
                    margin-bottom: 15px;
                }
                #HotelLink {
                    color: white;
                    font-size: 20px;
                    font-family: InterSemi;
                }
                #Description {
                    color: white;
                    font-size: 12px;
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