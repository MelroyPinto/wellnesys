import React from "react";
import { ArrowLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import style from "./HeroSection.module.scss";
import cx from "classnames";
import IMAGES from "src/assets";

const HeroSection = ({ focus }) => {
  return (
    <section
      className={style.heroImgSection}
      style={{ backgroundImage: `url(${IMAGES.yogaHero})` }}
    >
      <button type="button" className={style.backBtn} title="back" tabIndex={1}>
        <ArrowLeftOutlined />
      </button>
      <div className={style.btnContainer}>
        <button
          type="button"
          className={cx(style.playBtn, focus === 1 && style.focus)}
          title="Play"
          tabIndex={2}
        >
          <CaretRightOutlined />
        </button>
      </div>
      <div className={style.contentWrapper}>
        <h4>FIT & STRONG</h4>
        <h1>Mind Body Balance</h1>
      </div>
    </section>
  );
};

export default HeroSection;
