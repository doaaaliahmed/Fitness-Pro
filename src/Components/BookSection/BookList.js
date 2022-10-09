import style from './BookList.module.css';
import medal from '../../Components/images/medal.svg';
import user from '../../Components/images/user.svg';
import ligthen from '../../Components/images/lightning.svg';
const BookList = ()=>{

    const lists = [
        {id: 'user'   ,img : user, title:'For the beginners'},
        {id: 'medal'   ,img : medal, title:'Advanced classes'},
        {id: 'lightning'   ,img : ligthen, title:'Premium (limited)'}
    ]

    return <ul className={style.bookSectionLists}>
        {lists.map(l=> 

    <li className={style.bookList} key={l.id}>
      <div className={`${style.bookImgList} ${style[l.id]}`}>
        <img src={l.img} alt="" />
      </div>
      <div className={style.bookInfoList}>
        <h3>{l.title}</h3>
        <p>You never workout before, it's now a good start</p>
      </div>
    </li>
        )}


    </ul>

}

export default BookList;