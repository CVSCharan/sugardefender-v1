"use client";
import React from "react";
import Image from "next/image";
import adStyles from "./AdComp.module.css";

const AdComp = () => {
  const handleGreen = () => {
    window.open("https://go.fiverr.com/visit/?bta=1006909&nci=16971", "_blank");
  };
  const handleOrange = () => {
    window.open("https://go.fiverr.com/visit/?bta=1006909&nci=16982", "_blank");
  };
  return (
    <div className={adStyles.adDiv}>
      <Image
        src="/Fiverr Affiliate img 01.png"
        alt="Fiverr Affiliate img 01"
        height={600}
        width={600}
        className={adStyles.imgAd}
        onClick={handleOrange}
      />
      <Image
        src="/Fiverr Affiliate img 02.png"
        alt="Fiverr Affiliate img 02"
        height={600}
        width={600}
        className={adStyles.imgAd}
        onClick={handleGreen}
      />
    </div>
  );
};

export default AdComp;
