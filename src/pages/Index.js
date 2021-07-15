/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react";
import WOW from 'wowjs'

import ContactForm from "../components/ContactForm"
import './index.css'

export const Index = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false
  }).init();
  });

  return (
    <>
      <div className="loader"></div>
      <div className="menu">
        <div className="centerContent">
          <div className="logo">
            <img src="http://placehold.it/120x52" alt="Logo" />
          </div>
          <nav>
            <a
              href="#"
              className="scrollToAnchor wow fadeIn"
              data-wow-delay="0.2s"
              data-anchor="enterprise"
            >
              ¿Qué es Empresa?
            </a>
            <a
              href="#"
              className="scrollToAnchor wow fadeIn"
              data-wow-delay="0.3s"
              data-anchor="technology"
            >
              Conectá tu dispositivo
            </a>
            <a
              href="#"
              className="scrollToAnchor wow fadeIn"
              data-wow-delay="0.4s"
              data-anchor="benefits"
            >
              Beneficios
            </a>
            <a
              href="#"
              className="scrollToAnchor wow fadeIn"
              data-wow-delay="0.5s"
              data-anchor="contact"
            >
              Contacto
            </a>
          </nav>
          <a href="/clientes" className="login wow fadeIn" data-wow-delay="0.6s">
            <img src="../images/user.svg" alt="Hacete cliente" />
            Hacete cliente
          </a>
          <div className="social">
            <ul>
              <li className="wow fadeInUp" data-wow-delay="0.7s">
                <a href="#">
                  <img src="../images/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.8s">
                <a href="#">
                  <img src="../images/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.9s">
                <a href="#">
                  <img src="../images/instagram.svg" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <a href="#" className="menuBtn">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div className="menuMobile">
        <nav>
          <a href="#" className="scrollToAnchor" data-anchor="enterprise">
            ¿Qué es Empresa?
          </a>
          <a href="#" className="scrollToAnchor" data-anchor="technology">
            Conectá tu dispositivo
          </a>
          <a href="#" className="scrollToAnchor" data-anchor="benefits">
            Beneficios
          </a>
          <a href="#" className="scrollToAnchor" data-anchor="contact">
            Contacto
          </a>
        </nav>
        <a href="/clientes" className="login">
          <img src="../images/user.svg" alt="Hacete cliente" />
          Hacete cliente
        </a>
        <div className="social">
          <ul>
            <li>
              <a href="#">
                <img src="../images/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/linkedin.svg" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../images/instagram.svg" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <main className="wow fadeIn">
        <div className="container">
          <div className="r mobile">
            <div className="heroText">
              <p className="primary wow fadeInUpSmall" data-wow-delay="0.3s">
                Llegó Empresa a Uruguay
              </p>
              <h1 className="wow fadeInUpSmall" data-wow-delay="0.5s">
                Descubrí cómo cobrar más fácil, rápido y seguro
              </h1>
              <p className="secondary wow fadeInUpSmall" data-wow-delay="0.7s">
                Ahora podés elegir cómo cobrar con pos de última generación y
                una plataforma al servicio de tu negocio.
              </p>
              <a
                className="outlineBtn scrollToAnchor wow fadeIn"
                data-wow-delay="1.2s"
                data-anchor="contact"
                href="#"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div className="r">
            <div className="heroImage">
              <div className="dots wow flipInX" data-wow-delay="1.3s">
                <img src="../images/dots-red.svg" alt="Dots" />
              </div>
              <img
                className="desktop wow fadeIn"
                data-wow-delay="1s"
                src="../images/banner.png"
                alt="Banner"
              />
              <img
                className="mobile wow fadeIn"
                data-wow-delay="1s"
                src="../images/banner-m.png"
                alt="Banner"
              />
              <div className="creditCards">
                <div className="master wow fadeInUpSmall" data-wow-delay="1.2s">
                  <img
                    data-depth="0.1"
                    src="../images/mastercard.svg"
                    alt="Master Card"
                  />
                </div>
                <div className="visa wow fadeInUpSmall" data-wow-delay="1.4s">
                  <img data-depth="0.2" src="../images/visa.svg" alt="Visa" />
                </div>
              </div>
              <a
                href="#"
                className="arrow desktop scrollToAnchor wow grow"
                data-wow-delay="1.5s"
                data-anchor="enterprise"
              >
                <img data-depth="0.1" src="../images/arrow.svg" alt="Arrow" />
              </a>
            </div>
          </div>
          <div className="r desktop">
            <div className="heroText">
              <p className="primary wow fadeInUpSmall" data-wow-delay="0.3s">
                Llegó Empresa a Uruguay
              </p>
              <h1 className="wow fadeInUpSmall" data-wow-delay="0.5s">
                Descubrí cómo cobrar más fácil, rápido y seguro
              </h1>
              <p className="secondary wow fadeInUpSmall" data-wow-delay="0.7s">
                Ahora podés elegir cómo cobrar con pos de última generación y
                una plataforma al servicio de tu negocio.
              </p>
              <a
                className="outlineBtn scrollToAnchor wow fadeIn"
                data-wow-delay="1.2s"
                data-anchor="contact"
                href="#"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <a href="#" className="whatsapp desktop wow fadeIn" data-wow-delay="1s">
          <img src="../images/whatsapp.svg" alt="Whatsapp" />
        </a>
      </main>

      <section className="enterprise" id="enterprise">
        <div className="container">
          <div className="dots desktop parallax">
            <img data-depth="0.2" src="../images/dots-grey.svg" alt="Dots" />
          </div>
          <div className="sectionTitle">
            <p
              className="wow fadeInUpSmall"
              data-wow-offset="200"
              data-wow-delay="0.3s"
            >
              ¿Qué es empresa?
            </p>
            <h2
              className="wow fadeInUpSmall"
              data-wow-offset="200"
              data-wow-delay="0.5s"
            >
              Somos la nueva plataforma digital para vender y cobrar
            </h2>
          </div>
          <div className="sectionInfo">
            <p
              className="wow fadeInUpSmall"
              data-wow-offset="200"
              data-wow-delay="0.5s"
            >
              Ahora podés elegir la forma de cobrar con la mejor tecnología al
              servicio de tu negocio.
            </p>
            <p
              className="wow fadeInUpSmall"
              data-wow-offset="200"
              data-wow-delay="0.6s"
            >
              Aceptá todas las tarjetas, recibí los pagos en el día y hace un
              seguimiento online de tu comercio de manera simple, en cualquier
              tipo de negocio con la nueva plataforma digital.
            </p>
          </div>

          <div className="boxes">
            <div className="row">
              <div className="column three">
                <div className="box wow fadeInUpSmall" data-wow-delay="0.4s">
                  <img src="../images/icon-web.svg" alt="Web" />
                  <h3 className="title">Revisá tus ventas en empresa.com.uy</h3>
                  <p className="description">
                    Ingresá con tu usuario y clave a la plataforma, aquí podrás
                    revisar tus ventas y pagos diarios de forma simple. ¡Y más!
                  </p>
                </div>
              </div>
              <div className="column three">
                <div className="box wow fadeInDownSmall" data-wow-delay="0.6s">
                  <img src="../images/icon-customer.svg" alt="Customer" />
                  <h3 className="title">Mejorá la experiencia para tus clientes</h3>
                  <p className="description">
                    Con Empresa tus clientes podrán realizar compras más rápidas
                    y simples.
                  </p>
                </div>
              </div>
              <div className="column three">
                <div className="box wow fadeInUpSmall" data-wow-delay="0.8s">
                  <img src="../images/icon-santander.svg" alt="Santander" />
                  <h3 className="title">Avalado por Santander</h3>
                  <p className="description">
                    Empresa cuenta con la experiencia y el apoyo de uno de los
                    bancos más grandes del mundo.
                  </p>
                </div>
              </div>
              <div className="column three">
                <div className="box wow fadeInDownSmall" data-wow-delay="1s">
                  <img src="../images/icon-money.svg" alt="Money" />
                  <h3 className="title">Tengas el negocio que tengas</h3>
                  <p className="description">
                    Empresa tiene soluciones para todos los comercios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="choose">
        <div className="container">
          <div className="dots desktop parallax wow flipInX" data-wow-delay="1.2s">
            <img data-depth="0.2" src="../images/dots-red.svg" alt="Dots" />
          </div>
          <div className="sectionInfo hideMobile">
            <div className="sectionImage wow fadeIn" data-wow-delay="1s">
              <img src="../images/worker.png" alt="Trabajador" />
            </div>
          </div>
          <div className="sectionTitle">
            <p className="wow fadeInUpSmall" data-wow-delay="0.3s">
              ¿Por qué elegirnos?
            </p>
            <h2 className="wow fadeInUpSmall" data-wow-delay="0.5s">
              Porque estamos al servicio de tu negocio, con condiciones que
              ponés vos
            </h2>
            <ul className="checkList">
              <li className="wow fadeInUpSmall" data-wow-delay="0.6s">
                Tenemos tecnología aplicada a tu negocio para que manejes tus
                cobros y pagos como siempre quisiste.
              </li>
              <li className="wow fadeInUpSmall" data-wow-delay="0.7s">
                Nosotros sabemos que tu negocio no espera por eso te brindamos
                atención las 24 horas por WhatsApp, teléfono o como prefieras.
              </li>
              <li className="wow fadeInUpSmall" data-wow-delay="0.8s">
                Porque hora podés elegir mejores condiciones. Empezá a vender
                con Empresa que tiene el respaldo de Santander.
              </li>
            </ul>
            <a
              className="outlineBtn red scrollToAnchor wow fadeIn"
              data-wow-delay="1.1s"
              data-anchor="contact"
              href="#"
            >
              Contactanos
            </a>
          </div>
          <div className="sectionInfo mobile">
            <div className="dots mobile wow flipInX" data-wow-delay="1.2s">
              <img src="../images/dots-red.svg" alt="Dots" />
            </div>
            <div className="sectionImage wow fadeIn" data-wow-delay="1s">
              <img src="../images/worker-m.png" alt="Trabajador" />
            </div>
          </div>
        </div>
      </section>

      <section className="technology" id="technology">
        <div className="backgroundShape wow fadeIn" data-wow-delay="0.2s"></div>
        <div className="container">
          <div className="dots desktop parallax wow flipInX" data-wow-delay="1.2s">
            <img data-depth="0.2" src="../images/dots-red.svg" alt="Dots" />
          </div>
          <div className="dots mobile wow flipInX" data-wow-delay="1.2s">
            <img src="../images/dots-red.svg" alt="Dots" />
          </div>
          <div className="sectionTitle">
            <p className="wow fadeInUpSmall" data-wow-delay="0.3s">
              POS
            </p>
            <h2 className="wow fadeInUpSmall" data-wow-delay="0.5s">
              Tecnología para vos
            </h2>
            <div className="text">
              <p className="wow fadeInUpSmall" data-wow-delay="0.6s">
                Tenemos los mejores modelos de pos, y la mejor plataforma
                digital con tecnología al servicio de tu negocio.
              </p>
              <p className="wow fadeInUpSmall" data-wow-delay="0.7s">
                Porque no importa el negocio que tengas, ni en qué parte del
                país estés, Empresa se adapta a vos y a tu lugar de trabajo,
                porque tenemos la cobertura más amplia del país.
              </p>
            </div>
            <a
              className="outlineBtn red scrollToAnchor wow fadeIn"
              data-wow-delay="0.9s"
              data-anchor="contact"
              href="#"
            >
              Contactanos
            </a>
          </div>
          <div className="sectionInfo">
            <div className="sectionImage r wow fadeIn" data-wow-delay="1s">
              <img src="../images/tech.png" alt="Tecnología" />
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </section>

      <section className="payments">
        <div className="container">
          <div className="sectionTitle wow fadeInUpSmall" data-wow-delay=".3s">
            <h2>
              Recibí pagos con las principales tarjetas de crédito, débito o
              prepago, de todos los bancos nacionales e internacionales
            </h2>
          </div>
          <ul className="cardsList wow fadeIn">
            <li className="wow fadeIn" data-wow-delay="0.4s">
              <img src="../images/cards/visa.svg" alt="Visa" />
            </li>
            <li className="wow fadeIn" data-wow-delay="0.5s">
              <img src="../images/cards/master.svg" alt="Master Card" />
            </li>
            <li className="wow fadeIn" data-wow-delay="0.6s">
              <img src="../images/cards/american.svg" alt="American Express" />
            </li>
            <li className="wow fadeIn" data-wow-delay="0.7s">
              <img src="../images/cards/cabal.png" alt="Cabal" />
            </li>
            <li className="wow fadeIn" data-wow-delay="0.8s">
              <img src="../images/cards/creditel.svg" alt="Creditel" />
            </li>
            <li className="wow fadeIn" data-wow-delay="0.9s">
              <img src="../images/cards/oca.svg" alt="Oca" />
            </li>
            <li className="wow fadeIn" data-wow-delay="1s">
              <img src="../images/cards/anda.svg" alt="Anda" />
            </li>
            <li className="wow fadeIn" data-wow-delay="1.1s">
              <img src="../images/cards/tarjetad.png" alt="Tarjeta D" />
            </li>
            <li className="wow fadeIn" data-wow-delay="1.2s">
              <img src="../images/cards/passcard.svg" alt="Passcard" />
            </li>
          </ul>
        </div>
      </section>

      <section className="benefits" id="benefits">
        <div className="backgroundShape wow fadeIn" data-wow-delay="0.2s"></div>
        <div className="container">
          <div className="dots desktop parallax wow flipInX" data-wow-delay="1s">
            <img data-depth="0.2" src="../images/dots-red.svg" alt="Dots" />
          </div>
          <div className="dots desktop parallax" data-wow-delay="1.2s">
            <img data-depth="0.2" src="../images/dots-red.svg" alt="Dots" />
          </div>
          <div className="sectionInfo hideMobile">
            <div className="sectionImage wow fadeIn" data-wow-delay="0.9s">
              <img src="../images/benefits.png" alt="Beneficios" />
            </div>
          </div>
          <div className="sectionTitle">
            <p className="wow fadeInUpSmall" data-wow-delay="0.3s">
              Beneficios
            </p>
            <h2 className="wow fadeInUpSmall" data-wow-delay="0.5s">
              Aprovechá las ventajas de tener Empresa junto a tu cuenta
              Santander
            </h2>
            <div className="text wow fadeInUpSmall" data-wow-delay="0.7s">
              <p>
                Empresa tiene el respaldo de Santander. Contactanos y enterate
                de los beneficios que Banco Santander tiene para vos.
              </p>
            </div>
            <ul className="icons">
              <li className="wow fadeInLeft" data-wow-delay="0.8s">
                <img src="../images/icon-cart.svg" alt="Carrito" />
              </li>
              <li className="wow fadeInLeft" data-wow-delay="0.9s">
                <img src="../images/icon-tag.svg" alt="Etiqueta" />
              </li>
              <li className="wow fadeInLeft" data-wow-delay="1s">
                <img src="../images/icon-money-clean.svg" alt="Dinero" />
              </li>
            </ul>
          </div>
          <div className="sectionInfo mobile">
            <div className="sectionImage wow fadeIn" data-wow-delay="0.9s">
              <img src="../images/benefits.png" alt="Beneficios" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="dots desktop parallax wow flipInX" data-wow-delay="1s">
            <img data-depth="0.2" src="../images/dots-red.svg" alt="Dots" />
          </div>
          <div className="sectionTitle">
            <h2 className="wow fadeInUpSmall" data-wow-delay="0.3s">
              Contactanos
            </h2>
            <div className="text">
              <p className="wow fadeInUpSmall" data-wow-delay="0.5s">
                Tenemos todos los canales de comunicación para que elijas el que
                más te guste, porque ahora con Empresa podés elegir mejores
                condiciones.
              </p>
              <p className="wow fadeInUpSmall" data-wow-delay="0.6s">
                Agendá una entrevista con un solo click, encantados te contamos
                todo lo que tenemos para hacer crecer tu negocio en cada rincón
                del país tengas el negocio que tengas.
              </p>
            </div>
          </div>
          <div className="formContainer">
            <ContactForm />
            <div className="contactData">
              <h6 className="wow fadeInUpSmall" data-wow-delay="0.6s">
                ¿Tenés dudas? Contactanos al
              </h6>
              <div className="contactInfo wow fadeInUpSmall" data-wow-delay="0.7s">
                <img src="../images/icon-phone.svg" alt="Teléfono" />
                <span>0000 00 00</span>
              </div>
              <div className="contactInfo wow fadeInUpSmall" data-wow-delay="0.8s">
                <img src="../images/icon-whatsapp.svg" alt="Whatsapp" />
                <span>000 000 000</span>
              </div>

              <h6 className="wow fadeInUpSmall" data-wow-delay="0.9s">
                Seguinos
              </h6>
              <ul className="icons">
                <li className="wow fadeInUp" data-wow-delay="1.1s">
                  <a href="#">
                    <img src="../images/icon-facebook.svg" alt="Facebook" />
                  </a>
                </li>
                <li className="wow fadeInUp" data-wow-delay="1.2s">
                  <a href="#">
                    <img src="../images/icon-linkedin.svg" alt="LinkedIn" />
                  </a>
                </li>
                <li className="wow fadeInUp" data-wow-delay="1.3s">
                  <a href="#">
                    <img src="../images/icon-instagram.svg" alt="Instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="logo">
            <img src="http://placehold.it/90x33" alt="Logo" />
          </div>
          <ul className="links desktop">
            <li className="wow fadeIn" data-wow-delay="0.3s">
              <a href="#" className="scrollToAnchor" data-anchor="enterprise">
                ¿Qué es Empresa?
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay="0.4s">
              <a href="#" className="scrollToAnchor" data-anchor="technology">
                CONECTÁ TU DISPOSITIVO
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay="0.5s">
              <a
                href="#"
                className="scrollToAnchor"
                data-anchor="benefits"
                id="benefits"
              >
                Beneficios
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay="0.6s">
              <a href="#" className="scrollToAnchor" data-anchor="contact">
                Contacto
              </a>
            </li>
          </ul>
          <div className="social">
            <ul>
              <li className="wow fadeInUp" data-wow-delay="0.7s">
                <a href="#" target="_blank">
                  <img src="../images/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.8s">
                <a href="#" target="_blank">
                  <img src="../images/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li className="wow fadeInUp" data-wow-delay="0.9s">
                <a href="#" target="_blank">
                  <img src="../images/instagram.svg" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="subfooter">
          La afiliación del establecimiento está supeditada al cumplimiento de
          las Condiciones objetivas de Contratación de Empresa y de la Normativa
          Aplicable.
        </div>
      </footer>
    </>
  );
};
