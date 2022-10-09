import style from  './UI.module.css';

const WhiteBtn =(props)=>{
    const classes = style.whiteBtn + ' ' + props.className;
    return <button className={classes}  onClick={props.onClick}>{props.children} </button>
    
}

export default WhiteBtn;