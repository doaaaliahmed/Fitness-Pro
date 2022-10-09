import style from  './UI.module.css';

const HeadingTwo =(props)=>{
    const classes = style.headTwo + ' ' + props.className;
    
    return <h2 className={classes}>{props.children} </h2>
    
}

export default HeadingTwo;