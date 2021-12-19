import './App.css';
import Card from './components/ui/Card';
import Home from './view/Home';
import Payment from './view/Payment';
import Show from './view/Show';
import {useSelector} from 'react-redux';


const App = () => {
  const paymentPopup = useSelector(state=>state.ui.paymentPopup)
  const selecedShow = useSelector(state=>state.show.showSelected)
  const darkMode = useSelector(state=>state.ui.darkMode)
  return (
    <div className={"app "+(darkMode ? "dark" : "light")}>
        {paymentPopup &&  <Card className="billpayment">
          <Payment/>
        </Card>}
        {selecedShow!=="" && <Card className="select_show">
           <Show/>
        </Card>
        }
        <Card className="">
          <Home/>
        </Card >
        
    </div>
  );
}

export default App;
