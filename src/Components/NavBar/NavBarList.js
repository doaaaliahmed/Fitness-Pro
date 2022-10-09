import style from "./NavBarList.module.css";
import menuVideo from './images/menu-video.svg';
import menuClass from './images/menu-class.svg';
import { useState } from "react";

const NavBarList = (props) => {
  const navlist = ["Features", "Pricing", "Download", "Class", "Lifestyle"];
  const [classHidden , setClassHidden] = useState(false);
  const classClickHandler = ()=>{
    return classHidden ? setClassHidden(false) : setClassHidden(true)
  }

  return (
    <ul
      className={
        !props.isHidden ? style.navButtonContainer : style.navContainer
      }
    >
      {navlist.map((e) =>
        e === "Class" ? (
          <li className={`${style.navList} ${style.classList}`} key={e} onClick={classClickHandler}>{e}  
            {classHidden && <ul className={style.classContainer}>
              <li>
                <a href="google.com" className={style.classLink} >
                  <span ><img src={menuVideo} alt=""/></span>Program Videos</a>
              </li>
              <li>
                <a href="google.com" className={style.classLink}>
                <span ><img src={menuClass} alt=""/></span>Premium Class</a>
              </li>
            </ul>}
          </li>
        ) : (
          <li className={style.navList} key={e}>
            <a href="google.com" className={style.navLink}>
              {e}
            </a>
          </li>
        )
      )}
    </ul>
  );
};

export default NavBarList;
