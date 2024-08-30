import "./header.scss";

import Adresses from "./adress";
import ApiService from "../../services/service";
import MainMenu from "./mainMenu";
import logo from "./img/logo.png"

const Header = () => {
    const service = new ApiService();
    const getMainMenu = () => service.getMainMenu();
    const getAdresses = () => service.getAdresses();

    return (
        <header className="header">
            <div className="header__top">
                <img className="header__logo" src={logo} alt="logo"/>
                <div className="header__contact contact">
                    <Adresses service={getAdresses}/>
                </div>
            </div>
            <nav className="header__navbar navbar">
                <MainMenu service={getMainMenu} />
            </nav>
        </header>
    )
}

export default Header;
        
        

