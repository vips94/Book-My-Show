import './Toggle.css';
import {useSelector} from 'react-redux';

const Toggle = (props) => {
    const checked = useSelector(state=>state.ui.darkMode)
    const classes = 'switch '+ props.className;

  return (
        <>
        <label className={classes}>
            <input type="checkbox" className="toggler" defaultChecked={checked} onClick={props.onClick} />
            <span className="slider">
                <p className="tag">{props.children}</p>
            </span>
        </label>
        </>
  );
}

export default Toggle;