import React, { useState } from 'react';
import createHotel from '../../../../services/POST/createHotel';
import { validateHotelData } from './validateForm';
import { Hotel } from '../../../../services/types';

export default function New() {

    const [warning, setWarning] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
    const [rating, setRating] = useState(undefined);
    const [price, setPrice] = useState(undefined);
    const [img, setImg] = useState('');

    const newHotelSubmit = (title: string, description: string, location: string, address: string, rating: number, price: number, img: string) => {
        const data = {title, description, location, address, rating, price, img};
        if (validateHotelData(data)) {
            const newHotel: Hotel = data;
            console.log(newHotel);
            createHotel(newHotel);
            window.location.reload();
        } else {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 3000);
        }
    }

    const newTitle = (e: any) => {
        setTitle(e.target.value);
    }

    const newDescription = (e: any) => {
        setDescription(e.target.value);
    }

    const newLocation = (e: any) => {
        setLocation(e.target.value);
    }

    const newAddress = (e: any) => {
        setAddress(e.target.value);
    }

    const newRating = (e: any) => {
        setRating(e.target.value);
    }

    const newPrice = (e: any) => {
        setPrice(e.target.value);
    }

    const newImg = (e: any) => {
        setImg(e.target.value);
    }
    
    return ( 
        <div id='New'>
            <div id="NewContainer">
                <div id="NewHotelForm">
                    <div id="NewTitleContainer">
                        <input id="NewTitle" onChange={newTitle} placeholder="Title"></input>
                    </div>
                    <div id="NewDescriptionContainer">
                        <input id="NewDescription" onChange={newDescription} placeholder="Description"></input>
                    </div>
                    <div id="NewLocationContainer">
                        <input id="NewLocation" onChange={newLocation} placeholder="Location"></input>
                    </div>
                    <div id="NewAddressContainer">
                        <input id="NewAddress" onChange={newAddress} placeholder="Address"></input>
                    </div>
                    <div id="NewRatingContainer">
                        <input id="NewRating" onChange={newRating} placeholder="Rating"></input>
                    </div>
                    <div id="NewPriceContainer">
                        <input id="NewPrice" onChange={newPrice} placeholder="Price"></input>
                    </div>
                    <div id="NewImgContainer">
                        <input id="NewImg" onChange={newImg} placeholder="Img"></input>
                    </div>
                </div>
                <div id='NewHotelSubmitContainer'>
                    <div id="NewHotelSubmit" onClick={() => newHotelSubmit(title, description, location, address, rating, price, img)}>Submit New Hotel</div>
                </div>
                <div id='ShowWarningContainer'>
                    {warning && <div id='ShowWarning'>Invalid Entry</div>}
                </div>
            </div>
        <style>
            {`
                #New {
                    display: flex;
                    position: relative;
                    width: 99.5vw;
                    height: 90vh;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #NewContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                #NewHotelForm {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 80%;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                }
                #NewTitleContainer, #NewDescriptionContainer, #NewLocationContainer, #NewAddressContainer, #NewRatingContainer, #NewPriceContainer, #NewImgContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 5%;
                }
                #NewTitle, #NewDescription, #NewLocation, #NewAddress, #NewRating, #NewPrice, #NewImg {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border: 1px solid black;
                    border-radius: 5px;
                    padding: 5px;
                }
                #NewHotelSubmitContainer {
                    display: flex;
                    position: relative;
                    width: 350px;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }
                #NewHotelSubmit {
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 70%;
                    border: 2px solid white;
                    border-radius: 5px;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    cursor: pointer;
                }
                #ShowWarningContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    justify-content: center;
                    align-items: center;
                }
                #ShowWarning {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    color: red;
                }
            `}
        </style>
        </div>
    )
}