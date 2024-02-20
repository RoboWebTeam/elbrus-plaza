import React, { useState, useEffect } from "react";
import LowerHeader from "../components/UI/LowerHeader";
import Information from "../components/AccommodationUI/Information";
import Header1 from "../components/header/Header1";
import Rooms from "../components/AccommodationUI/Rooms";

export default function Accommodation({ token, setToken }) {
  return (
    <React.Fragment>
      <div
        id="portal"
        className="g-sticky-wrapper sticky-wrapper_6A4"
        style={{ height: "0px" }}
      ></div>
      <div
        className="w-blocks-group-wrapper blocks-group-wrapper_2QF"
        data-legacy="true"
        style={{}}
        data-hydrated="true"
      >
        <Header1 token={token} setToken={setToken} />
      </div>
      <LowerHeader
        title="Номера"
        image="https://res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfb856655df00231edc7a_optimized_3840.webp"
      />
      <Information />
      <Rooms token={token} />
      <div className="accommodation-description">
        <span>
          В праздничные дни стоимость номеров и коттеджа может отличаться. Просьба уточнять у
          Администратора по тел. +7 (928) 076-79-07
        </span>
      </div>
    </React.Fragment>
  );
}
