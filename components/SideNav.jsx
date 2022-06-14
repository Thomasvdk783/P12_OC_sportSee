import React from 'react';
import Zen from '../medias/zen-icon.png';
import Swim from '../medias/swim-icon.png';
import Bike from '../medias/bike-icon.png';
import Altherea from '../medias/altherea-icon.png';

function SideBar() {
    return(
        <div className="container-side-bar">
            <ul className="ul-side-bar">
                <li className="li-side-bar">
                    <img src={Zen} alt="Zen icon" />
                </li>
                <li className="li-side-bar">
                    <img src={Swim} alt="Swim icon" />
                </li>
                <li className="li-side-bar">
                    <img src={Bike} alt="Bike icon" />
                </li>
                <li className="li-side-bar">
                    <img src={Altherea} alt="Altherea icon" />
                </li>
            </ul>
            <div>
                <p className="copiryght">Copiryght, SportSee 2020</p>
            </div>
        </div>
    )
}

export default SideBar