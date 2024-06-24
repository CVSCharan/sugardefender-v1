import React from "react";
import secondPageStyles from "./SeconPage.module.css";
import Image from "next/image";
import { ingredents } from "./SecondPageFun";
import AdComp from "../AdComp/AdComp";

const SecondPage = () => {
  return (
    <div className={secondPageStyles.secondPage}>
      <div className={secondPageStyles.firstDiv}>
        <h2 className={secondPageStyles.firstDivHeadingOne}>
          Inside Every Sugar Defender Drop Find:
        </h2>
        <h2 className={secondPageStyles.firstDivHeadingTwo}>
          8 Carefully-Selected Ingredients That Support Healthy Blood Sugar
          Levels, Including:
        </h2>
      </div>
      <div className={secondPageStyles.secondDiv}>
        {ingredents.map((item) => (
          <div className={secondPageStyles.secondDivContent} key={item.id}>
            <h2 className={secondPageStyles.secondDivContentHeadingOne}>
              {item.name}
            </h2>
            <Image
              src={item.img}
              alt={item.img}
              height={200}
              width={200}
              className={secondPageStyles.imgOne}
            />
            <h2 className={secondPageStyles.secondDivContentHeadingTwo}>
              {item.message}
            </h2>
          </div>
        ))}
      </div>
      <div className={secondPageStyles.thirdDiv}>
        <AdComp />
      </div>
    </div>
  );
};

export default SecondPage;
