import style from "./WorkoutApp.module.css";
import Section from "../UI/Section";
import HeadingOne from "../UI/HeadingOne";
import Paragraph from "../UI/Paragraph";
import apple from "../images/apple.png";
import ballGreen from "../images/ball-green-1 (1).png";
import phoneImg from "../images/phones-dark.png";
import check from "../images/check-solid.svg";
import OrangeBtn from "../UI/OrangeBtn";
import WhiteBtn from "../UI/WhiteBtn";

const WorkoutApp = () => {
  return (
    <Section>
      <div className={style.infoSec}>
        <HeadingOne>All your workouts, in your pocket</HeadingOne>
        <Paragraph>
          Fitness Pro helps track your workouts, get better results, and be the
          best version of you. Less thinking!
        </Paragraph>
        <ul>
          <li className={style.listItem}>
            <span>
              <img src={check} alt="check" />
            </span>
            Fitness Pro Cloud
          </li>
          <li className={style.listItem}>
            <span>
              <img src={check} alt="check" />
            </span>
            Syncs with Google Fit
          </li>
          <li className={style.listItem}>
            <span>
              <img src={check} alt="check" />
            </span>
            Syncs with Apple Health
          </li>
          <li className={style.listItem}>
            <span>
              <img src={check} alt="check" />
            </span>
            Track your progress easily
          </li>
          <li className={style.listItem}>
            <span>
              <img src={check} alt="check" />
            </span>
            Intuitive and clean design
          </li>
        </ul>
        <div className={style.btnSec}>
          <OrangeBtn>Choose Plan </OrangeBtn>
          <WhiteBtn className={style.bookBtn}>Request a demo</WhiteBtn>
        </div>
      </div>
      {/* **************************************************************************** */}
      <div className={style.imgSection}>
        <div className={style.images}>
          <div className={style.mainImg}>
            <img src={phoneImg} alt="phone"></img>
          </div>
          <div className={style.apple}>
            <img src={apple} alt="apple" className={style.appleImg}></img>
          </div>
          <div className={style.greenball}>
            <img
              src={ballGreen}
              alt="green-ball"
              className={style.greenBallImg}
            ></img>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkoutApp;
