import './Button2.css';

const Button2 = (props) => {
    const classes = 'link '+ props.className;
    return (
        <button className={classes} value={props.value} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button2;