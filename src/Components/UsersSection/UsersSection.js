import style from './UsersSection.module.css';
import rotashow from "../images/rotashow.svg";
import waves from "../images/waves.svg";
import goldline from "../images/goldlines.svg";
import travellers from "../images/travelers.svg";
import velocity from "../images/velocity9.svg" ;
import arrow from '../images/arrow-down-solid.svg';


const UsersSection = ()=>{
 
    const images = [rotashow , waves, goldline , travellers , velocity];
    const arrowClickHandler = (e)=>{
      return (document.querySelector('#userSec').scrollIntoView({'behavior' : 'smooth'}));
      // return userSec.current.parentElement.nextSibling.getBoundingClientRect().top;
    
    }
    return (
    <section className={style.trustSec}>   
      <button className={style.arrowBtn} onClick={arrowClickHandler}>
        <img src={arrow}  className={style.arrow} alt="" />
      </button>
      <h2 className={style.trustTitle}>Trusted by more than 2M users worldwide</h2>
      <div className={style.trustList} id="userSec">
        {images.map((e,i)=> <img src={e} className={style.imgList} alt="" key={`${e}${i}`}/>)}

      </div>
    
    </section>
    )
}

export default UsersSection;