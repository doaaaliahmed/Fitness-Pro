import style from  './UI.module.css';

const HeadingOne =(props)=>{
    const classes = style.headOne + ' ' + props.className;
    
    return <h1 className={classes}>{props.children} </h1>
    
}

export default HeadingOne;