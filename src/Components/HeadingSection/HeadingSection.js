import Section from "../UI/Section";
import HeadingOne from "../UI/HeadingOne";
import Paragraph from "../UI/Paragraph";
// import ImgSection from "../UI/ImgSection";
import style from "./HeadingSection.module.css";
import watch from '../images/black-watch.png';
import bottle from '../images/bottle.png';
import ball from '../images/ball.png';
import blackBall from '../images/ball-black.png';
import {useEffect, useRef , useMemo} from 'react';
import {gsap} from 'gsap';
import OrangeBtn from "../../Components/UI/OrangeBtn";
import WhiteBtn from "../../Components/UI/WhiteBtn";



const HeadingSection = (props) => {
  const headerSec= useRef();
  const mainImg = useRef();
  const ballImg = useRef();
  const bottleImg = useRef();
  const blackBallImg = useRef();


  let options = useMemo(()=>{
    return {
      root: null,
     rootMargin: '0px',
     threshold: 0.3
   }
     },[])

  let callback = (entries) => {
    const [entry] = entries;
    if(entry.isIntersecting){
      gsap.to(mainImg.current, {opacity: 1,duration: 1})
      gsap.to(ballImg.current, {opacity: 1, duration: 2 , delay:1})
      gsap.to(bottleImg.current, {opacity: 1,  duration: 2 , delay:1})
      gsap.to(blackBallImg.current, {opacity: 1,  duration: 2 , delay:1})
    
  }
  }

    useEffect(()=>{
      const observer = new IntersectionObserver(callback , options);
      const currentTarget = headerSec.current;
      if(currentTarget) observer.observe(currentTarget);

      return ()=>{
        if(currentTarget) observer.unobserve(currentTarget);

      }

    },[headerSec,options])
  
  return (
    <Section>
      <div className={style.infoSec} ref={headerSec}>
        <p className={style.subTitle}>TRAIN SMARTER. GET STRONGER</p>
        <HeadingOne>Simple fitness experience for everyone.</HeadingOne>
        <Paragraph>
          Track your workouts, get better results, and be the bestversion of
          you. Less thinking, more lifting.
        </Paragraph>
        <div className={style.btnSec}>
          <OrangeBtn>Download App</OrangeBtn>
          <WhiteBtn>Book a Class</WhiteBtn>
        </div>
      </div>
      {/* **************************************************************************** */}
      <div className={style.imgSection}>
        <div className={style.images}>
          <div className={style.mainImg} ref={mainImg}>
            <img src={watch} alt="watch" ></img>
            </div>
            
            <div className={style.bottle}  ref={bottleImg}>
            <img src={bottle} alt="bottle" ></img>
            </div>
           
            <div className={style.ball}  ref={ballImg}>
            <img src={ball} alt="ball" ></img>
            </div>
            <div className={style.blackBall} ref={blackBallImg}>
            <img src={blackBall} alt="black-ball" ></img> 
            </div>     
          </div>
    </div>
      
    </Section>
  );
};

export default HeadingSection;
