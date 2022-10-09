import style from "./WorksList.module.css";
import download from "../images/download.svg";
import whistle from "../images/whistle.svg";
import medal from "../images/medal.svg";
import stopwatch from "../images/stopwatch.svg";

const WorksList = () => {
  const lists = [
    {key : 1, id: 'one', img: download , title: "Download" },
    {key : 2 ,  id: 'two', img: whistle , title: "Choose your trainner" },
    { key : 3 ,id: 'three', img: medal , title: "Set the goals" },
    {key : 4, id: 'four', img: stopwatch , title: "Workout time" },
  ];


  return (
    <div className={style.worksSectionLists}>
      {lists.map((l) => (
        <article className={style.articleListItem} key={l.id} >
          <div className={`${style.img} ${style[l.id]}`}>
            <img src={l.img} alt="" />
          </div>
          <span className={style.step}>step {l.key}</span>
          <h4 className={style.articleTitle}>{l.title}</h4>
          <p className={style.articleInfo}>
            Fitness Pro tracks your workouts, get better results, and be the
            best version of you.
          </p>
        </article>
      ))}
    </div>
  );
};

export default WorksList;
