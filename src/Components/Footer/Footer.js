import style from './Footer.module.css';
import LogoLight from '../NavBar/images/LogoLight';
const Footer = ()=>{

    return    ( 
    <footer>
        <div className={style.mainFooter}>
    <div className={`${style["col-1"]} ${style.footerList}`}>
      <LogoLight/>
    </div>
    <div className={`${style["col-2"]} ${style.footerList}`}>
      <button className={style.footerBtn}>FOOTER NAV</button>
    </div>
    <div className={`${style["col-3"]} ${style.footerList}`}>
    <h4>CONTACT</h4>
    <p className={style.footerPar}>43252 Borer Mountains</p>
    <p className={style.footerPar}>Zackerychester</p>
    <p className={style.footerPar}>Bahamas</p>
    <p className={style.footerPar}>732-528-4945</p>
    </div>
    <div className={`${style["col-4"]} ${style.footerList}`}>
      <h4>NEWSLETTER</h4>
      <p className={style.footerPar}>Subscribe our newsletter to get more free design course and resource.</p>
      <div className={style.form}>
      <input type="email" placeholder='Enter your email'/>
    </div>
    </div>
    </div>
    <div className={style.subFooter}>
        <p>Copyright © 2021 UI8 LLC. All rights reserved</p>
    </div>
  </footer>)

}
export default Footer;