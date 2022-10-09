import style from  './UI.module.css';

const Section =(props)=>{
    const classes = style.section + ' ' + props.className;   
    return <section className={classes}>{props.children} </section> 
}

export default Section;