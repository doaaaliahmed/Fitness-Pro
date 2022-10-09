import { useState , useEffect} from "react";
import style from "./NavBar.module.css";
import closeButton from "./images/icon-close.svg";
import hamburgerIcon from "./images/icon-hamburger.svg";
import NavBarList from "./NavBarList";
import Logo from './images/LogoLight';
import WhiteBtn from "../../Components/UI/WhiteBtn";


const NavBar = () => {

  const [navButton, setNavButton] = useState({
    value: hamburgerIcon,
    isOpen: true,
  });

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1200px)").matches
  )

  const navButtonHandler = () => {
    if (navButton.isOpen === false)
      setNavButton({ value: hamburgerIcon, isOpen: true });
    else {
      setNavButton({ value: closeButton, isOpen: false });
    }
  };

  useEffect(() => {
    window
    .matchMedia("(max-width: 1200px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  return (
    <nav className={style.navBar}>
      <div className={style.logo}>
        <Logo/>
      </div>
      {matches && 
      <button className={style.navListButton}>
      <img
        src={navButton.value}
        alt="hamburger-icon"
        onClick={navButtonHandler}
      />
      {!navButton.isOpen && (
        <NavBarList isHidden={navButton.isOpen}></NavBarList>
        
      )}
      </button>
      }
      {
        !matches && 
        <NavBarList isHidden={navButton.isOpen}></NavBarList>
      }
       {
        !matches && 
        <WhiteBtn className={style.bookBtn}>Get free trail</WhiteBtn>
      }
    </nav>
  );
};

export default NavBar;
