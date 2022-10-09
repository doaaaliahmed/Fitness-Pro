import Section from "../UI/Section";
import style from './FinalSection.module.css';
import HeadingOne from "../UI/HeadingOne";
import Paragraph from "../UI/Paragraph";
import OrangeBtn from "../UI/OrangeBtn";

const FinalSection = ()=>{
    return (
        <Section className={style.finalBox}>
            <div className={style.titleSec}>
            <p className={style.subtitle}>TRY IT FREE FOR 14 DAYS 🎾</p>
        <HeadingOne className={style.title}>Anywhere you want. Anytime you want.</HeadingOne>
        <Paragraph className={style.par}>
        Get started with two free weeks of unlimited yoga, fitness, and meditation classes. Cancel anytime.
        </Paragraph>
        <OrangeBtn>Start free trail</OrangeBtn>
      </div>

        </Section>
    )
}

export default FinalSection;