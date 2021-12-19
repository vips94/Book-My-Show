import './Button.css';

const Button = (props) => {
    const classes = 'mybutton '+ props.className;
  return (
      <>
        <button className={classes} value={props.value} onClick={props.onClick}>
            {props.children}
        </button>
    </>
  );
}

export default Button;