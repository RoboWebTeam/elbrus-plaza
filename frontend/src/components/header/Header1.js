import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/EPlogo.png"
export default function Header1({ token, setToken }) {
  const [open, setOpen] = useState(false)

  const openNav = () => {
    setOpen(!open)
  }

  const handleLogout = () => {
    setToken("")
    localStorage.removeItem("token")
    localStorage.removeItem("authToken")
  }

  return (
    <div
      id="blockId-5b30d54ccf38370024d16a6b"
      data-block-name="wireframe-series-13-header"
      data-block-categories="header"
      data-test="block-wrapper"
      data-anchor="header-1"
      data-legacy="true"
      data-sticky="true"
      className="block-wrapper w-block-wrapper block-wrapper_3Um undefined background_3lr background background--dark w-state-has-background"
    >
      <div id="header-1" style={{ display: "none" }} />
      <div
        className="w-block-background background-wrapper_RZ2"
        aria-hidden="true"
        data-background--hide="false"
      >
        <div
          className="background_2xT"
          data-role="placeholder"
          style={{
            background:
              "linear-gradient(0deg, rgb(255, 121, 156) 0%, rgb(219, 38, 85) 100%)",
          }}
        />
      </div>
      <header
        className={
          !open
            ? "header__124EX w-section w-section--header w-section--no-v-padding"
            : "header__124EX header--opened__BG9CE w-section w-section--header w-section--no-v-padding"
        }
        data-header="target"
        data-category="header"
      >
        <div className="header__top-line__30JWL background_3lr background background--dark w-state-has-background">
          <div
            className="background-wrapper_RZ2"
            aria-hidden="true"
            data-background--hide="false"
          >
            <div
              className="background_2xT"
              data-role="placeholder"
              style={{ background: "rgb(33, 33, 33)" }}
            />
          </div>
          <div className="top-line__1n4MJ w-layout w-layout--gap w-content-container">
            <div className="top-line__inner__W7rOp w-layout__inner w-disable-offset">
              <p
                className="top-line__text__1qVa4 top-line__item__2rY5- w-layout__item w-text-center w-text-md-left text_1k0 ui-caption w-caption ui-caption--light zoom-in-top_mBq normal_2Pr"
                style={{ lineHeight: "1.3" }}
              >
                <span
                  style={{ display: "block" }}
                  className="w-text-block phone-header"
                >
                  <span className="w-text-content">
                    <span style={{ fontWeight: "bold" }}>
                      {/* <u>+7 (928) 076-79-07</u> */}
                      <a href="tel:+79280767907">+7 (928) 076-79-07</a>
                    </span>
                  </span>
                </span>
                <span
                  style={{ display: "block" }}
                  className="w-text-block phone-header"
                >
                  <span className="w-text-content">
                    <span style={{ fontWeight: "bold" }}>
                      {/* <u>+7 (926) 412-11-20</u> */}
                      <a href="tel:+79264121120">+7 (926) 412-11-20</a>
                    </span>
                  </span>
                </span>
              </p>
              <ul
                className="zoom-in-center_1T- normal_2Pr"
                style={{
                  marginBottom: "-15px",
                  marginRight: "-7.5px",
                  marginLeft: "-7.5px",
                  fontSize: 0,
                }}
                data-animation="zoom-in-center_1T- normal_2Pr"
              >
                <li
                  className="social-icons_3iz"
                  style={{
                    marginRight: "7.5px",
                    marginLeft: "7.5px",
                    marginBottom: "15px",
                  }}
                >
                  <a
                    className="facebook-5c4731926265a30025fe57eb-socials social-icons_icon_3o6 undefined"
                    rel="noopener"
                    href="https://t.me/elbrusplazahotel"
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#e6e6e6",
                      opacity: 1,
                    }}
                  >
                    <svg className="noFill_1L9 svgIcon_2Cq" viewBox="0 0 32 32">
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M13.6383065,25 L16.9133212,25 L16.9133212,16.0044 L19.3701815,16.0044 L19.8560792,13.1936 L16.9133212,13.1936 L16.9133212,11.1568001 C16.9133212,10.5002 17.3378823,9.81079996 17.944655,9.81079996 L19.6171262,9.81079996 L19.6171262,7 L17.567445,7 L17.567445,7.0126 C14.3603601,7.129 13.7014413,8.98640001 13.6443004,10.9374 L13.6383065,10.9374 L13.6383065,13.1936 L12,13.1936 L12,16.0044 L13.6383065,16.0044 L13.6383065,25 Z"
                          className="outline_28N"
                          fillRule="nonzero"
                        />
                        <path
                          d="M13.6383065,25 L16.9133212,25 L16.9133212,16.0044 L19.3701815,16.0044 L19.8560792,13.1936 L16.9133212,13.1936 L16.9133212,11.1568001 C16.9133212,10.5002 17.3378823,9.81079996 17.944655,9.81079996 L19.6171262,9.81079996 L19.6171262,7 L17.567445,7 L17.567445,7.0126 C14.3603601,7.129 13.7014413,8.98640001 13.6443004,10.9374 L13.6383065,10.9374 L13.6383065,13.1936 L12,13.1936 L12,16.0044 L13.6383065,16.0044 L13.6383065,25 Z"
                          className="logo_2cS"
                          fillRule="nonzero"
                        />
                        <path
                          d="M1,1 L1,31 L31,31 L31,1 L1,1 Z M0,0 L32,0 L32,32 L0,32 L0,0 Z"
                          className="border_3Tk"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li
                  className="social-icons_3iz"
                  style={{
                    marginRight: "7.5px",
                    marginLeft: "7.5px",
                    marginBottom: "15px",
                  }}
                >
                  <a
                    className="instagram-5c4731926265a30025fe57eb-socials social-icons_icon_3o6 undefined"
                    rel="noopener"
                    href="https://instagram.com/elbrusplaza"
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#e6e6e6",
                      opacity: 1,
                    }}
                  >
                    <svg className="noFill_1L9 svgIcon_2Cq" viewBox="0 0 32 32">
                      <g
                        id="Artboard-Copy-60"
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z"
                          className="outline_28N"
                          fillRule="nonzero"
                        />
                        <path
                          d="M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z"
                          className="logo_2cS"
                          fillRule="nonzero"
                        />
                        <path
                          d="M1,1 L1,31 L31,31 L31,1 L1,1 Z M0,0 L32,0 L32,32 L0,32 L0,0 Z"
                          className="border_3Tk"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
                <li
                  className="social-icons_3iz"
                  style={{
                    marginRight: "7.5px",
                    marginLeft: "7.5px",
                    marginBottom: "15px",
                  }}
                >
                  <a
                    className="vk-5c4731926265a30025fe57eb-socials social-icons_icon_3o6 undefined"
                    rel="noopener"
                    href="https://vk.com/elbrusplazatop"
                    style={{
                      width: "30px",
                      height: "30px",
                      color: "#e6e6e6",
                      opacity: 1,
                    }}
                  >
                    <svg className="noFill_1L9 svgIcon_2Cq" viewBox="0 0 32 32">
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M0,0 L32,0 L32,32 L0,32 L0,0 Z M24.5870118,11.7448158 C24.7120566,11.3155263 24.5870118,11 23.9914666,11 L22.0222569,11 C21.521515,11 21.2906955,11.2725395 21.16551,11.5730132 C21.16551,11.5730132 20.1641668,14.0847763 18.7454919,15.71625 C18.2865254,16.1885263 18.0779298,16.3387632 17.8275589,16.3387632 C17.7023734,16.3387632 17.5212061,16.1885263 17.5212061,15.7592368 L17.5212061,11.7448158 C17.5212061,11.2295526 17.3759066,11 16.9585748,11 L13.8641024,11 C13.5511387,11 13.3629385,11.2391053 13.3629385,11.4657632 C13.3629385,11.9541053 14.072276,12.0668553 14.1454181,13.4406974 L14.1454181,16.4247368 C14.1454181,17.0789474 14.0306413,17.1976316 13.7802703,17.1976316 C13.1127082,17.1976316 11.4888135,14.6745789 10.5257293,11.7878026 C10.3369665,11.2266579 10.147641,11 9.64436731,11 L7.67515761,11 C7.11252627,11 7,11.2725395 7,11.5730132 C7,12.1096974 7.66756209,14.7716974 10.1083975,18.2924211 C11.735668,20.6966447 14.0283907,22 16.1146278,22 C17.3663418,22 17.5212061,21.7105263 17.5212061,21.2119079 L17.5212061,19.3947368 C17.5212061,18.8157895 17.6397807,18.7002895 18.0361544,18.7002895 C18.3281601,18.7002895 18.828902,18.8505263 19.997206,20.0097237 C21.3324708,21.3837105 21.5526003,22 22.3035725,22 L24.2727822,22 C24.8354136,22 25.1167292,21.7105263 24.9544101,21.13925 C24.7768999,20.5698553 24.1392979,19.7438421 23.2935224,18.7646974 C22.8345559,18.2064474 22.1460358,17.6055 21.9374402,17.3048816 C21.6452939,16.9184342 21.7288446,16.7466316 21.9374402,16.4031711 C21.9374402,16.4031711 24.3366409,12.9255789 24.5870118,11.7448158 Z"
                          className="outline_28N"
                          fillRule="nonzero"
                        />
                        <g className="logo_2cS" fillRule="nonzero">
                          <path d="M24.5870118,11.7448158 C24.7120566,11.3155263 24.5870118,11 23.9914666,11 L22.0222569,11 C21.521515,11 21.2906955,11.2725395 21.16551,11.5730132 C21.16551,11.5730132 20.1641668,14.0847763 18.7454919,15.71625 C18.2865254,16.1885263 18.0779298,16.3387632 17.8275589,16.3387632 C17.7023734,16.3387632 17.5212061,16.1885263 17.5212061,15.7592368 L17.5212061,11.7448158 C17.5212061,11.2295526 17.3759066,11 16.9585748,11 L13.8641024,11 C13.5511387,11 13.3629385,11.2391053 13.3629385,11.4657632 C13.3629385,11.9541053 14.072276,12.0668553 14.1454181,13.4406974 L14.1454181,16.4247368 C14.1454181,17.0789474 14.0306413,17.1976316 13.7802703,17.1976316 C13.1127082,17.1976316 11.4888135,14.6745789 10.5257293,11.7878026 C10.3369665,11.2266579 10.147641,11 9.64436731,11 L7.67515761,11 C7.11252627,11 7,11.2725395 7,11.5730132 C7,12.1096974 7.66756209,14.7716974 10.1083975,18.2924211 C11.735668,20.6966447 14.0283907,22 16.1146278,22 C17.3663418,22 17.5212061,21.7105263 17.5212061,21.2119079 L17.5212061,19.3947368 C17.5212061,18.8157895 17.6397807,18.7002895 18.0361544,18.7002895 C18.3281601,18.7002895 18.828902,18.8505263 19.997206,20.0097237 C21.3324708,21.3837105 21.5526003,22 22.3035725,22 L24.2727822,22 C24.8354136,22 25.1167292,21.7105263 24.9544101,21.13925 C24.7768999,20.5698553 24.1392979,19.7438421 23.2935224,18.7646974 C22.8345559,18.2064474 22.1460358,17.6055 21.9374402,17.3048816 C21.6452939,16.9184342 21.7288446,16.7466316 21.9374402,16.4031711 C21.9374402,16.4031711 24.3366409,12.9255789 24.5870118,11.7448158" />
                        </g>
                        <path
                          d="M1,1 L1,31 L31,31 L31,1 L1,1 Z M0,0 L32,0 L32,32 L0,32 L0,0 Z"
                          className="border_3Tk"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
              {!token ? (
                <Link
                  to="/login"
                  className="zoom-in-top_mBq slow_3YD loginButton"
                >
                  ВХОД
                </Link>
              ) : (
                <div
                  onClick={handleLogout}
                  className="zoom-in-top_mBq slow_3YD loginButton"
                >
                  ВЫЙТИ
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="header__inner-wrapper__1ZEO5">
          <div className="header__inner__lLh6b w-section__inner">
            <button
              onClick={openNav}
              type="button"
              className="nav-button__3zwfU w-burger w-hide--lg w-hide--xl"
              data-header="trigger"
              title="Switch menu"
            >
              <span className="w-burger__inner">
                <span className="w-burger__line" aria-hidden="true" />
                <span className="w-burger__line" aria-hidden="true" />
                <span className="w-burger__line" aria-hidden="true" />
              </span>
            </button>
            <div className="logo-container__21pc5">
              <img src={Logo} alt="logo" />
              <div
                className="logo-wrapper__3NqM2 w-logo w-text-center w-text-lg-left"
                // style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Link className="logo__3RS8m w-logo__content" to="/">
                  <p
                    className="ui-logo_EOm ui-logo--desktop_Gdr ui-logo--light_3ZY text_1k0 ui-blockTitle ui-blockTitle--light zoom-in-top_mBq normal_2Pr"
                    style={{
                      lineHeight: "1.4375",
                      fontSize: "32px",
                      fontFamily: "Comfortaa, cursive",
                    }}
                  >
                    <span className="w-text-block" style={{ display: "block" }}>
                      <span className="w-text-content">ELBRUS PLAZA</span>
                    </span>
                  </p>
                  <p
                    className="ui-logo_EOm ui-logo--mobile_hfa ui-logo--light_3ZY text_1k0 ui-blockTitle ui-blockTitle--light"
                    style={{
                      lineHeight: "1.4375",
                      fontSize: "26px",
                      fontFamily: "Comfortaa, cursive",
                    }}
                  >
                    <span className="w-text-block" style={{ display: "block" }}>
                      <span className="w-text-content">ELBRUS PLAZA</span>
                    </span>
                  </p>
                </Link>
                <span className="w-logo__slogan text_1k0 ui-subtitle w-subtitle ui-subtitle--light zoom-in-top_mBq normal_2Pr">
                  <span className="w-text-block" style={{ display: "block" }}>
                    <span className="w-text-content">Природа и воздух</span>
                  </span>
                </span>
              </div>
            </div>
            <div className="wrapper__SZVPx w-hide--sm w-hide--md">
              <nav className="nav__1Tbbs w-nav">
                <ul className="menu_1QC menu--5b30d54ccf38370024d16a6b--menu nav-list__2HXfD w-nav__list zoom-in-top_mBq normal_2Pr">
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link className="menu__link_2K2 w-nav__link" to="/about">
                        О наc
                      </Link>
                    </span>
                  </li>
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link
                        className="menu__link_2K2 w-nav__link"
                        to="/accommodation"
                      >
                        Номера
                      </Link>
                    </span>
                  </li>
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link
                        className="menu__link_2K2 w-nav__link"
                        to="/services-facilities"
                      >
                        Сервис
                      </Link>
                    </span>
                  </li>
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link
                        className="menu__link_2K2 w-nav__link"
                        to="/gallery"
                      >
                        Галерея
                      </Link>
                    </span>
                  </li>
                  <li
                    className="menu__item_1eM menu__item--light_UNr w-nav__item"
                    data-menuitem="true"
                  >
                    <span
                      className="menu__item-wrapper_YJs"
                      data-state="closed"
                    >
                      <Link
                        className="menu__link_2K2 w-nav__link"
                        to="/contacts"
                      >
                        Контакты
                      </Link>
                    </span>
                  </li>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".menu--5b30d54ccf38370024d16a6b--menu .menu__link_2K2:not(.submenu__link) {font-weight: 500;letter-spacing: calc(0.1 * 1em);} .menu--5b30d54ccf38370024d16a6b--menu .menu__item_1eM:not(.submenu__link) {font-size: 18px;}",
                    }}
                  />
                </ul>
              </nav>
              <div className="btns-group-wrapper__vGatM w-hide--sm w-hide--md">
                <div className="btns-group__1Cu1E w-btns-group w-btns-group--center">
                  <ul className="btns-group__inner__26cWJ w-btns-group__inner">
                    <li className="btns-group__item__2obn2 w-btns-group__item">
                      <Link
                        className="zoom-in-top_mBq slow_3YD button_2W3 w-button ui-button ui-button--primary-dark ui-button--size-md button--font-weight-bold_1Nu"
                        to="/#blockId-5ca5eee671b4680026b20e1f"
                      >
                        <span className="button__border_1J- ui-button__border" />
                        <span className="button__inner_2of">
                          <span className="button__content_1_I">
                            ЗАБРОНИРОВАТЬ
                          </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header--mobile__1Fx-K w-hide--lg w-hide--xl">
          <div className="header__top-line__30JWL background_3lr background background--dark w-state-has-background">
            <div
              className="background-wrapper_RZ2"
              aria-hidden="true"
              data-background--hide="false"
            >
              <div
                className="background_2xT"
                data-role="placeholder"
                style={{ background: "rgb(33, 33, 33)" }}
              />
            </div>
            <div className="top-line__1n4MJ w-layout w-layout--gap w-content-container">
              <div className="top-line__inner__W7rOp w-layout__inner w-disable-offset">
                <p
                  className="top-line__text__1qVa4 top-line__item__2rY5- w-layout__item w-text-center w-text-md-left text_1k0 ui-caption w-caption ui-caption--light zoom-in-top_mBq normal_2Pr"
                  style={{ lineHeight: "1.3" }}
                >
                  <span style={{ display: "block" }} className="w-text-block ">
                    <span className="w-text-content">
                      <span style={{ fontWeight: "bold" }}>
                        <u>+7 (928) 076-79-07</u>
                      </span>
                    </span>
                  </span>
                  <span style={{ display: "block" }} className="w-text-block ">
                    <span className="w-text-content">
                      <span style={{ fontWeight: "bold" }}>
                        <u>+7 (926) 412-11-20</u>
                      </span>
                    </span>
                  </span>
                </p>
                <div className="socials-wrapper__31h-g top-line__item__2rY5- w-layout__item w-hide--sm"></div>
              </div>
            </div>
          </div>

          <div className="fix-background__3_Fzu background_3lr background background--dark w-state-has-background">
            <div
              className="background-wrapper_RZ2"
              aria-hidden="true"
              data-background--hide="false"
            >
              <div
                className="background_2xT"
                data-role="placeholder"
                style={{
                  background:
                    "linear-gradient(0deg, rgb(255, 121, 156) 0%, rgb(219, 38, 85) 100%)",
                }}
              />
            </div>
            <div className="header__inner-wrapper__1ZEO5">
              <div className="header__inner__lLh6b w-section__inner">
                <button
                  onClick={openNav}
                  type="button"
                  className="nav-button__3zwfU w-burger w-burger--active w-hide--lg w-hide--xl"
                  data-header="trigger"
                  title="Switch menu"
                >
                  <span className="w-burger__inner">
                    <span className="w-burger__line" aria-hidden="true" />
                    <span className="w-burger__line" aria-hidden="true" />
                    <span className="w-burger__line" aria-hidden="true" />
                  </span>
                </button>
                <div className="logo-container__21pc5">
                  <div className="logo-wrapper__3NqM2 w-logo w-text-center w-text-lg-left">
                    <Link className="logo__3RS8m w-logo__content" to="/">
                      <p
                        className="ui-logo_EOm ui-logo--desktop_Gdr ui-logo--light_3ZY text_1k0 ui-blockTitle ui-blockTitle--light zoom-in-top_mBq normal_2Pr"
                        style={{
                          lineHeight: "1.4375",
                          fontSize: "32px",
                          fontFamily: "Comfortaa, cursive",
                        }}
                      >
                        <span
                          className="w-text-block"
                          style={{ display: "block" }}
                        >
                          <span className="w-text-content">ELBRUS PLAZA</span>
                        </span>
                      </p>
                      <p
                        className="ui-logo_EOm ui-logo--mobile_hfa ui-logo--light_3ZY text_1k0 ui-blockTitle ui-blockTitle--light zoom-in-top_mBq normal_2Pr"
                        style={{
                          lineHeight: "1.4375",
                          fontSize: "26px",
                          fontFamily: "Comfortaa, cursive",
                        }}
                      >
                        <span
                          className="w-text-block"
                          style={{ display: "block" }}
                        >
                          <span className="w-text-content">ELBRUS PLAZA</span>
                        </span>
                      </p>
                    </Link>

                    <span className="w-logo__slogan text_1k0 ui-subtitle w-subtitle ui-subtitle--light zoom-in-top_mBq normal_2Pr">
                      <span
                        className="w-text-block"
                        style={{ display: "block" }}
                      >
                        <span className="w-text-content">Природа и воздух</span>
                      </span>
                    </span>
                  </div>
                </div>
                <nav className="nav__1Tbbs w-nav w-nav--column">
                  <ul className="menu_1QC menu--5b30d54ccf38370024d16a6b--menu nav-list__2HXfD w-nav__list zoom-in-top_mBq normal_2Pr">
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/about"
                        >
                          О нас
                        </Link>
                      </span>
                    </li>
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/accommodation"
                        >
                          Номера
                        </Link>
                      </span>
                    </li>
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/services-facilities"
                        >
                          Сервис
                        </Link>
                      </span>
                    </li>
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/gallery"
                        >
                          Галерея
                        </Link>
                      </span>
                    </li>
                    <li
                      className="menu__item_1eM menu__item--light_UNr w-nav__item"
                      data-menuitem="true"
                    >
                      <span
                        className="menu__item-wrapper_YJs"
                        data-state="closed"
                      >
                        <Link
                          className="menu__link_2K2 w-nav__link"
                          aria-haspopup="false"
                          to="/contacts"
                        >
                          Контакты
                        </Link>
                      </span>
                    </li>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".menu--5b30d54ccf38370024d16a6b--menu .menu__link_2K2:not(.submenu__link) {font-weight: 500;letter-spacing: calc(0.1 * 1em);} .menu--5b30d54ccf38370024d16a6b--menu .menu__item_1eM:not(.submenu__link) {font-size: 18px;}",
                      }}
                    />
                  </ul>
                </nav>
                <div className="socials-wrapper__31h-g w-hide--md"></div>
                <div className="btns-group__1Cu1E w-btns-group w-btns-group--center">
                  <ul className="w-btns-group__inner">
                    <li className="w-btns-group__item">
                      <Link
                        className="zoom-in-top_mBq slow_3YD button_2W3 w-button ui-button ui-button--primary-dark ui-button--size-md button--font-weight-bold_1Nu"
                        data-component="hash-link"
                        to="/#blockId-5ca5eee671b4680026b20e1f"
                        onClick={openNav}
                      >
                        <span className="button__border_1J- ui-button__border" />
                        <span className="button__inner_2of">
                          <span className="button__content_1_I">
                            ЗАБРОНИРОВАТЬ
                          </span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
