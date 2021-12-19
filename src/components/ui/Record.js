import './Record.css';

const Record = (props) => {
    const classes = 'record '+ props.className;
return (
    <div className={classes}>
        <p>{props.label}</p>
        <h2>{props.amount}</h2>
        <h2 className="rs">INR</h2>
    </div>
  );
}

export default Record;