import Section from "../UI/Section";
import HeadingOne from "../UI/HeadingOne";
import Paragraph from "../UI/Paragraph";
import style from "./StartFreeSection.module.css";
import bag from "../images/bag.png";
import bottle from "../images/bottle-black.png";
import gloves from "../images/gloves.png";
import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import OrangeBtn from "../UI/OrangeBtn";

const StartFreeSection = (props) => {
  const headerSec = useRef();
  const mainImg = useRef();
  const glovesImg = useRef();
  const bottleImg = useRef();

  let options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  let callback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      gsap.to(mainImg.current, { opacity: 1, duration: 1 });
      gsap.to(glovesImg.current, { opacity: 1, duration: 2, delay: 1 });
      gsap.to(bottleImg.current, { opacity: 1, duration: 2, delay: 1 });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const currentTarget = headerSec.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [headerSec, options]);

  return (
    <Section>
      <div className={style.infoSec} ref={headerSec}>
        <HeadingOne>Train smarter, get stronger.</HeadingOne>
        <Paragraph>
          Fitness Pro helps track your workouts, get better results, and be the
          best version of you. Less thinking, more lifting 🔥🏀
        </Paragraph>
        <div className={style.btnSec}>
          <OrangeBtn>Start free trail</OrangeBtn>
        </div>
      </div>

      <div className={style.imgSection}>
        <div className={style.images}>
        <div className={style.mainImg}    ref={mainImg}>
          <img
            src={bag}
            alt="watch"
            className={style.mainImg}
          
          ></img>
          </div>
           <div className={style.bottle}  ref={bottleImg}>
          <img
            src={bottle}
            alt="bottle"
            
          ></img>
          </div>
          <div className={style.gloves}  ref={glovesImg}>
          <img
            src={gloves}
            alt="ball"          
          ></img>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StartFreeSection;
