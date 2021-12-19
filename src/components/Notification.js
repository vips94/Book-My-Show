import './Notification.css';

const Notification = (props) => {
  const classes = 'notification '+ props.className;
  return (
      <>
        <div className={classes}>
            {props.children}
        </div>
    </>
  );
}

export default Notification;