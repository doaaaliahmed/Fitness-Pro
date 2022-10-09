import HeadingTwo from '../UI/HeadingTwo';
import Paragraph from '../UI/Paragraph';
import style from './TrainersSection.module.css';
import Trainer from './Trainer';
import avatar1 from '../images/trainers/avatar-1.png';
import avatar2 from '../images/trainers/avatar-2.png';
import avatar3 from '../images/trainers/avatar-3.png';
import avatar4 from '../images/trainers/avatar-4.png';
import avatar5 from '../images/trainers/avatar-5.png';
import avatar6 from '../images/trainers/avatar-6.png';
import { useState } from 'react';
const TrainersSection=()=>{
    const yogaTrainer = [
        {img: avatar1 , name : 'Baron Toy' , type:'Yoga Master'},
        {img: avatar2 , name : 'Kacie Kiehn' , type:'Personal Trainer'},
        {img: avatar3 , name : 'Marcelino Hettinger' , type:'Boxer'},
        {img: avatar4 , name : 'Rosemarie Hintz' , type:'Business Analaytic'},
        {img: avatar5 , name : 'Syble Prohaska' , type:'Business Analaytic'},
        {img: avatar6 , name : 'Ila Reinger' , type:'Business Analaytic'}
    ];

    const fitnessTrainer = [
        {img: avatar2 , name : 'Kacie Kiehn' , type:'Personal Trainer'},
        {img: avatar3 , name : 'Marcelino Hettinger' , type:'Boxer'},
        {img: avatar4 , name : 'Rosemarie Hintz' , type:'Business Analaytic'},
        {img: avatar5 , name : 'Syble Prohaska' , type:'Business Analaytic'}  
    ];

    const gemTrainer = [
        {img: avatar5 , name : 'Syble Prohaska' , type:'Business Analaytic'} ,
        {img: avatar1 , name : 'Baron Toy' , type:'Yoga Master'},
        {img: avatar2 , name : 'Kacie Kiehn' , type:'Personal Trainer'},
        {img: avatar3 , name : 'Marcelino Hettinger' , type:'Boxer'}  
    ];

    const runTrainer = [
        {img: avatar5 , name : 'Syble Prohaska' , type:'Business Analaytic'},
        {img: avatar6 , name : 'Ila Reinger' , type:'Business Analaytic'}
    ];

    const [trainer,setTrainer] =useState(yogaTrainer);

    const yogaClickHandler=()=>{
        setTrainer(yogaTrainer)
    }   
    const fitnessClickHandler=()=>{
        setTrainer(fitnessTrainer)
    }
    const gemClickHandler=()=>{
        setTrainer(gemTrainer)
    }  
    const runClickHandler=()=>{
        setTrainer(runTrainer);
    }
    return <section>
        <div className={style.titleSec}>
            <HeadingTwo>Meet our pro trainers</HeadingTwo>
            <Paragraph className={style.par}>
                From all over the world, we select and provide you a team of seasoned trainers.
                 What's more, the 1-on-1 live practice mode helps you quickly get great results.
            </Paragraph>
        </div>
        <div className={style.container}>
        <button className={style.btn} onClick={yogaClickHandler}>Yoga</button>
        <button className={style.btn} onClick={fitnessClickHandler}>Fitness & Gem</button>
        <button className={style.btn} onClick={gemClickHandler}>Gymainstics</button>
        <button className={style.btn} onClick={runClickHandler}>Running</button>
        </div>

        <div className={style.trainersSec}>
            {trainer.map(e=><Trainer key={e.name} img={e.img} name={e.name} type={e.type}></Trainer>)}
        </div>

     

    </section>

}

export default TrainersSection;