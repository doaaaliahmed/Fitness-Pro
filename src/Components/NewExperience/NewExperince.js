import style from './NewExperince.module.css';
import HeadingTwo from '../UI/HeadingTwo';
import WorkoutList from './workoutList';

const NewExperince = ()=>{

    return <section className= {style.newWorkoutsSection}>
      <span className={style.workoutsSectionSubTitle}>
        NEW WORKOUTS ADDED EVERY WEEK
      </span>
      <HeadingTwo >
        A new fitness experience for everyone
      </HeadingTwo>
      <WorkoutList></WorkoutList>
    </section>

}

export default NewExperince;