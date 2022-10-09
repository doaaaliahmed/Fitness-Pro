import style from './HowToUseList.module.css';

const HowToUseList=()=>{

    const list = [
        {id:'1',num : '01', title:'Intuitive and clean design'},
        {id:'2',num : '02', title:'An exercise in simplicity'},
        {id:'3',num : '03', title:'The most popular workouts'},
    ];

   

    return <div className={style.listSec}>
        {list.map(l=> 
       
    <article className={style.listItem} key={l.id}>
      <span className={`${style['numList'+l.id]}`}>{l.num}</span>
      <h4 className={style.listTitle}>
        {l.title}
      </h4>
      <p className={style.listPar}>
        Track your workouts, get better results, and be the best version
        of you.
      </p>
    </article>
)}
   
  </div>
}

export default HowToUseList;