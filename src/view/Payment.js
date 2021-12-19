import './Payment.css';
import Button from './../components/ui/Button';
import Record from '../components/ui/Record';
import {useDispatch,useSelector} from 'react-redux';
import {uiAction} from './../reduxStore/ui_slice';
import { showAction } from '../reduxStore/show_slice';


const Payment = () => {
  const dispatch = useDispatch();
  const showSelected = useSelector(state=>state.show.showSelected)
  const billToPay = useSelector(state => state.show.currentShowBill)
  const serviceTax = useSelector(state => state.show.serviceTax)
  const SwachhBharatCess = useSelector(state => state.show.SwachhBharatCess)
  const KrishiKalyanCess = useSelector(state => state.show.KrishiKalyanCess)
  const totalAmount = useSelector(state => state.show.totalAmount)

  const cancelHandler = ()=>{
    dispatch(uiAction.togglePaymentPopup());
  }

  const payHandler = ()=>{
    
      dispatch(showAction.bookSeat());
      dispatch(uiAction.toggleNotification(showSelected));
      dispatch(uiAction.togglePaymentPopup());
      dispatch(showAction.showSelectedShow(""))
      
  }

  return (
    <div className="paymentContainer">
        <div className="paymentBill">
            <h1 className="title">Current Order Details</h1>
            <Record label="Amount:" amount={billToPay}></Record>
            <Record label="Service Tax @14%:" amount={serviceTax}></Record>
            <Record label="Swachh Bharat Cess @0.5%:" amount={SwachhBharatCess}></Record>
            <Record label="Krishi Kalyan Cess @0.5%" amount={KrishiKalyanCess}></Record>
            <Record label="Total Amount:" amount={totalAmount} className="total"></Record>
        </div>
        <div className="buttonSection">
            <Button onClick={cancelHandler}>Go Back</Button>
            {showSelected !== "" && <Button onClick={payHandler}>Pay and Book Now</Button>}
        </div>
        {/* <Toggle className="toggle" id="toggle" onClick={themeHandler}>Dark Mode</Toggle> */}
    </div>
  );
}

export default Payment;