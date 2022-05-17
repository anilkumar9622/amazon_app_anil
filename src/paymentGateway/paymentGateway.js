import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
class PaymentGateway extends Component {

    state = {
      amount: 0
    };
  
    constructor() {
      super()
      this.changeAmount = this.changeAmount.bind(this);
      this.openCheckout = this.openCheckout.bind(this);
    }
  
    changeAmount(e) {
      this.setState({amount: (e.target.value * 100)})
    }
  
    openCheckout() {
      const options = {
        "key": "rzp_test_zXe8Zj5pFioi7C",
        "amount": this.state.amount, // 2000 paise = INR 20, amount in paisa
        "name": "Aryan",
        "description": "Purchase Description",
        "handler": function (res){
            // buddies this is the ID and same ID you can find out in to Razorpay account
          alert(res.razorpay_payment_id);
        },
        "prefill": {
          "name": "amazon",
          "email": "abhi@wrocus.com"
        },
        "notes": {
          "address": "Hello World"
        },
        "theme": {
          "color": "#F37254"
        }
      };
      
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
    
    render () {
      return (
        <div>
          <input type='text' onChange={ this.changeAmount } />
          <button onClick={this.openCheckout} style={{color:'black'}}>Pay Rs.</button> 
        </div>
      )
    }
  }

  export default PaymentGateway
  