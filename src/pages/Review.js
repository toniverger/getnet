import React from 'react';
import wpp from '../images/icon-wpp-white.svg';
import tel from '../images/icon-tel-white.svg';
import instagram from '../images/icon-ig-white.svg';
import facebook from '../images/icon-fb-white.svg';
import linkedin from '../images/icon-in-white.svg';

const Review = () => {
    return (
        <div className="page-review">
            <div className="review">
                <h1 className="white congrats ">¡Felicidades! <br></br> Estamos revisando tus datos</h1>
                <p className="delay white font18">Esto puede demorar entre 24 y 48 horas.</p>
                <p className="delay white font18">Cuando esté todo listo te confirmaremos por las vías de contacto solicitadas.</p>
                <button className="btn-back white">Volver al inicio</button>
            </div>
            <div className="review-contact">
                <div className="questions">
                    <p className="white font18">¿Tenés dudas? Contactanos al</p>
                    <img src={wpp} alt="icon-whatsApp" />
                    <p className="tel white font18">0000 00 00</p>
                    <img src={tel} alt="icon-telphone" />
                    <p className="tel white font18">0000 00 00</p>
                </div>
                <div className="socials">
                    <p className="white font18">Seguinos</p>
                    <img className="img-socials" src={facebook} alt="icon-facebook" />
                    <img className="img-socials" src={linkedin} alt="icon-linkedin" />
                    <img className="img-socials" src={instagram} alt="icon-instagram" />
                </div>
            </div>
        </div>
    )
}

export default Review;