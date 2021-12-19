import './Card.css';
import {useSelector} from 'react-redux';

const Card = (props) => {
    const darkMode = useSelector(state=>state.ui.darkMode)
    const classes = 'card '+ props.className;
  return (
    <div className={classes}>
        <div className={"blur " + (darkMode ? "dark" : "light")} >
            {props.children}
        </div>
    </div>
  );
}

export default Card;