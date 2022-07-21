import React, { useState } from 'react'
import './app.css'
import Drawer1 from './common/sidemenu/drawer1'
import Echo_alexa from './common/subsidemenu/pages/echo_alexa'
import Firelite from './common/subsidemenu/pages/firelite'
import Kindle from './common/subsidemenu/pages/kindle'
import { useRoutes } from 'react-router-dom';
import PrimeMusic from './common/subsidemenu/pages/primeMusic'
import PrimeVideo from './common/subsidemenu/pages/primeVideo'
import Audible from './common/subsidemenu/pages/audible'
import Signup1 from './Onboarding/Signup/signup1'
import Signin1 from './Onboarding/Signin/signin1'
import SignIn2 from './Onboarding/Signin/signin2'
// import Otp from './Onboarding/verification/otp'
import Home from './common/subsidemenu/pages/home'
import EchoBulb from './common/subsidemenu/pages/echoBulb'
import Cart from './common/subsidemenu/pages/cart'
import CartShow from'./common/Cart/cartShow'
import Popapp1 from './common/subsidemenu/dash/helper/popapp1'
import Addcart from './common/subsidemenu/pages/addcart'
import ItemsPay from './paymentGateway/itemsPay'
import axios from 'axios'
import { Spin } from 'antd'
import OtpVerification from './Onboarding/verification/otpVerification'
import EmailPhoneAssistance from './Onboarding/verification/emailPhoneAssistance'
import ResetPassword from './Onboarding/verification/resetPassword'
import TwoStepVerification from './Onboarding/verification/twoStepVerification'
import Share from './common/subsidemenu/dash/helper/share'
import Electronics from './common/subsidemenu/pages/electronics'
import PopSignin from './common/subsidemenu/dash/helper/popSignin'
function App() {

  const [loader, setLoader] = useState(false)


  axios.interceptors.request.use(
    function (config) {
    // Do something before request is sent
    
    //  console.log(">>>>>>>>>.......",config);
     if(config)  {setLoader(true)}
    // console.log("loader",loader);
    return config;

  }, function (error) {
  setLoader(false)
   
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  setLoader(false)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
  setLoader(false)

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },[]);

  const routes = useRoutes([
    {
      path: "/", element: <Home />
    },
    {
      path: "/popapp1", element: <Popapp1 />
    },
    {
      path: "/popSignin", element: <PopSignin />
    },
    {
      path: "/drawer1", element: <Drawer1 />
    },
    {
      path: "/echo_alexa", element: <Echo_alexa />
    },
    {
      path: "/firelite", element: <Firelite />
    },
    {
      path: "/kindle", element: <Kindle />
    },
    {
      path: "/audible", element: <Audible />
    },
    {
      path: "/electronics", element: <Electronics />
    },
    {
      path: "/primeVideo", element: <PrimeVideo />
    },
    {
      path: "/primeMusic", element: <PrimeMusic />
    },
   {
      path: "/signup1", element: <Signup1 />
    },
    {
      path: "/signin1", element: <Signin1 />
    },
    {
      path: "/signin2", element: <SignIn2 />
    },
    {
      path: "/twoStepVerification", element: <TwoStepVerification />
    },
    {
      path: "/emailPhoneAssistance", element: <EmailPhoneAssistance />
    },
    {
      path: "/otpVerification", element: <OtpVerification />
    },
    {
      path: "/resetPassword", element: <ResetPassword />
    },
    {
      path: "/share", element: <Share />
    },
    {
      path: "/echoBulb", element: <EchoBulb />
    },
    {
      path: "/cart", element: <Cart />
    },
   
    {
      path: "/addcart", element: <Addcart />
    },
    {
      path: "/cartShow", element: <CartShow />
    },
    {
      path: "/itemsPay", element: <ItemsPay />
    },
  ])

  return(<>
  { routes}
  {loader && <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center', position:'absolute', margin:'220px 560px'}}>
<div><img src="http://media.giphy.com/media/s4KqhlPU9Ypnq/giphy.gif" style={{width:'200px', height:'200px'}}/></div><br />
<div><h2>Loading...</h2></div>
  
    
    </div>}
  
  
  
  
  </>


  )
  
 
 
}


export default App;

