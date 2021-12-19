import './Show.css';
import Button from '../components/ui/Button';
import Seat from '../components/ui/Seat';
import {useDispatch,useSelector} from 'react-redux';
import {showAction} from './../reduxStore/show_slice';
import {uiAction} from '../reduxStore/ui_slice';
import Button2 from '../components/ui/Button2';
import { v4 as uuidv4 } from 'uuid';


const Show = () => {
    const dispatch = useDispatch();
    const selectedShow = useSelector(state => state.show.showSelected);
    const seatsList = useSelector(state => state.show.seats)    

    const showHandler = (e)=>{
        dispatch(showAction.showSelectedShow(e.target.value))
    }

    const paymentHandler = ()=>{
        dispatch(uiAction.togglePaymentPopup());
        dispatch(showAction.showBookingBill());
    }

    const bookSeatHanlder = (category,seatNo)=>{
        const bookedSeat = {
            show:selectedShow,
            category:category,
            seatNo:seatNo
        }
        dispatch(showAction.selectSeat(bookedSeat));
    }

    // const themeHandler = ()=>{
    //     dispatch(uiAction.toggleTheme());
    // }
  return (
    <div className="showContainer">
        <Button className="showButton" onClick={showHandler} value="">Go Back</Button>
        <div className="SelectShow">
            <h1>Select Show: </h1>
            <ul className="list">
                <li>
                    <Button2 className="" onClick={showHandler} value="Show1">Show 1</Button2>
                </li>
                <li>
                    <Button2 className="" onClick={showHandler} value="Show2">Show 2</Button2>
                </li>
                <li>
                    <Button2 className="" onClick={showHandler} value="Show3">Show 3</Button2>
                </li>
            </ul>
        </div>
        <h2>{selectedShow}</h2>
        <h3>Select Seats and proceed for payments</h3>
        <div className="seatingSection">
            <ul className="platinum">
                {
                    seatsList[0].list.map((item)=>{
                        return ( 
                        <li key={uuidv4()}>
                            <Seat isBooked={item.isBooked} disabled={item.isAvilable} onClick={()=>{bookSeatHanlder(0,item.seatNo)}}>A{item.seatNo}</Seat>
                        </li>)
                    })
                }
            </ul>
            <ul className="gold">
            {
                seatsList[1].list.map((item,id)=>{
                    return ( 
                    <li key={uuidv4()}>
                        <Seat isBooked={item.isBooked} disabled={item.isAvilable} onClick={()=>{bookSeatHanlder(1,item.seatNo)}}>B{item.seatNo}</Seat>
                    </li>)
                })
            }
            </ul>
            <ul className="silver">
            {
                seatsList[2].list.map((item,id)=>{
                    return ( 
                    <li key={uuidv4()}>
                        <Seat isBooked={item.isBooked} disabled={item.isAvilable} onClick={()=>{bookSeatHanlder(2,item.seatNo)}}>C{item.seatNo}</Seat>
                    </li>)
                })
            }
            </ul>
        </div>
        <div className="paymentSection">
            <Button>Other Shows</Button>
            <Button onClick={paymentHandler}>Proceed Next</Button>
        </div>
        {/* <Toggle className="toggle" id="toggle" onClick={themeHandler}>Dark Mode</Toggle> */}
    </div>
  );
}

export default Show;