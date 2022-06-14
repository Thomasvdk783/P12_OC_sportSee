// Top nav SportSee //

import Logo from '../medias/logo.png';

function Topnav() {
    return(
        <div className="header-top">
            <header className="top-nav-container">
                <figure>
                    <img className="logo-top-nav" src={Logo} alt="Logo SportSee"/>
                </figure>
                <ul className="ul-top-nav">
                    <li className="li-top-nav">Acceuil</li>
                    <li className="li-top-nav">Profil</li>
                    <li className="li-top-nav">Réglage</li>
                    <li className="li-top-nav">Communauté</li>
                </ul>
            </header>   
        </div>
    )
}

export default Topnav