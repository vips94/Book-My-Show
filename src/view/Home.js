import './Home.css';
import Button from './../components/ui/Button';
import Button2 from '../components/ui/Button2';
import Toggle from '../components/ui/Toggle';
import {useDispatch, useSelector} from 'react-redux';
import {uiAction} from '../reduxStore/ui_slice';
import {showAction} from './../reduxStore/show_slice';
import Notification from '../components/Notification';
import { useEffect } from 'react';



const Home = () => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification)
    const message = useSelector(state => state.ui.notificationMessage)
    useEffect(()=>{
        if(notification)
            setTimeout(()=>{
                dispatch(uiAction.toggleNotification());
            },3000)
    },[notification,dispatch])

    const revenueHandler = ()=>{
        dispatch(uiAction.togglePaymentPopup());
        dispatch(showAction.totalRevenue())
    }

    const showHandler = (e)=>{
        dispatch(showAction.showSelectedShow(e.target.value))
    }

    const themeHandler = ()=>{
        dispatch(uiAction.toggleTheme());
    }

  return (
    <div className="homeContainer">
        <h1>BOOK MY SHOW</h1>
        <Button className="revenue" onClick={revenueHandler}>Revenue</Button>
        <h2>Select the show</h2>
        <ul className="list">
            <li>
                <Button2 onClick={showHandler} value="Show1">Show 1</Button2>
            </li>
            <li>
                <Button2 onClick={showHandler} value="Show2">Show 2</Button2>
            </li>
            <li>
                <Button2 onClick={showHandler} value="Show3">Show 3</Button2>
            </li>
        </ul>
        <Toggle className="toggle" id="toggle" onClick={themeHandler}>Dark Mode</Toggle>

        {notification && <Notification className="bar">! success : {message} tickets booked</Notification>}
    </div>
  );
}

export default Home;