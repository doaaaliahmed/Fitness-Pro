import HeadingTwo from '../UI/HeadingTwo';
import WorksList from './WorksList';
import style from './WorksSection.module.css';


const WorksSection = ()=>{

    return(
        <section className={style.worksSec} >
            <HeadingTwo >How it works</HeadingTwo>
            <p className={style.worksInfo}>
                Stacks is a production-ready library of stackable content blocks built
                in React Native.
            </p>
            <WorksList></WorksList>
            
    </section>
    )

}

export default WorksSection;