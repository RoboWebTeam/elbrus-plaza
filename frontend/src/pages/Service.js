import React from "react";
import LowerHeader from "../components/UI/LowerHeader";
import Header1 from "../components/header/Header1";
import VideoSection from "../components/ServiceUI/VideoSection";
import Services from "../components/DashboardUI/Services";
import OtherServices from "../components/DashboardUI/OtherServices";
import RoomView from "../components/DashboardUI/RoomView";
import { Helmet } from "react-helmet";

export default function Service({ token, setToken }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>Сервис | Отель «Эльбрус Плаза»</title>
        <meta
          name="description"
          content="Ресторан, фитнес, бильярд, сауна, караоке и другие развлечения в отеле «Эльбрус Плаза» в Приэльбрусье."
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
        title="Сервис"
        image="//res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6bfcd224cde00022086002_optimized_3840.webp"
      />
      <VideoSection />
      <Services />
      <OtherServices />
      <RoomView />
    </React.Fragment>
  );
}
