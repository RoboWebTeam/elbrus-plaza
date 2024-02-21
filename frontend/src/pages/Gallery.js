import React from "react";
import Header1 from "../components/header/Header1";
import GalleryTop from "../components/GalleryUI/GalleryTop";
import GalleryCenter from "../components/GalleryUI/GalleryCenter";
import LowerHeader from "../components/UI/LowerHeader";
import { api } from "../api/fetchData";
import { Helmet } from "react-helmet";
export default function Gallery({ token, setToken }) {

  const getFullPathToImage = (imageName, prefix = 'hotels') => {
    return `${api}/static/${prefix}/${imageName}`
  }

  const hotelImages = [
    "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6522b07a1f8a0024c2ddb7_optimized.webp",
    "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5e8ddad15d00590022acc69e_optimized.webp",
    "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5e8ddb4e722ef3002177cc7d_optimized.webp",
    getFullPathToImage('elbrus-hotel-billiard-1.jpg'),
    getFullPathToImage('elbrus-hotel-karaoke-1.jpg'),
    getFullPathToImage('elbrus-hotel-zal-1.jpg'),
    getFullPathToImage('elbrus-ploshadka-1.jpg'),
    getFullPathToImage('elbrus-ploshadka-2.jpg'),
    getFullPathToImage('elbrus-ploshadka-3.jpg'),
    getFullPathToImage('elbrus-sauna-1.jpg'),
    getFullPathToImage('elbrus-sauna-2.jpg'),
    getFullPathToImage('elbrus-sauna-3.jpg'),
  ]

  const restorantImages = [
    "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6fb9395682db002347c49c_optimized_1396.webp",
    "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6fb928c917a00023a8f5fd_optimized_1396.webp",
    "https://res2.weblium.site/res/5d6521c1b173b6002449a088/5d6e2d4f69666100237d3603_optimized_1396.webp",
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>Фотогалерея | Отель «Эльбрус Плаза»</title>
        <meta
          name="description"
          content="Фотогалерея с номерами и территории отеля «Эльбрус Плаза» в Приэльбрусье."
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
        title="Фотогалерея"
        image="https://res2.weblium.site/res/5c6ae63db121ab00262187c1/5c6c050bcca8220023f50877_optimized_2560.webp"
      />
      <GalleryTop
        title="Отель"
        images={hotelImages}
      />
      <GalleryCenter />
      <GalleryTop
        title="Ресторан"
        images={restorantImages}

      />
    </React.Fragment>
  );
}
