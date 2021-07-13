import React from 'react';
import { Link } from 'react-router-dom';
import wpp from '../images/icon-wpp-white.svg';
import tel from '../images/icon-tel-white.svg';
import instagram from '../images/icon-ig-white.svg';
import facebook from '../images/icon-fb-white.svg';
import linkedin from '../images/icon-in-white.svg';
import group from '../images/Group.svg';

import { Menu } from '../components/Menu/Menu';

const Review = () => {
    return (
        <>
            <div className="content-menu">
                <Menu />
            </div>
            <div className="page-review">
                <div className="background-img_left">
                    <img className="img-group" src={group} alt="img-group-208" />
                </div>
                <div className="review">
                    <h className=" congrats white">¡Felicidades! Estás a un paso de descubrir como cobrar más fácil, rápido y seguro en el Mundo Empresa</h>
                    <p className="sdelay white">Validaremos tus datos a la brevedad y te avisaremos cuando este todo listo para comenzar.</p>
                    <div className="review_content-btn">
                        <button className="btn-back">
                            <Link to="/" className="link-back white">
                                Volver al inicio
                            </Link></button>
                    </div>
                </div>
                <div className="review-contact">
                    <div className="questions">
                        <p className="white font18">¿Tenés dudas? Contactanos al</p>
                        <div className="review_contact-two">
                            <div className="review_contact">
                                <img src={tel} alt="icon-telphone" />
                                <p className="tel white font18">0000 00 00</p>
                            </div>
                            <div className="review_contact">
                                <img src={wpp} alt="icon-whatsApp" />
                                <p className="tel white font18">0000 00 00</p>
                            </div>
                        </div>
                    </div>
                    <div className="socials">
                        <p className="white font18">Seguinos</p>
                        <Link to="#" >
                            <img className="img-socials" src={facebook} alt="icon-facebook" />
                        </Link>
                        <Link to="#">
                            <img className="img-socials" src={linkedin} alt="icon-linkedin" />
                        </Link>
                        <Link to="#">
                            <img className="img-socials" src={instagram} alt="icon-instagram" />
                        </Link>
                    </div>
                </div>
                <div className="background-img_rigth">
                    <img className="img-group" src={group} alt="img-group-208" />
                </div>
                <div className="review_content-btn_resp">
                    <button className="btn-back_resp">
                        <Link to="/" className="link-back white">
                            Volver al inicio
                        </Link></button>
                </div>
            </div>
        </>
    )
}

export default Review;