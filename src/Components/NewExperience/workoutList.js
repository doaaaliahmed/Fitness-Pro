import style from "./WorkoutList.module.css";
import weight from '../images/weight.svg';
import ballSVG from '../images/ballSVG.svg';
import stopwatch2 from '../images/stopwatch2.svg';
const WorkoutList = () => {
  return (
    <div className={style.workoutsSectionLists}>
      <article className={style.workoutsListItem}>
        <div className="workouts-img">
            <img src={weight} alt=""/>
        
        </div>
        <h4 className={style.workoutsArticleTitle}>
          Keep track of calories and macros
        </h4>
        <p className={style.workoutsArticleInfo}>
          Fitness Pro helps track your workouts, get better results, and be the
          best version of you. Less thinking!
        </p>
      </article>

      <article className={style.workoutsListItem}>
        <div className="workouts-img">
        <img src={ballSVG} alt=""/>
        </div>
        <h4 className={style.workoutsArticleTitle}>
          Access all premium class of Fitness Pro
        </h4>
        <p className={style.workoutsArticleInfo}>
          Fitness Pro helps track your workouts, get better results, and be the
          best version of you. Less thinking!
        </p>
      </article>

      <article className={style.workoutsListItem}>
        <div className="workouts-img">
          <img src={stopwatch2} alt=""/>
        </div>

        <h4 className={style.workoutsArticleTitle}>
          Keep track of calories and macros
        </h4>
        <p className={style.workoutsArticleInfo}>
          Fitness Pro helps track your workouts, get better results, and be the
          best version of you. Less thinking!
        </p>
      </article>
    </div>
  );
};

export default WorkoutList;
