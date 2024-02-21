import React from "react";
import { Helmet } from 'react-helmet';
import ContactUs from "../components/AboutUsUI/ContactUs";
import GalleryAboutUs from "../components/AboutUsUI/GalleryAboutUs";
import HotelPhotos from "../components/AboutUsUI/HotelPhotos";
import LowerHeader from "../components/UI/LowerHeader";
import Header1 from "../components/header/Header1";
import "./About.css";

export default function AboutUs({ token, setToken }) {


  return (
    <React.Fragment>
      <Helmet>
        <title>О нас | Отель «Эльбрус Плаза»</title>
        <meta
          name="description"
          content="Гостиничный комплекс «ELBRUS PLAZA» построен в 2018 году и находится в окружении соснового бора национального парка «Приэльбрусье» в живописной Баксанской долине."
        />
      </Helmet>

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
        title="Немного об Отеле"
        image="https://res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfade6655df00231edafd_optimized"
      />
      <HotelPhotos />
      <GalleryAboutUs />
      <ContactUs />
    </React.Fragment>
  );
}
