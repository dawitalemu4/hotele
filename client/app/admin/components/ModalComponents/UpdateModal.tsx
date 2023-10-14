import React, { useState } from 'react';
import getHotelByID from '../../../../services/GET/getHotelByID';
import updateHotel from '../../../../services/PATCH/updateHotel';
import deleteHotel from '../../../../services/DELETE/deleteHotel';
import { validateHotelData } from './validateForm';
import { Hotel } from '../../../../services/types';
import { AiOutlineClose } from 'react-icons/ai';

interface UpdateModalProps {
    id: string;
    setCloseModal: () => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ id, setCloseModal }) => {

    const [warning, setWarning] = useState(false);
    const [updatedHotel, setUpdatedHotel] = useState<Hotel>({id: undefined, title: '', description: '', location: '', address: '', rating: undefined, price: undefined, img: ''});
    
    const fetchData = async () => {
        const data = await getHotelByID(id);
        setUpdatedHotel(data);
        updateFormData(data);
    };

    if (updatedHotel.id === undefined) {
        fetchData();
    }
    
    const [title, setTitle] = useState(updatedHotel.title);
    const [description, setDescription] = useState(updatedHotel.description);
    const [location, setLocation] = useState(updatedHotel.location);
    const [address, setAddress] = useState(updatedHotel.address);
    const [rating, setRating] = useState(updatedHotel.rating);
    const [price, setPrice] = useState(updatedHotel.price);
    const [img, setImg] = useState(updatedHotel.img);


    const updatedHotelSubmit = (id: string, title: string, description: string, location: string, address: string, rating: number, price: number, img: string) => {
        const data = {id: parseInt(id), title, description, location, address, rating, price, img};
        if (validateHotelData(data)) {
            updateHotel(data, id);
            window.location.reload();
        } else {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 3000);
        }
    }

    const updateFormData = (data: any) => {
        setTitle(data.title);
        setDescription(data.description);
        setLocation(data.location);
        setAddress(data.address);
        setRating(data.rating);
        setPrice(data.price);
        setImg(data.img);
    }

    const deleteHotelSubmit = (id: string) => {
        if (id !== '') {
            deleteHotel(id);
            window.location.reload();
        } else {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 3000);
        }
    }

    const updatedTitle = (e: any) => {
        setTitle(e.target.value);
    }

    const updatedDescription = (e: any) => {
        setDescription(e.target.value);
    }

    const updatedLocation = (e: any) => {
        setLocation(e.target.value);
    }

    const updatedAddress = (e: any) => {
        setAddress(e.target.value);
    }

    const updatedRating = (e: any) => {
        setRating(e.target.value);
    }

    const updatedPrice = (e: any) => {
        setPrice(e.target.value);
    }

    const updatedImg = (e: any) => {
        setImg(e.target.value);
    }

    return (
        <div id='UpdateModal'>
            <div id="CloseUpdateModalContainer" onClick={setCloseModal}>
                <div id="CloseUpdateModal" onClick={setCloseModal}><AiOutlineClose /></div>
            </div>
            <div id="UpdateModalContainer">
                <div id="UpdateModalForm">
                    <div id="UpdatedTitleContainer">
                        <input id="UpdatedTitle" onChange={updatedTitle} value={title} />
                    </div>
                    <div id="UpdatedDescriptionContainer">
                        <input id="UpdatedDescription" onChange={updatedDescription} value={description} />
                    </div>
                    <div id="UpdatedLocationContainer">
                        <input id="UpdatedLocation" onChange={updatedLocation} value={location} />
                    </div>
                    <div id="UpdatedAddressContainer">
                        <input id="UpdatedAddress" onChange={updatedAddress} value={address} />
                    </div>
                    <div id="UpdatedRatingContainer">
                        <input id="UpdatedRating" onChange={updatedRating} value={rating} />
                    </div>
                    <div id="UpdatedPriceContainer">
                        <input id="UpdatedPrice" onChange={updatedPrice} value={price} />
                    </div>
                    <div id="UpdatedImgContainer">
                        <input id="UpdatedImg" onChange={updatedImg} value={img} />
                    </div>
                </div>
                <div id='UpdatedHotelSubmitContainer'>
                    <div id="UpdatedHotelSubmit" onClick={() => updatedHotelSubmit(id, title, description, location, address, rating, price, img)}>Update Hotel</div>
                    <div id="DeleteHotelSubmit" onClick={() => deleteHotelSubmit(id)}>Delete Hotel</div>
                </div>
                <div id='ShowWarningContainer'>
                    {warning && <div id='ShowWarning'>Invalid Entry</div>}
                </div>
            </div>
        <style>
            {`
                #UpdateModal {
                    display: flex;
                    position: fixed;
                    top: 10vh;
                    left: 0;
                    width: 99.5vw;
                    height: 90vh;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.4);
                    z-index: 2;
                }
                #CloseUpdateModalContainer {
                    display: flex;
                    position: fixed;
                    top: 10vh;
                    left: 0;
                    width: 99.5vw;
                    height: 90vh;
                    justify-content: center;
                    align-items: center;
                    z-index: 3;
                    cursor: pointer;
                }
                #CloseUpdateModal {
                    display: flex;
                    position: fixed;
                    top: 10vh;
                    left: 20px;
                    width: 100px;
                    height: 100px;
                    font-size: 35px;
                    z-index: 3;
                    cursor: pointer;
                }
                #UpdateModalContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 90%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 4;
                    background-color: rgba(0, 0, 0, 0.5);
                    border-radius: 15px;
                }
                #UpdateModalForm {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 80%;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    z-index: 4;
                }
                #UpdatedTitleContainer, #UpdatedDescriptionContainer, #UpdatedLocationContainer, #UpdatedAddressContainer, #UpdatedRatingContainer, #UpdatedPriceContainer, #UpdatedImgContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 5%;
                }
                #UpdatedTitle, #UpdatedDescription, #UpdatedLocation, #UpdatedAddress, #UpdatedRating, #UpdatedPrice, #UpdatedImg {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border: 1px solid black;
                    border-radius: 5px;
                    padding: 5px;
                }
                #UpdatedHotelSubmitContainer {
                    display: flex;
                    position: relative;
                    width: 370px;
                    height: 10%;
                    flex-direction: row;
                    justify-content: space-evenly;
                    align-items: center;
                }
                #UpdatedHotelSubmit {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 70%;
                    border: 2px solid white;
                    border-radius: 5px;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    color: white;
                    cursor: pointer;
                }
                #DeleteHotelSubmit {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 70%;
                    border: 2px solid red;
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

export default UpdateModal;