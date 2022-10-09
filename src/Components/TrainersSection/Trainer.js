import style from './TrainersSection.module.css';


const Trainer = (props)=>{

    return <figure className={style.trainer}>
        <img src={props.img} alt="" className={style.trainerImg}></img>
        <figcaption>
            <h3>{props.name}</h3>
            <p>{props.type}</p>
        </figcaption>



        </figure>
}

export default Trainer;