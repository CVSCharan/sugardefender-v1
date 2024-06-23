import React from "react";
import firstPageStyles from "./FirstPage.module.css";
import Image from "next/image";
import ButtonComp from "../Button/Button";

const FirstPage = () => {
  type FormulaArray = string[];

  const formulaArray: FormulaArray = [
    "Natural Formula",
    "Plant Ingredients",
    "Non-GMO",
    "Easy To Swallow",
    "Non-Habit Forming",
    "Natural Formula",
  ];

  return (
    <div className={firstPageStyles.firstPage}>
      <div className={firstPageStyles.firstDiv}>
        <Image
          src="/Sugar Defender 2bootle-fruits ing.webp"
          alt="Sugar Defender 02"
          height={700}
          width={700}
          className={firstPageStyles.imgOne}
        />
      </div>
      <div className={firstPageStyles.secondDiv}>
        <h2 className={firstPageStyles.secondDivHeadingOne}>
          Are you suffering from constant mid-day energy crashes, infuriating
          brain-fog or incurable irritability?
        </h2>
        <h2 className={firstPageStyles.secondDivHeadingTwo}>
          Support healthy blood sugar levels, boost your all-day natural energy,
          and promote your sharp thinking with the help of BLOOD SUGAR FORMULA
          by Sugar Defender RESEARCH! A highly effective formula, proven to help
          support your healthy fat-burning metabolism for perfect blood sugar!
        </h2>
        <ul className={firstPageStyles.thirdDiv}>
          {formulaArray.map((item) => (
            <li className={firstPageStyles.thirdDivHeadings} key={item}>
              {item}
            </li>
          ))}
        </ul>
        <ButtonComp />
      </div>
    </div>
  );
};

export default FirstPage;
