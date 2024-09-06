import "./header.scss";

import Addresses from "./address";
import ApiService from "../../services/service";
import {Link} from 'react-router-dom';
import MainMenu from "./mainMenu";
import logo from "./img/logo.png"

const Header = () => {
    const service = new ApiService();
    const getMainMenu = () => service.getMainMenu();
    const getAdresses = () => service.getAdresses();

    return (
        <header className="header">
            <div className="header__top">
                <Link to="">
                    <img className="header__logo" src={logo} alt="logo"/>
                </Link>
                <div className="header__contact contact">
                    <Addresses service={getAdresses}/>
                </div>
            </div>
            <nav className="header__navbar navbar">
                <MainMenu service={getMainMenu} />
            </nav>
        </header>
    )
}

export default Header;
        
        

