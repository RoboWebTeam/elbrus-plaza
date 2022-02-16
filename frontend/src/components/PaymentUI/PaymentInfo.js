import React, { useEffect, useState } from "react";
import "./PaymentInfo.css";
import InputMask from "react-input-mask";
export default function PaymentInfo(props) {
  const [cardNumber, setCardNumber] = useState("1234 1234 1255 4584");
  const [cardHolder, setCardHolder] = useState("Ivan Ivanovich");
  const [expirationDate, setExpirationDate] = useState("01/03");
  return (
    <React.Fragment>
      <div class="payment_container">
        <div className="payment-title">
          <h1 style={{ fontSize: "20px", fontFamily: "Montserrat,sans-serif" }}>
            Платежная информация
          </h1>
        </div>
        <div style={{ marginBottom: "30px" }} className="container preload">
          <div className="creditcard">
            <div className="front">
              <div id="ccsingle" />
              <svg
                version="1.1"
                id="cardfront"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 750 471"
                style={{ enableBackground: "new 0 0 750 471" }}
                xmlSpace="preserve"
              >
                <g id="Front">
                  <g id="CardBackground">
                    <g id="Page-1_1_">
                      <g id="amex_1_">
                        <path
                          id="Rectangle-1_1_"
                          className="lightcolor grey"
                          d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z"
                        />
                      </g>
                    </g>
                    <path
                      className="darkcolor greydark"
                      d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
                    />
                  </g>
                  <text
                    transform="matrix(1 0 0 1 60.106 295.0121)"
                    id="svgnumber"
                    className="st2 st3 st4"
                  >
                    {cardNumber}
                  </text>
                  <text
                    transform="matrix(1 0 0 1 54.1064 428.1723)"
                    id="svgname"
                    className="st2 st5 st6"
                  >
                    {cardHolder}
                  </text>
                  <text
                    transform="matrix(1 0 0 1 54.1074 389.8793)"
                    className="st7 st5 st8"
                  >
                    cardholder name
                  </text>
                  <text
                    transform="matrix(1 0 0 1 479.7754 388.8793)"
                    className="st7 st5 st8"
                  >
                    expiration
                  </text>
                  <text
                    transform="matrix(1 0 0 1 65.1054 241.5)"
                    className="st7 st5 st8"
                  >
                    card number
                  </text>
                  <g>
                    <text
                      transform="matrix(1 0 0 1 574.4219 433.8095)"
                      id="svgexpire"
                      className="st2 st5 st9"
                    >
                      {expirationDate}
                    </text>
                    <text
                      transform="matrix(1 0 0 1 479.3848 417.0097)"
                      className="st2 st10 st11"
                    >
                      VALID
                    </text>
                    <text
                      transform="matrix(1 0 0 1 479.3848 435.6762)"
                      className="st2 st10 st11"
                    >
                      THRU
                    </text>
                    <polygon
                      className="st2"
                      points="554.5,421 540.4,414.2 540.4,427.9 		"
                    />
                  </g>
                  <g id="cchip">
                    <g>
                      <path
                        className="st2"
                        d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                    c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
                      />
                    </g>
                    <g>
                      <g>
                        <rect
                          x={82}
                          y={70}
                          className="st12"
                          width="1.5"
                          height={60}
                        />
                      </g>
                      <g>
                        <rect
                          x="167.4"
                          y={70}
                          className="st12"
                          width="1.5"
                          height={60}
                        />
                      </g>
                      <g>
                        <path
                          className="st12"
                          d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                        c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                        C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                        c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                        c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
                        />
                      </g>
                      <g>
                        <rect
                          x="82.8"
                          y="82.1"
                          className="st12"
                          width="25.8"
                          height="1.5"
                        />
                      </g>
                      <g>
                        <rect
                          x="82.8"
                          y="117.9"
                          className="st12"
                          width="26.1"
                          height="1.5"
                        />
                      </g>
                      <g>
                        <rect
                          x="142.4"
                          y="82.1"
                          className="st12"
                          width="25.8"
                          height="1.5"
                        />
                      </g>
                      <g>
                        <rect
                          x={142}
                          y="117.9"
                          className="st12"
                          width="26.2"
                          height="1.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g id="Back"></g>
              </svg>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="field-container">
            <label
              style={{ fontFamily: "Montserrat,sans-serif" }}
              htmlFor="name"
            >
              Имя
            </label>
            <input
              id="name"
              maxLength={20}
              onChange={(e) => setCardHolder(e.target.value)}
            />
          </div>
          <div className="field-container">
            <label
              style={{ fontFamily: "Montserrat,sans-serif" }}
              htmlFor="cardnumber"
            >
              Номер карты
            </label>
            <InputMask
              id="name"
              mask="9999 9999 9999 99999"
              onChange={(e) => setCardNumber(e.target.value)}
              value={props.value}
            />
            <svg
              id="ccicon"
              className="ccicon"
              width={750}
              height={471}
              viewBox="0 0 750 471"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            ></svg>
          </div>
          <div className="field-container">
            <label
              style={{ fontFamily: "Montserrat,sans-serif" }}
              htmlFor="expirationdate"
            >
              Срок действия
            </label>
            <InputMask
              id="name"
              mask="99/99"
              onChange={(e) => setExpirationDate(e.target.value)}
              value={props.value}
            />
          </div>
          <div className="field-container">
            <label
              style={{ fontFamily: "Montserrat,sans-serif" }}
              htmlFor="securitycode"
            >
              Код безопасности
            </label>
            <input
              id="securitycode"
              type="tel"
              pattern="[0-9]*"
              maxLength={4}
              inputMode="numeric"
            />
          </div>
        </div>
      </div>
      <div className="submitPayment">
        <button style={{ fontFamily: "Montserrat,sans-serif" }}>
          Оплатить
        </button>
      </div>
    </React.Fragment>
  );
}
