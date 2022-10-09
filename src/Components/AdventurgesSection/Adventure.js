import style from "./Adventure.module.css";
import HeadingTwo from "../UI/HeadingTwo";
import Paragraph from "../UI/Paragraph";
import glovesCircle from '../../Components/images/gloves-circle.png';
import bottleCircle from '../../Components/images/bottle-circle.png';
import handGripCircle  from '../../Components/images/hand-grip-circle.png';
const Adventure = () => {
  return (
    <section className={style.adventureSec}>
      <div className={style.titleSec}>
        <HeadingTwo>For any space, at any pace</HeadingTwo>
        <Paragraph className={style.par}>
          From the comfort of your living room to a hotel room across the globe,
          we put the best classes at your fingertips. No WiFi? Download videos
          offline for a practice that moves with you
        </Paragraph>
      </div>
      <div className={style.container}>
      <div className={style.listItem}>
                <img src={handGripCircle} alt=""></img>
                <h3>Intuitive and clean design</h3>
            </div>
            <div className={style.listItem}>
        <img src={glovesCircle} alt=""></img>
            <h3>Track your progress easily</h3>
            </div>
        <div className={style.listItem}>
            <img src={bottleCircle} alt=""></img>
            <h3>Syncs with Apple Health</h3>
        </div>
 
          
        </div>
    </section>
  );
};

export default Adventure;
