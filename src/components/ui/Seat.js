import React,{ useState } from 'react';
import './Seat.css';

const Seat = (props) => {
    const[checked,setChecked] = useState(props.isBooked)
    const classes = 'seat '+ props.className;
  return (
      <>
    <label className={classes}>
        <input type="checkbox" className="seat_toggler" defaultChecked={checked}
        onChange={() => setChecked(!checked)} disabled={!props.disabled} onClick={props.onClick}/>
        <span className="seat_slider">
            <p className="seat_tag">{props.children}</p>
        </span>
    </label>
    </>
  );
}

export default Seat;