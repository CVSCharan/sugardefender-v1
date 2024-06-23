import React from "react";
import mainPageStyles from "./MainPage.module.css";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className={mainPageStyles.mainPage}>
      <div className={mainPageStyles.firstDiv}>
        <h2 className={mainPageStyles.mainHeading}>
          The #1 Rated Blood Sugar Formula
        </h2>
      </div>
      <div className={mainPageStyles.secondDiv}>
        <Image
          src="/money-back-img.webp"
          alt="Money Back Guarantee"
          height={200}
          width={200}
          className={mainPageStyles.imgOne}
        />
        <h2 className={mainPageStyles.secondHeading}>
          100% Satisfaction Guaranteed 60-Day Money Back Guarantee
        </h2>
      </div>
      <div className={mainPageStyles.thirdDiv}>
        <div className={mainPageStyles.thirdDivFirstContent}>
          <h2 className={mainPageStyles.thirdDivHeadingOne}>
            Sugar Defender has helped thousands safely assist their blood sugar
            and drop pounds... Quickly, easily and from home.
          </h2>
          <h2 className={mainPageStyles.thirdDivHeadingTwo}>
            Despite this, I fully understand if you are still uncertain. So to
            take the risk out of ordering...
          </h2>
          <div className={mainPageStyles.thirdDivSubDiv}>
            <h2 className={mainPageStyles.thirdDivSubDivHeadingOne}>
              Our customers say 4.98/5
            </h2>
            <Image
              src="/five-stars-img.webp"
              alt="Five Star Img"
              height={100}
              width={100}
              className={mainPageStyles.imgStars}
            />
            <h2 className={mainPageStyles.thirdDivSubDivHeadingOne}>
              based on 2000+ reviews
            </h2>
          </div>
        </div>
        <div className={mainPageStyles.thirdDivSecondContent}>
          <Image
            src="/Sugar Defender.webp"
            alt="Sugar Defender 01"
            height={500}
            width={500}
            className={mainPageStyles.imgSecond}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
