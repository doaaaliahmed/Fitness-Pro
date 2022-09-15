import style from './DropdownMenu.module.css';

const DropdownMenu = ()=>{
   

    return <ul className={style.dropdownList}>
        <li className={style.navList}>Features</li>
        <li className={style.navList}>pricing</li>
        <li className={style.navList}>Download</li>
        <li className={style.navList}>Class</li>
        <li className={style.navList}>Lifestyle</li>
        <button className={style.freeBtn}>Get free trail</button>
        </ul>

}

export default DropdownMenu;