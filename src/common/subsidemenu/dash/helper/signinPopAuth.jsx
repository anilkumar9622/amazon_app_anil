import React, { useEffect, useState } from 'react';
import './Style.css'
import {  Popover } from 'antd';
// import { Content } from 'antd/lib/layout/layout';
import './subheader.css'
import jwt_decode from 'jwt-decode';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SigninPopAuth() {
  const {state} = useLocation([]);
  const navi = useNavigate()

  const[user, setUser] = useState('signin');
  // let user1 = state.password.value;
  // setUser(user1);
  // console.log("aaaaaaaaaaaaaa",user);

    const token = sessionStorage.getItem("user");
    try{
  var decoded = jwt_decode(token);
  
    }catch(err){
}

useEffect(() => {
setUser(decoded?.user.name);

}, [])

  // if (token !== "undefined") {
  //   // Set auth token header auth
  //   setAuthToken(token);
  //   // Decode token and get user info and exp
  
  // }

  // console.log('token>>>>', decoded);

  // const username = () => { decoded.useremail.name} 

  // const logout = () => {
  //   sessionStorage.clear();
  //   window.location.href = '/';
  //   console.log('>>>>>>>>>>>>logout',logout)
  // }
  const logout = (e) => {

    e.preventDefault();
    const token = sessionStorage.getItem('token');

    axios.get("http://localhost:8080/logout",{ headers: {"w_auth" : `${token}`} })

        .then(response => {
            const res = response.data
            console.log(">>>>>>>>logout", res);

            if (response) {
              sessionStorage.clear();
              window.location.href = '/';
              
            }
            else {
                alert('invalid ')
            }
           } )
 .catch(error => {
            console.log("error", error)
        });

}

  const text1 = (
    <div style={{ width: "100%", display: "grid", marginTop: '10px' }}>
      <button style={{ placeSelf: "center", width: "14em", height: "33px", background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: '1px solid #c89411' }} >
        <a id='pop' href='/signin1'>  Sign in</a>
      </button>
      <span style={{ placeSelf: 'center', fontSize: '0.8em', marginBottom: '10px' }}>New Customer?
        <a id='pop' style={{ color: "blue", }} href="/signup1">&nbsp;Click here</a>
      </span>
    </div>

  )
  const text2 = (
    <div style={{ width: "150px", display: "grid" }}>
      <button href='/signin1' style={{ placeSelf: "center", width: "8em", height: "36px", marginTop: '10px', background: "linear-gradient(to bottom,#f8e3ad,#EEBA37)", border: '1px solid #c89411' }} >
        <a id='over' href='/signin1' >  Sign in</a>
      </button>
      <span style={{ placeSelf: 'center', fontSize: '0.8em', marginTop: '10px', }}>New Customer?
        <a id='over' style={{ color: "blue" }} href="/signup1">&nbsp;Click here</a>
      </span>
    </div>

  )

  const content = (
    <div style={{ width: '450px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '225px 225px', gridTemplateRows: '300px' }}>
        <div style={{ borderRight: "1px solid gray" }} >
          <div style={{ display: 'flex', flexDirection: 'column', gap: "2px", paddingTop: '10px', paddingLeft: "20px" }}>

            <h4>Your List</h4>

            <a style={{ color: "#444" }} href='#'> Create a Wishlist</a>

            <a style={{ color: "#444" }} href='#'>Wish from any website</a>
            <a style={{ color: "#444" }} href='#'>Baby website</a>
            <a style={{ color: "#444" }} href='#'>Baby website</a>
            <a style={{ color: "#444" }} href='#'>Baby website</a>
            <a style={{ color: "#444" }} href='#'>Discover Your Style </a>
            <a style={{ color: "#444" }} href='#'>View Showroom</a>
          </div>
        </div>
        <div style={{}} >
          <div style={{ display: 'flex', flexDirection: 'column', gap: "2px", paddingLeft: "20px", paddingTop: '10px' }}>
            <h4>Your Account</h4>
            <a style={{ color: "#444" }} href='#'> Your Orders</a>
            <a style={{ color: "#444" }} href='#'>Your Wish List</a>
            <a style={{ color: "#444" }} href='#'>Your Recommendations</a>
            <a style={{ color: "#444" }} href='#'>Your Prime Video</a>
            <a style={{ color: "#444" }} href='#'>Your Subscribe & Save Items</a>
            <a style={{ color: "#444" }} href='#'>Your Gift Card Balance</a>
            <a style={{ color: "#444" }} href='#'>Your Amazon Business Account</a>
            <a style={{ color: "#444" }} href='#'>Your Seller Account</a>
            <a style={{ color: "#444" }} href='#'>Manage Your Content and Devices</a>
            <div>
   <a onClick={logout} >LOGOUT</a>
</div>
          </div>
        </div>
      </div>
    </div>
  )


  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="blue" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" /></svg> */}

      <Popover placement="bottomRight"
        
        style={{ position: 'relative', top: "-10px" }}
        trigger='hover'
        title={text1}
        content={content}  >

        <Popover placement="bottom"
          style={{ position: 'relative', top: "0px" }}
          trigger="focus"
          // defaultVisible={true}
          title={text2}>
          <button style={{ border: 'none', background: "none", width: '45%', display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center' }}>
            <a id='over' href="" class="ex1" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column', height: '85%', width: '90%' }}>
              <span style={{ fontSize: '12px', marginTop: '0px', color: 'white' }}>Hello, {user}  </span>
              <span style={{ fontFamily: 'inherit', fontWeight: '750', fontSize: '14px', color: 'white' }}> Account & Lists</span></a>
          </button>
        </Popover>
      </Popover>

    </>
  );
}
