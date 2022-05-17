import logo from './logo.svg';
import './itemsPay.css';
import PaymentGateway from './paymentGateway';
import { Helmet } from 'react-helmet';
import { Button } from 'antd';


function ItemsPay() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://rzp.io/l/i1kL91x" style={{color:''}}>
        <Button  style={{ fontWeight: '', width: '280px', height: '34px', borderRadius: '5px', background: '#face2f', marginBottom: '10px' }}>make Payment</Button>
</a>
        <br/>
        <br/>
        <br/>
        <PaymentGateway/>
      </header>
    </div>
  );
}

export default ItemsPay;
