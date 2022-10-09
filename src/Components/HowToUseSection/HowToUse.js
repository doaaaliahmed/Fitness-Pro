import HeadingTwo from "../UI/HeadingTwo";
import Paragraph from "../UI/Paragraph";
import style from "./HowToUse.module.css";
import aboutPic from "../images/about-pic.png";
import plate from "../images/plate.png";
import HowToUseList from "./HowToUseList";
const HowToUse = () => {
  return (
    <section className={style.aboutSection}>
      <div className={style.firstPart}>
        <div className={style.title}>
          <p>FITNESS PRO</p>
        </div>
        <div className={style.info}>
          <HeadingTwo className={style.headTitle}>
            Simple, powerful, easy-to-use
          </HeadingTwo>
          <Paragraph>
            Track your workouts, get better results, and be the best version of
            you. Less thinking, more lifting.
          </Paragraph>
        </div>
      </div>
      <div className={style.secondPart}>
        <div className={style.imgSec}>
          <img src={aboutPic} alt="" className={style.aboutPic}></img>
          <img src={plate} alt="" className={style.plate}></img>
        </div>
        <HowToUseList></HowToUseList>
      </div>
    </section>
  );
};

export default HowToUse;
