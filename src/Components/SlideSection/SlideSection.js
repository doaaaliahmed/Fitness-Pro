import style from "./SlideSection.module.css";
import goldline from "../images/goldlines.svg";
import travellers from "../images/travelers.svg";
import velocity from "../images/velocity9.svg";
import HeadingTwo from "../UI/HeadingTwo";

// import gsap from "gsap";
// import { useState } from "react";

const SlideSection = () => {
 
  const slideItems = [
    {
      // name:slide0,
      img: velocity,
      title:
        "The greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect.",
    },
    {
      // name:slide1,
      img: travellers,
      title:
        " The best of all the workout apps I have tried on iOS. I have used Fitness Pro for more than a year now. It is intuitive and clean, awesome app.",
    },
    {
      // name:slide2,
      img: goldline,
      title:
        "The greatest fitness app. It's clear the makers behind this thing use it every week, because it is so perfect.",
    },
  ];

  // const rightBtnHandler =()=>{
  //   for(let i= 0 ; i < 3 ; i++){
    
  //       return document.getElementById(`card-${i}`).nextElementSibling.scrollIntoView({'behavior' : 'smooth'});
 
  //   }
  // }

  // const leftBtnHandler = ()=>{
  //   for(let i = 1 ; i <= 0; i--){
  //   return document.getElementById(`card-${i}`).previousElementSibling.scrollIntoView({'behavior' : 'smooth'});
  //   }
  // }
 

  return (
    <section className={style.slideSec}>
   
      <div className={style.slideContainer}>
        <div className={style.slides}>
          {slideItems.map((slide,index) => (
            <div className={`${style.slideItem} ${style['slideItem'+[index]]}`} key={`card-${index}`}>
              <img src={slide.img} alt="" />
              <HeadingTwo className={style.title}>{slide.title}</HeadingTwo>
              <p>Dorthy Runolfsdottir</p>
              <p className={style.decription}>Lead Visual Designer at UI8</p>
            </div>
          ))}
        </div> 
      </div>

      {/* <div className={style.slidesBtn}>
        <button
          // onClick={leftBtnHandler}
          className={`${style.leftBtn} ${style.btn}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            fill="none"
            viewBox="0 0 14 9"
          >
            <path
              fill-rule="evenodd"
              d="M4.909.265a1 1 0 0 0-1.413.057l-3.231 3.5a1 1 0 0 0 0 1.357l3.231 3.5a1 1 0 0 0 1.47-1.357L3.284 5.5H13a1 1 0 1 0 0-2H3.284l1.682-1.822A1 1 0 0 0 4.909.265z"
              fill="#23262f"
            ></path>
          </svg>
        </button>
        <button
          // onClick={rightBtnHandler}
          className={`${style.rightBtn} ${style.btn}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            fill="none"
            viewBox="0 0 14 9"
          >
            <path
              fill-rule="evenodd"
              d="M9.091.265a1 1 0 0 1 1.413.057l3.231 3.5a1 1 0 0 1 0 1.357l-3.231 3.5a1 1 0 0 1-1.47-1.357L10.716 5.5H1a1 1 0 1 1 0-2h9.716L9.034 1.678A1 1 0 0 1 9.091.265z"
              fill="#23262f"
            ></path>
          </svg>
        </button>
      </div> */}

    </section>
  );
};

export default SlideSection;
