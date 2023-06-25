import IMAGES from "src/assets";
import style from "./app.module.scss";
import { ArrowLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { CARDS, TEXT_CARDS } from "src/utils/common";

const App = () => {
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
            className={style.playBtn}
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
  const renderCarousel = () => {
    return (
      <section className={style.sectionBody}>
        <div className={style.sectionTwo}>
          <div className={style.carouselContainer}>
            {CARDS.map(({ key, title, subtitle, img }) => (
              <button
                className={style.card}
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
            <button type="button">Start Session</button>
          </div>
          <div className={style.contentDetails}>
            <img src={IMAGES.yogaCard} alt="img-yoga"></img>
            <div className={style.contentCreatorDetails}>
              <p>Curator: Carolyn</p>
              <p>Rating: 5.0</p>
              <p>Teaching Hours: 12000</p>
            </div>
          </div>
          <p className={`${style.desc} ${style.mb_2}`}>
            This is simply dummy text of the printing and typesetting industry.
          </p>
          <hr />
          <p className={`${style.desc} ${style.mt_2} ${style.mb_2}`}>
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
      {renderCarousel()}
    </>
  );
};

export default App;
