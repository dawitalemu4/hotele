import React from "react";

export default function Header() {
    return (
        <div id="Header">
            <div id="HeaderContainer">
                <div id="MenuButtons">
                    <div id="HomeButton">
                        <a id="HomeLink" href="/">Home</a>
                    </div>
                    <div id="EventsButton">
                        <a id="EventsLink" href="/events">Events</a>
                    </div>
                </div>
            </div>
        <style>
            {`
                #Header {
                    display: flex;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 99.8vw;
                    height: 100px;
                    justify-content: center;
                    align-items: center;
                    z-index: 1;
                }
                #HeaderContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    justify-content: flex-end;
                    align-items: center;
                }
                #MenuButtons {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 100%;
                    justify-content: space-around;
                    align-items: center;
                }
                #HomeButton {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
                #HomeLink {
                    font-size: 20px;
                    font-family: InterBold;
                    color: white;
                    text-decoration: none;
                }
                #EventsButton {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
                #EventsLink {
                    font-size: 20px;
                    font-family: InterBold;
                    color: white;
                    text-decoration: none;
                }
                @media (max-width: 500px) {
                    #MenuButtons { width: 70%; }
            `}
        </style>
        </div>
    )
}