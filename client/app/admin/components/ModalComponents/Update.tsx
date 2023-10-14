'use client'
import React, { useState } from 'react';
import getAllHotels from '../../../../services/GET/getAllHotels';
import UpdateModal from './UpdateModal';

export default function Update() {

    const [hotels, setHotels] = useState([]);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [id, setID] = useState('');

    const fetchHotels = async () => {
        const res = await getAllHotels();
        setHotels(res);
    }

    if (hotels.length === 0) {
        fetchHotels();
    }

    const openUpdateModal = (id: any) => {
        setID(id);
        setShowUpdateModal(true);
    }

    const closeUpdateModal = () => {
        setShowUpdateModal(false);
    }

    return ( 
        <div id='Update'>
            <div id="UpdateContainer">
                <div id="HotelList">
                    {hotels.map((hotel: any) => (
                        <div id='Hotel' key={hotel.id}>
                            <div id="HotelTitleContainer">
                                <a id='HotelTitle' href={`/${hotel.id}`}>{hotel.title}</a>
                            </div>
                            <div id="HotelUpdateButtonContainer">
                                <div id='HotelUpdateButton' onClick={() => openUpdateModal(hotel.id)}>Edit or Delete</div>
                            </div>
                            {showUpdateModal && <UpdateModal id={id} setCloseModal={closeUpdateModal} />}
                        </div>
                    ))}    
                </div>
            </div>
        <style>
            {`
                #Update {
                    display: flex;
                    position: relative;
                    width: 99.5vw;
                    height: 90vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 1;
                }
                #UpdateContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 1;
                }
                #HotelList {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 100%;
                    flex-direction: column;
                    align-items: center;
                    overflow-y: scroll;
                }
                #HotelList::-webkit-scrollbar {
                    width: 5px;
                    background-color: transparent;
                }
                #HotelList::-webkit-scrollbar-thumb {
                    background-color: grey;
                    border-radius: 5px;
                }
                #Hotel {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100px;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid black;
                    background-color: rgba(255, 255, 255, 0.1);
                    margin-bottom: 10px;
                    border-radius: 15px;
                    color: white;
                }
                #HotelTitleContainer {
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 100%;
                    align-items: center;
                    padding-left: 3%;
                }
                #HotelTitle { 
                    color: white;
                    font-family: InterBold;
                }
                #HotelUpdateButtonContainer {
                    display: flex;
                    position: relative;
                    width: 30%;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                }
                #HotelUpdateButton {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 50%;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
            `}
        </style>
        </div>
    )
}