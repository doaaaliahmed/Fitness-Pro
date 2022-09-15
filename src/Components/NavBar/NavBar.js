import style from './NavBar.module.css';
import logo from '../images/logo-dark.svg';
import navBtn from '../images/icon-hamburger.svg';
import closeBtn from '../images/icon-close.svg';
import {useState} from 'react';
import DropdownMenu from './DropdownMenu'
;
const NavBar=()=>{
    const [navClick,setNavClick] = useState(false);

    const navClickHandler = ()=>{
        navClick ? setNavClick(false) : setNavClick(true);

    }


    return <nav className={style.nav}>

    <div className={style.logoBox}>
        <img src={logo} alt="logo" className={style.logo}></img>
    </div>
    <div className={style.navBox}>
        <button className={style.navBtn} onClick={navClickHandler}>
        {!navClick &&  <img src={navBtn} alt="navlist" ></img>}
        {navClick &&  <img src={closeBtn} alt="close" ></img>}
        {navClick && <DropdownMenu></DropdownMenu>}
            
        </button>
    </div>
            </nav>
}

export default NavBar;