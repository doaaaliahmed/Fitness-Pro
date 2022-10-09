import style from  './UI.module.css';

const OrangeBtn =(props)=>{
    const classes = style.orangeBtn + ' ' + props.className;
    return <button className={classes}  onClick={props.onClick}>{props.children} </button>
    
}

export default OrangeBtn;