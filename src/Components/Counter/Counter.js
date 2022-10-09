import style from './Counter.module.css';
import userGreen from '../images/user-green.svg';
import facebook from '../images/facebook.svg';
import electric from '../images/electrical-plug.svg';
import flag from '../images/flag.svg';
import HeadingOne from '../UI/HeadingOne';
import Paragraph from '../UI/Paragraph';


const Counter = ()=>{
    const list = [
        {img : userGreen , count : "1m" , title :"Happy Users"},
        {img : electric , count : "1.2m" , title :"Downloads"},
        {img : flag , count : "50+" , title :"Countries"},
        {img : facebook , count : "900k+" , title :"Likes on Facebook"},
    ]

    return (
        <section className={style.countSec}>
            {list.map(e=> 
            <article className={style.workoutsListItem} key={e.title}>
                <div className={style['workouts-img']}>
                    <img src={e.img} alt=""/>
                </div>
            <HeadingOne>{e.count}</HeadingOne>
            <div className={style.information}>
                <p className={style.subTitle}>{e.title}</p>
                <Paragraph className={style.description}>Stacks is a production-ready library of stackable content blocks built in React Native.</Paragraph>
                </div>
            </article>
                )}

        </section>
    )

}

export default Counter;