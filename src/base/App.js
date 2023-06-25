/* eslint-disable react-hooks/exhaustive-deps */
import IMAGES from "src/assets";
import style from "./app.module.scss";
import { ArrowLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { CARDS, FOCUS, TEXT_CARDS } from "src/utils/common";
import cx from "classnames";
import { useEffect, useState } from "react";

const App = () => {
  const [focus, setFocus] = useState(1);
  const [childFocus, setChildFocus] = useState(1);

  const moveFocus = (e) => {
    e?.preventDefault();
    if (!e) {
      return;
    }
    const { keyCode } = e;

    switch (keyCode) {
      case 38:
        setFocus((focus) => {
          if (focus > 1) {
            return focus - 1;
          }
          return focus;
        });
        setChildFocus(1);
        break; //up
      case 40:
        setFocus((focus) => {
          if (focus < 3) {
            return focus + 1;
          }
          return focus;
        });
        setChildFocus(1);
        break; //down
      case 37:
        setChildFocus((childFocus) => {
          if (FOCUS[focus].hasChildren && childFocus > 1) {
            return childFocus - 1;
          }
          return childFocus;
        });
        break; //left
      case 39:
        setChildFocus((childFocus) => {
          if (
            FOCUS[focus].hasChildren &&
            childFocus < FOCUS[focus].child.length
          ) {
            return childFocus + 1;
          }
          return childFocus;
        });
        break; //right
      default:
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", moveFocus);
    moveFocus();
    return () => document.removeEventListener("keydown", moveFocus);
  }, []);

  useEffect(() => {
    const id = `${FOCUS[focus - 1].uniqName}${focus}${childFocus}`;
    const ele = document.getElementById(id);
    ele?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  }, [childFocus]);

  const renderHero = () => {
    return (
      <section
        className={style.heroImgSection}
        style={{ backgroundImage: `url(${IMAGES.yogaHero})` }}
      >
        <button
          type="button"
          className={style.backBtn}
          title="back"
          tabIndex={1}
        >
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

  const renderBody = () => {
    return (
      <section className={style.sectionBody}>
        <div className={style.sectionTwo}>
          <div className={style.carouselContainer}>
            {CARDS.map(({ key, title, subtitle, img }, i) => (
              <button
                id={`${FOCUS[1].uniqName}${FOCUS[1].focus}${i + 1}`}
                className={cx(
                  style.card,
                  focus === 2 && childFocus === i + 1 && style.focus
                )}
                key={key}
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className={style.cardContentWrapper}>
                  <h4>{title}</h4>
                  <p>{subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className={style.sectionThree}>
          <div className={style.startBtnContainer}>
            <button type="button" className={cx(focus === 3 && style.focus)}>
              Start Session
            </button>
          </div>
          <div className={style.contentDetails}>
            <img src={IMAGES.yogaCard} alt="img-yoga"></img>
            <div className={style.contentCreatorDetails}>
              <p>Curator: Carolyn</p>
              <p>Rating: 5.0</p>
              <p>Teaching Hours: 12000</p>
            </div>
          </div>
          <p className={cx(style.desc, style.mb_2)}>
            This is simply dummy text of the printing and typesetting industry.
          </p>
          <hr />
          <p className={cx(style.desc, style.mt_2, style.mb_2)}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
            remaining accentiall unchanged
          </p>
          <div className={style.textCardsContainer}>
            {TEXT_CARDS.map(({ key, headerText, list, color }) => (
              <div className={style.textCard} key={key}>
                <h4 style={{ color }}>{headerText}</h4>
                {list.map(({ key, content }) => (
                  <p key={key}>
                    <span className={style.bulletIcon}>
                      <span></span>
                    </span>
                    {content}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      {renderHero()}
      {renderBody()}
    </>
  );
};

export default App;
