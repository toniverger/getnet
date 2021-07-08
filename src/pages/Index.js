/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Index = () => {
  return (
    <>
      <div class="loader"></div>
      <div class="menu">
        <div class="centerContent">
          <div class="logo">
            <img src="http://placehold.it/120x52" alt="Logo" />
          </div>
          <nav>
            <a
              href="#"
              class="scrollToAnchor wow fadeIn"
              data-wow-delay="0.2s"
              data-anchor="enterprise"
            >
              ¿Qué es Empresa?
            </a>
            <a
              href="#"
              class="scrollToAnchor wow fadeIn"
              data-wow-delay="0.3s"
              data-anchor="technology"
            >
              Conectá tu dispositivo
            </a>
            <a
              href="#"
              class="scrollToAnchor wow fadeIn"
              data-wow-delay="0.4s"
              data-anchor="benefits"
            >
              Beneficios
            </a>
            <a
              href="#"
              class="scrollToAnchor wow fadeIn"
              data-wow-delay="0.5s"
              data-anchor="contact"
            >
              Contacto
            </a>
          </nav>
          <a href="/clientes" class="login wow fadeIn" data-wow-delay="0.6s">
            <img src="img/user.svg" alt="Hacete cliente" />
            Hacete cliente
          </a>
          <div class="social">
            <ul>
              <li class="wow fadeInUp" data-wow-delay="0.7s">
                <a href="#">
                  <img src="img/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.8s">
                <a href="#">
                  <img src="img/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.9s">
                <a href="#">
                  <img src="img/instagram.svg" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <a href="#" class="menuBtn">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="menuMobile">
        <nav>
          <a href="#" class="scrollToAnchor" data-anchor="enterprise">
            ¿Qué es Empresa?
          </a>
          <a href="#" class="scrollToAnchor" data-anchor="technology">
            Conectá tu dispositivo
          </a>
          <a href="#" class="scrollToAnchor" data-anchor="benefits">
            Beneficios
          </a>
          <a href="#" class="scrollToAnchor" data-anchor="contact">
            Contacto
          </a>
        </nav>
        <a href="/clientes" class="login">
          <img src="img/user.svg" alt="Hacete cliente" />
          Hacete cliente
        </a>
        <div class="social">
          <ul>
            <li>
              <a href="#">
                <img src="img/facebook.svg" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/linkedin.svg" alt="LinkedIn" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/instagram.svg" alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <main class="wow fadeIn">
        <div class="container">
          <div class="r mobile">
            <div class="heroText">
              <p class="primary wow fadeInUpSmall" data-wow-delay="0.3s">
                Llegó Empresa a Uruguay
              </p>
              <h1 class="wow fadeInUpSmall" data-wow-delay="0.5s">
                Descubrí cómo cobrar más fácil, rápido y seguro
              </h1>
              <p class="secondary wow fadeInUpSmall" data-wow-delay="0.7s">
                Ahora podés elegir cómo cobrar con pos de última generación y
                una plataforma al servicio de tu negocio.
              </p>
              <a
                class="outlineBtn scrollToAnchor wow fadeIn"
                data-wow-delay="1.2s"
                data-anchor="contact"
                href="#"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div class="r">
            <div class="heroImage">
              <div class="dots wow flipInX" data-wow-delay="1.3s">
                <img src="img/dots-red.svg" alt="Dots" />
              </div>
              <img
                class="desktop wow fadeIn"
                data-wow-delay="1s"
                src="img/banner.png"
                alt="Banner"
              />
              <img
                class="mobile wow fadeIn"
                data-wow-delay="1s"
                src="img/banner-m.png"
                alt="Banner"
              />
              <div class="creditCards">
                <div class="master wow fadeInUpSmall" data-wow-delay="1.2s">
                  <img
                    data-depth="0.1"
                    src="img/mastercard.svg"
                    alt="Master Card"
                  />
                </div>
                <div class="visa wow fadeInUpSmall" data-wow-delay="1.4s">
                  <img data-depth="0.2" src="img/visa.svg" alt="Visa" />
                </div>
              </div>
              <a
                href="#"
                class="arrow desktop scrollToAnchor wow grow"
                data-wow-delay="1.5s"
                data-anchor="enterprise"
              >
                <img data-depth="0.1" src="img/arrow.svg" alt="Arrow" />
              </a>
            </div>
          </div>
          <div class="r desktop">
            <div class="heroText">
              <p class="primary wow fadeInUpSmall" data-wow-delay="0.3s">
                Llegó Empresa a Uruguay
              </p>
              <h1 class="wow fadeInUpSmall" data-wow-delay="0.5s">
                Descubrí cómo cobrar más fácil, rápido y seguro
              </h1>
              <p class="secondary wow fadeInUpSmall" data-wow-delay="0.7s">
                Ahora podés elegir cómo cobrar con pos de última generación y
                una plataforma al servicio de tu negocio.
              </p>
              <a
                class="outlineBtn scrollToAnchor wow fadeIn"
                data-wow-delay="1.2s"
                data-anchor="contact"
                href="#"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <a href="#" class="whatsapp desktop wow fadeIn" data-wow-delay="1s">
          <img src="img/whatsapp.svg" alt="Whatsapp" />
        </a>
      </main>

      <section class="enterprise" id="enterprise">
        <div class="container">
          <div class="dots desktop parallax">
            <img data-depth="0.2" src="img/dots-grey.svg" alt="Dots" />
          </div>
          <div class="sectionTitle">
            <p
              class="wow fadeInUpSmall"
              data-wow-offset="200"
              data-wow-delay="0.3s"
            >
              ¿Qué es empresa?
            </p>
            <h2
              class="wow fadeInUpSmall"
              data-wow-offset="200"
              data-wow-delay="0.5s"
            >
              Somos la nueva plataforma digital para vender y cobrar
            </h2>
          </div>
          <div class="sectionInfo">
            <p
              class="wow fadeInUpSmall"
              data-wow-offset="200"
              data-wow-delay="0.5s"
            >
              Ahora podés elegir la forma de cobrar con la mejor tecnología al
              servicio de tu negocio.
            </p>
            <p
              class="wow fadeInUpSmall"
              data-wow-offset="200"
              data-wow-delay="0.6s"
            >
              Aceptá todas las tarjetas, recibí los pagos en el día y hace un
              seguimiento online de tu comercio de manera simple, en cualquier
              tipo de negocio con la nueva plataforma digital.
            </p>
          </div>

          <div class="boxes">
            <div class="row">
              <div class="column three">
                <div class="box wow fadeInUpSmall" data-wow-delay="0.4s">
                  <img src="img/icon-web.svg" alt="Web" />
                  <h3 class="title">Revisá tus ventas en empresa.com.uy</h3>
                  <p class="description">
                    Ingresá con tu usuario y clave a la plataforma, aquí podrás
                    revisar tus ventas y pagos diarios de forma simple. ¡Y más!
                  </p>
                </div>
              </div>
              <div class="column three">
                <div class="box wow fadeInDownSmall" data-wow-delay="0.6s">
                  <img src="img/icon-customer.svg" alt="Customer" />
                  <h3 class="title">Mejorá la experiencia para tus clientes</h3>
                  <p class="description">
                    Con Empresa tus clientes podrán realizar compras más rápidas
                    y simples.
                  </p>
                </div>
              </div>
              <div class="column three">
                <div class="box wow fadeInUpSmall" data-wow-delay="0.8s">
                  <img src="img/icon-santander.svg" alt="Santander" />
                  <h3 class="title">Avalado por Santander</h3>
                  <p class="description">
                    Empresa cuenta con la experiencia y el apoyo de uno de los
                    bancos más grandes del mundo.
                  </p>
                </div>
              </div>
              <div class="column three">
                <div class="box wow fadeInDownSmall" data-wow-delay="1s">
                  <img src="img/icon-money.svg" alt="Money" />
                  <h3 class="title">Tengas el negocio que tengas</h3>
                  <p class="description">
                    Empresa tiene soluciones para todos los comercios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="choose">
        <div class="container">
          <div class="dots desktop parallax wow flipInX" data-wow-delay="1.2s">
            <img data-depth="0.2" src="img/dots-red.svg" alt="Dots" />
          </div>
          <div class="sectionInfo hideMobile">
            <div class="sectionImage wow fadeIn" data-wow-delay="1s">
              <img src="img/worker.png" alt="Trabajador" />
            </div>
          </div>
          <div class="sectionTitle">
            <p class="wow fadeInUpSmall" data-wow-delay="0.3s">
              ¿Por qué elegirnos?
            </p>
            <h2 class="wow fadeInUpSmall" data-wow-delay="0.5s">
              Porque estamos al servicio de tu negocio, con condiciones que
              ponés vos
            </h2>
            <ul class="checkList">
              <li class="wow fadeInUpSmall" data-wow-delay="0.6s">
                Tenemos tecnología aplicada a tu negocio para que manejes tus
                cobros y pagos como siempre quisiste.
              </li>
              <li class="wow fadeInUpSmall" data-wow-delay="0.7s">
                Nosotros sabemos que tu negocio no espera por eso te brindamos
                atención las 24 horas por WhatsApp, teléfono o como prefieras.
              </li>
              <li class="wow fadeInUpSmall" data-wow-delay="0.8s">
                Porque hora podés elegir mejores condiciones. Empezá a vender
                con Empresa que tiene el respaldo de Santander.
              </li>
            </ul>
            <a
              class="outlineBtn red scrollToAnchor wow fadeIn"
              data-wow-delay="1.1s"
              data-anchor="contact"
              href="#"
            >
              Contactanos
            </a>
          </div>
          <div class="sectionInfo mobile">
            <div class="dots mobile wow flipInX" data-wow-delay="1.2s">
              <img src="img/dots-red.svg" alt="Dots" />
            </div>
            <div class="sectionImage wow fadeIn" data-wow-delay="1s">
              <img src="img/worker-m.png" alt="Trabajador" />
            </div>
          </div>
        </div>
      </section>

      <section class="technology" id="technology">
        <div class="backgroundShape wow fadeIn" data-wow-delay="0.2s"></div>
        <div class="container">
          <div class="dots desktop parallax wow flipInX" data-wow-delay="1.2s">
            <img data-depth="0.2" src="img/dots-red.svg" alt="Dots" />
          </div>
          <div class="dots mobile wow flipInX" data-wow-delay="1.2s">
            <img src="img/dots-red.svg" alt="Dots" />
          </div>
          <div class="sectionTitle">
            <p class="wow fadeInUpSmall" data-wow-delay="0.3s">
              POS
            </p>
            <h2 class="wow fadeInUpSmall" data-wow-delay="0.5s">
              Tecnología para vos
            </h2>
            <div class="text">
              <p class="wow fadeInUpSmall" data-wow-delay="0.6s">
                Tenemos los mejores modelos de pos, y la mejor plataforma
                digital con tecnología al servicio de tu negocio.
              </p>
              <p class="wow fadeInUpSmall" data-wow-delay="0.7s">
                Porque no importa el negocio que tengas, ni en qué parte del
                país estés, Empresa se adapta a vos y a tu lugar de trabajo,
                porque tenemos la cobertura más amplia del país.
              </p>
            </div>
            <a
              class="outlineBtn red scrollToAnchor wow fadeIn"
              data-wow-delay="0.9s"
              data-anchor="contact"
              href="#"
            >
              Contactanos
            </a>
          </div>
          <div class="sectionInfo">
            <div class="sectionImage r wow fadeIn" data-wow-delay="1s">
              <img src="img/tech.png" alt="Tecnología" />
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </section>

      <section class="payments">
        <div class="container">
          <div class="sectionTitle wow fadeInUpSmall" data-wow-delay=".3s">
            <h2>
              Recibí pagos con las principales tarjetas de crédito, débito o
              prepago, de todos los bancos nacionales e internacionales
            </h2>
          </div>
          <ul class="cardsList wow fadeIn">
            <li class="wow fadeIn" data-wow-delay="0.4s">
              <img src="img/cards/visa.svg" alt="Visa" />
            </li>
            <li class="wow fadeIn" data-wow-delay="0.5s">
              <img src="img/cards/master.svg" alt="Master Card" />
            </li>
            <li class="wow fadeIn" data-wow-delay="0.6s">
              <img src="img/cards/american.svg" alt="American Express" />
            </li>
            <li class="wow fadeIn" data-wow-delay="0.7s">
              <img src="img/cards/cabal.png" alt="Cabal" />
            </li>
            <li class="wow fadeIn" data-wow-delay="0.8s">
              <img src="img/cards/creditel.svg" alt="Creditel" />
            </li>
            <li class="wow fadeIn" data-wow-delay="0.9s">
              <img src="img/cards/oca.svg" alt="Oca" />
            </li>
            <li class="wow fadeIn" data-wow-delay="1s">
              <img src="img/cards/anda.svg" alt="Anda" />
            </li>
            <li class="wow fadeIn" data-wow-delay="1.1s">
              <img src="img/cards/tarjetad.png" alt="Tarjeta D" />
            </li>
            <li class="wow fadeIn" data-wow-delay="1.2s">
              <img src="img/cards/passcard.svg" alt="Passcard" />
            </li>
          </ul>
        </div>
      </section>

      <section class="benefits" id="benefits">
        <div class="backgroundShape wow fadeIn" data-wow-delay="0.2s"></div>
        <div class="container">
          <div class="dots desktop parallax wow flipInX" data-wow-delay="1s">
            <img data-depth="0.2" src="img/dots-red.svg" alt="Dots" />
          </div>
          <div class="dots desktop parallax" data-wow-delay="1.2s">
            <img data-depth="0.2" src="img/dots-red.svg" alt="Dots" />
          </div>
          <div class="sectionInfo hideMobile">
            <div class="sectionImage wow fadeIn" data-wow-delay="0.9s">
              <img src="img/benefits.png" alt="Beneficios" />
            </div>
          </div>
          <div class="sectionTitle">
            <p class="wow fadeInUpSmall" data-wow-delay="0.3s">
              Beneficios
            </p>
            <h2 class="wow fadeInUpSmall" data-wow-delay="0.5s">
              Aprovechá las ventajas de tener Empresa junto a tu cuenta
              Santander
            </h2>
            <div class="text wow fadeInUpSmall" data-wow-delay="0.7s">
              <p>
                Empresa tiene el respaldo de Santander. Contactanos y enterate
                de los beneficios que Banco Santander tiene para vos.
              </p>
            </div>
            <ul class="icons">
              <li class="wow fadeInLeft" data-wow-delay="0.8s">
                <img src="img/icon-cart.svg" alt="Carrito" />
              </li>
              <li class="wow fadeInLeft" data-wow-delay="0.9s">
                <img src="img/icon-tag.svg" alt="Etiqueta" />
              </li>
              <li class="wow fadeInLeft" data-wow-delay="1s">
                <img src="img/icon-money-clean.svg" alt="Dinero" />
              </li>
            </ul>
          </div>
          <div class="sectionInfo mobile">
            <div class="sectionImage wow fadeIn" data-wow-delay="0.9s">
              <img src="img/benefits.png" alt="Beneficios" />
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <div class="container">
          <div class="dots desktop parallax wow flipInX" data-wow-delay="1s">
            <img data-depth="0.2" src="img/dots-red.svg" alt="Dots" />
          </div>
          <div class="sectionTitle">
            <h2 class="wow fadeInUpSmall" data-wow-delay="0.3s">
              Contactanos
            </h2>
            <div class="text">
              <p class="wow fadeInUpSmall" data-wow-delay="0.5s">
                Tenemos todos los canales de comunicación para que elijas el que
                más te guste, porque ahora con Empresa podés elegir mejores
                condiciones.
              </p>
              <p class="wow fadeInUpSmall" data-wow-delay="0.6s">
                Agendá una entrevista con un solo click, encantados te contamos
                todo lo que tenemos para hacer crecer tu negocio en cada rincón
                del país tengas el negocio que tengas.
              </p>
            </div>
          </div>
          <div class="formContainer">
            <form action="">
              <input
                class="wow fadeInUpSmall"
                data-wow-delay="0.6s"
                type="text"
                placeholder="Nombre completo"
              />
              <input
                class="wow fadeInUpSmall"
                data-wow-delay="0.7s"
                type="text"
                placeholder="Email"
              />
              <textarea
                class="wow fadeInUpSmall"
                data-wow-delay="0.8s"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mensaje"
              ></textarea>
              <button class="wow fadeIn" data-wow-delay="0.9s" type="submit">
                Enviar
              </button>
            </form>
            <div class="contactData">
              <h6 class="wow fadeInUpSmall" data-wow-delay="0.6s">
                ¿Tenés dudas? Contactanos al
              </h6>
              <div class="contactInfo wow fadeInUpSmall" data-wow-delay="0.7s">
                <img src="img/icon-phone.svg" alt="Teléfono" />
                <span>0000 00 00</span>
              </div>
              <div class="contactInfo wow fadeInUpSmall" data-wow-delay="0.8s">
                <img src="img/icon-whatsapp.svg" alt="Whatsapp" />
                <span>000 000 000</span>
              </div>

              <h6 class="wow fadeInUpSmall" data-wow-delay="0.9s">
                Seguinos
              </h6>
              <ul class="icons">
                <li class="wow fadeInUp" data-wow-delay="1.1s">
                  <a href="#">
                    <img src="img/icon-facebook.svg" alt="Facebook" />
                  </a>
                </li>
                <li class="wow fadeInUp" data-wow-delay="1.2s">
                  <a href="#">
                    <img src="img/icon-linkedin.svg" alt="LinkedIn" />
                  </a>
                </li>
                <li class="wow fadeInUp" data-wow-delay="1.3s">
                  <a href="#">
                    <img src="img/icon-instagram.svg" alt="Instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="container">
          <div class="logo">
            <img src="http://placehold.it/90x33" alt="Logo" />
          </div>
          <ul class="links desktop">
            <li class="wow fadeIn" data-wow-delay="0.3s">
              <a href="#" class="scrollToAnchor" data-anchor="enterprise">
                ¿Qué es Empresa?
              </a>
            </li>
            <li class="wow fadeIn" data-wow-delay="0.4s">
              <a href="#" class="scrollToAnchor" data-anchor="technology">
                CONECTÁ TU DISPOSITIVO
              </a>
            </li>
            <li class="wow fadeIn" data-wow-delay="0.5s">
              <a
                href="#"
                class="scrollToAnchor"
                data-anchor="benefits"
                id="benefits"
              >
                Beneficios
              </a>
            </li>
            <li class="wow fadeIn" data-wow-delay="0.6s">
              <a href="#" class="scrollToAnchor" data-anchor="contact">
                Contacto
              </a>
            </li>
          </ul>
          <div class="social">
            <ul>
              <li class="wow fadeInUp" data-wow-delay="0.7s">
                <a href="#" target="_blank">
                  <img src="img/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.8s">
                <a href="#" target="_blank">
                  <img src="img/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
              <li class="wow fadeInUp" data-wow-delay="0.9s">
                <a href="#" target="_blank">
                  <img src="img/instagram.svg" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="subfooter">
          La afiliación del establecimiento está supeditada al cumplimiento de
          las Condiciones objetivas de Contratación de Empresa y de la Normativa
          Aplicable.
        </div>
      </footer>
    </>
  );
};
