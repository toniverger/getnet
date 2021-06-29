import React from 'react';
import wpp from '../images/icon-wpp-white.svg';
import tel from '../images/icon-tel-white.svg';
import instagram from '../images/icon-ig-white.svg';
import facebook from '../images/icon-fb-white.svg';
import linkedin from '../images/icon-in-white.svg';

const Review = () => {
    return(
        <div className="page-review">
       <h1 className="white congrats">¡Felicidades! <br></br> Estamos revisando tus datos</h1>
        <h2 className="white font18">Esto puede demorar entre 24 y 48 horas. Cuando esté todo listo te confirmaremos por las vías de contacto solicitadas.</h2>
        <button className="btn-back white">Volver al inicio</button>
        <p className="white font18">¿Tenés dudas? Contactanos al</p>
        <img src={wpp}  alt="icon-whatsApp"/>
        <p className="tel white font18">0000 00 00</p>
        <img src={tel}  alt="icon-telphone"/>
        <p className="tel white font18">0000 00 00</p>
        <p className="white font18">Seguinos</p>
        <img src={facebook} alt="icon-facebook" />
        <img src={linkedin} alt="icon-linkedin" />
        <img src={instagram} alt="icon-instagram" />
        </div>
    )
}

export default Review;