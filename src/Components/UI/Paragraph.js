import style from  './UI.module.css';

const Paragraph =(props)=>{
    const classes = style.paragraph + ' ' + props.className;   
    return <p className={classes}>{props.children} </p> 
}

export default Paragraph;