import React from 'react'
import Footer from '../dash/helper/footer'
import Header1 from '../dash/helper/header1'
import HeaderMain from '../dash/helper/mainheader'
import { Button } from 'antd'
import { useLocation } from 'react-router-dom'
import { CheckCircleFilled } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {
  const {state} = useLocation();
  const { items }  = useSelector((state)=> state.Cart);
  
  return (
    <>
      <HeaderMain />
      <div style={{ height: '100vh', maxWidth: '100%', backgroundColor: '#f0f0f0', overflowY: 'scroll', marginBottom: '100px', display: 'flex', flexWrap: 'wrap' }}>
        <Header1 />
        {/* <Subheader2 /> */}
        <div style={{ height: '600px', display: 'flex', flexDirection: 'row', margin: '15px 20px', gap: '20px' }}>
          <div style={{ width: '850px', height: '200px', background: 'white', display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
            <img src={state.img}
              style={{ height: '150px', width: '150px', alignItems: 'center', marginBottom: '30px', marginTop: '25px', marginLeft: '160px',marginRight:'30px', position: 'relative' }} alt='img' />
            <p><h1><CheckCircleFilled style={{color:'green'}}/> Added to cart</h1>
              <p><b>Color Name:</b> Black
                <p><b>Configuration:</b> </p></p></p>
          </div>

          <div style={{ width: '350px', height: '200px', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <p><b>Cart subtotal ({items?.length} items):    {state.price}</b></p>
            <Button href='./signin1' style={{ fontWeight: '', width: '280px', height: '34px', borderRadius: '5px', background: '#face2f', marginBottom: '10px' }}>Proceed to Buy</Button>
            <Button href='./cartShow' style={{ fontWeight: '', width: '280px', height: '34px', borderRadius: '5px', background: '', marginBottom: '20px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>Go to Cart</Button>
            <p>For best experience signin to your account</p>
          </div>
        </div>
        <div style={{ height: '100vh', minHeight: '100%', width: '100%', display: 'flex', flexWrap: "wrap", marginBottom: '100px' }}>
          <Footer />
        </div></div>
    </>
  )
}
