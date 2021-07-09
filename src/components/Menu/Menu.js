import React, { useState } from 'react';
import './style.css';
import menu from '../../images/menu.svg';

import user from "../../images/user.svg";
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/linkedin.svg';

export const Menu = () => {
    const [open, setOpen] = useState(false)

  
    const handleClick = () => {
        setOpen(!open)
      }
    
    
    return (
        <>
            <div className="menu" open={open}>
                <div className="content_icon-menu">
                    <img src={menu} alt="logo-menu" open={open} onClick={handleClick}/>
                </div>
        
                {
                    (open) &&
                    <>
                        <div className="container-menu">
                            <button className="btnClient_menu">
                                <img src={user} alt="logo-user" />
                                &nbsp; Hacete cliente
                            </button>
                            <div className="container-icons_menu">
                                <img src={facebook} />
                                <img src={linkedin} />
                                <img src={instagram} />
                            </div>
                        </div>
                    </>
                }
            </div>

        </>
    )
}