// import React, { Component } from "react";

// import ApiService from "../../services/service";

// export default class MainMenu extends Component {
//     servive = new ApiService();
//     state = {
//         data: [],
//         loading: true,
//         error: false
//     }

//     onDataLoaded = (data) => {
//         this.setState ({
//             data: data,
//             loading: false,
//             error: false
//         })
//     }

//     onError = () => {
//         this.setState ({
//             loading: false,
//             error: true
//         })
//     }

//     loadMenu = () => {
//         this.servive.getMainMenu()
//             .then(this.onDataLoaded)
//             .catch(this.onError)
//     }
    
//     componentDidMount = () => {
//         this.loadMenu();
//     }

//     renderNavMainMenu(menuItems) {
//         return menuItems.map((item) => {
//             let dropMenu = null;
//             if (item.services && item.services.length !== 0) {
//                 dropMenu = (
//                     <div className="navbar__dropdown">
//                         {item.services.map((service, index) => (
//                             <p key={index} className="navbar__dropdown-item">{service.title}</p>
//                         ))}
//                     </div>
//                 );
//             }

//             return (
//                 <div className="navbar__item" key={item.id}>
//                     {item.title}
//                     {dropMenu}
//                 </div>    
//             );
//         });
//     }

//     render() {
//         const { loading, error, data } = this.state;

//         if (loading) {
//             return <p>Loading...</p>;
//         }

//         if (error) {
//             return <p className="error">Error loading menu. Please try again later.</p>;
//         }
//         const mainMenuItems = this.renderNavMainMenu(data)
//         return (
//                 <>
//                     {mainMenuItems}
//                 </>
//             )
//         }
// }

import Base from "./base";
import React from "react";

export default class MainMenu extends Base {
    renderNavMainMenu(menuItems) {
        return menuItems.map((item) => {
            let dropMenu = null;
            if (item.services && item.services.length !== 0) {
                dropMenu = (
                    <div className="navbar__dropdown">
                        {item.services.map((service, index) => (
                            <p key={index} className="navbar__dropdown-item">{service.title}</p>
                        ))}
                    </div>
                );
            }

            return (
                <div className="navbar__item" key={item.id}>
                    {item.title}
                    {dropMenu}
                </div>    
            );
        });
    }

    render() {
        const { loading, error, data } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p className="error">Error loading menu. Please try again later.</p>;
        }
        const mainMenuItems = this.renderNavMainMenu(data)
        return (
                <>
                    {mainMenuItems}
                </>
            )
        }
}