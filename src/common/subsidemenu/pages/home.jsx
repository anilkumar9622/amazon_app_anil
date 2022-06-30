import React, { useEffect, useState } from 'react'
import Header from '../dash/helper/header1';
import HeaderMain from '../dash/helper/mainheader';
import Footer from '../dash/helper/footer'
import Echo2 from './echo2'
import { Button, Card, Carousel, Col, Row, } from 'antd';
import axios from 'axios';
import Carousel1 from '../dash/helper/carousel';
import './home.css'
import { SplitCellsOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Home() {
  const navi = useNavigate()
  const { state } = useLocation()
  // const password = state.password.value

  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
console.log(data1, data2, data3)

  const postt = async () => {
    return await axios.get("https://mongodb-amazon.herokuapp.com/card1")

  }
  const offers = async () => {
    return await axios.get("https://mongodb-amazon.herokuapp.com/card2")

  }
  const carousel = async () => {
    return await axios.get("https://mongodb-amazon.herokuapp.com/card3")

  }
  useEffect(async () => {
    await postt().then(res => { setData1(res.data.data) })
  }, [])
  useEffect(async () => {
    await offers().then(res => { setData2(res.data.data) })
  }, [])
  useEffect(async () => {
    await carousel().then(res => { setData3(res.data.data) })
  }, [])


  const slideLeft1 = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 1100
  }

  const slideRight1 = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 1100
  }
  const slideLeft2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 1100
  }

  const slideRight2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 1100
  }


  return (
    <>
      <HeaderMain />
      
      <div  id='style-1' style={{ height: '94vh', width: '100%', background: '#ececec', overflowY: 'scroll', marginRight: '10px' }}>
      <Header />

        <div style={{ position: 'relative', height: '2700px', width:'100%' }}>
          <Carousel1 />

          <div className="site-card-wrapper" style={{ position: 'absolute', padding: '250px 20px', height: '100vh', display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>

              {data1.map((v, id) => {
                if (id < 2)
                  return (
                    <>
                      <Card bordered={false} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <h2 style={{ fontWeight: '660', fontSize: '18px' }}>{v.title}</h2>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '', padding: '0px', gap: '10px' }} 
                         >

                          <div style={{ width: '50%', height: 'auto', margin: '', display: 'flex', flexDirection: 'column' }} >
                            <a >  <img style={{ width: '130px', height: '100px', maxHeight: '100%' }} onClick={()=>{navi('/addcart',{state: v})}}
                            src={v.img1} alt="img" /></a>
                    
                             <h5 >{v.disc1}</h5>
                            <a >  <img style={{ width: '130px', height: '100px', maxHeight: '100%', }} onClick={()=>{navi('/addcart',{state: v})}}
                             src={v.img3} alt="img" /></a>
                            <h5 >{v.disc3}</h5>
                          </div>

                          <div style={{ width: '50%', height: 'auto', margin: '', display: 'flex', flexDirection: 'column', }} >
                            <a>  <img style={{ width: '130px', height: '100px', maxHeight: '100%' }} onClick={()=>{navi('/addcart',{state: v})}}
                            src={v.img2} alt="img" /></a>
                            <h5 style={{}}>{v.disc2}</h5>
                            <a >  <img style={{ width: '130px', height: '100px', maxHeight: '100%', }} onClick={()=>{navi('/addcart',{state: v})}}
                             src={v.img4} alt="img" />
                              <h5 >{v.disc4}</h5></a>
                          </div>
                        </div>
                        <div style={{ marginTop: '0px', color: 'blue' }}> <a href='' style={{ color: 'blue' }} >See all offers</a></div>
                      </Card>
                    </>)
              })}
            </div> 
            {/* <----------------------> */}
             <div style={{ display: 'flex', flexDirection: 'row', gap: "0px", justifySelf: 'self-end', gap: '' }}>
              {data2.map((v, id) => {
                if (id < 2)
                  return (
                    <>
                      <Card bordered={false} style={{
                        display: 'flex', flexDirection: 'row',
                        height: '420px', width: '307px', marginTop: '0px',
                        marginLeft: '30px', gap: '10px', justifyContent: 'start'
                      }}  >

                        <h2 style={{ fontWeight: '660', fontSize: '20px' }}>{v.title}</h2>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '', padding: '0px', gap: '10px' }}>
                          <div style={{ width: '100%', height: '100%', margin: '', display: 'flex', flexDirection: 'row' }} >
                            <img style={{ width: '100%', height: '250px', maxHeight: '100%', }} onClick={()=>{navi('/addcart',{state: v})}}
                             src={v.image} alt="img" />
                          </div>
                        </div>
                        <div style={{ marginTop: '30px', color: 'blue' }}> <a href='' style={{ color: 'blue' }} >See all upcoming offers</a></div>
                      </Card>
                    </>)
              })}
            </div> 

            <div style={{ display: 'flex', flexDirection: 'column', gap: "0px", justifySelf: 'self-end', gap: '' }}>
              <Card bordered={false} style={{
                display: 'flex', flexDirection: 'row',
                height: '160px', width: '297px', marginTop: '0px',
                marginLeft: '30px', gap: '10px', justifyContent: 'start'
              }}>
                <h2 style={{ fontWeight: '660', fontSize: '20px' }}>Sign in for your best experience</h2>
                <div style={{ display: 'flex', flexDirection: 'row', height: '', padding: '0px', gap: '10px' }}>
                  <div style={{ width: '100%', height: '100%', margin: '', display: 'flex', flexDirection: 'row' }} >
                    <Button href='./signin1' style={{ width: '290px', height: '35px', background: '#fcc40d', fontWeight: '500', borderRadius: '10px' }}>Sign in securely</Button>
                  </div>
                </div>
              </Card>

              <div style={{ display: 'flex', flexDirection: 'column', margin: '20px 0px', justifySelf: 'self-end', gap: '' }}>
                <Card bordered={false} style={{
                  display: 'flex', flexDirection: 'row',
                  height: '240px', width: '297px', marginTop: '0px',
                  marginLeft: '30px', gap: '10px', justifyContent: 'start'
                }}>
                  <h2 style={{ fontWeight: '660', fontSize: '20px' }}></h2>
                  <div style={{ display: 'flex', flexDirection: 'row', height: '', padding: '0px', gap: '10px' }}>
                    <div style={{ width: '100%', height: '100%', margin: '', display: 'flex', flexDirection: 'row' }} >
                      <img style={{ width: '307px', height: '240px', maxHeight: '100%', margin: '-35px -25px' }} src='https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg' alt="img" />
                    </div>
                  </div>
                </Card>
              </div>
              </div>
              {/* <---------------------------------> */}

              <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', margin: '450px -970px' }}>
                {data1.map((v, id) => {
                  if (id > 2)
                    return (
                      <>
                        <Card bordered={false} style={{ display: 'flex', flexDirection: 'column', height: '400px' }}>
                          <h2 style={{ fontWeight: '660', fontSize: '18px' }}>{v.title}</h2>
                          <div style={{ display: 'flex', flexDirection: 'row', height: '', padding: '0px', gap: '10px' }}>
                            <div style={{ width: '50%', height: 'auto', margin: '', display: 'flex', flexDirection: 'column' }} >
                              <a href={v.link}>  <img style={{ width: '130px', height: '100px', maxHeight: '100%' }} src={v.img1} alt="img" /></a>
                              <h5 >{v.disc1}</h5>
                              <a href={v.link}>  <img style={{ width: '130px', height: '100px', maxHeight: '100%' }} src={v.img3} alt="img" /></a>
                              <h5 >{v.disc3}</h5>
                            </div>
                            <div style={{ width: '50%', height: 'auto', margin: '', display: 'flex', flexDirection: 'column' }} >
                              <a href={v.link}>  <img style={{ width: '130px', height: '100px', maxHeight: '100%' }} src={v.img2} alt="img" /></a>
                              <h5 >{v.disc2}</h5>
                              <a href={v.link}>  <img style={{ width: '130px', height: '100px', maxHeight: '100%' }} src={v.img4} alt="img" /></a>
                              <h5 >{v.disc4}</h5>
                            </div>
                          </div>
                          <div style={{ marginTop: '0px', color: 'blue' }}> <a href='' style={{ color: 'blue' }} >See all offers</a></div>
                        </Card>
                      </>)
                })}
              </div>
              {/* <----------------------> */}


              {/* <-------------------------------> */}
               <div id='cardcarousel' style={{ background: 'white', display: 'flex', flexDirection: 'row', gap: '30px', margin: '880px -200px 0px -348px', minHeight: '380px', width: '1315px', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', maxHeight: '364px', minWidth: '135px', margin: '10px 20px', }}>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '26px' }} >
                    <h2 style={{ fontWeight: '660', fontSize: '28px' }}>Blockbuster Deals to start shopping</h2><p style={{ margin: '13px 0px', fontSize: '16px', color: 'darkgreen', fontWeight: '500' }}>See all deals</p></div>
                  <Button onClick={slideLeft1} style={{ border:'2px solid black ',opacity: '0.5', backgroundColor: 'white', minHeight: '104px', minWidth: '47px', cursor: 'pointer', position: 'absolute', margin: '130px 0px' }}>
                    <LeftOutlined style={{ fontSize: '20px', color:'black', fontWeight:'800' }} /></Button>
                  <div id="slider1" style={{ display: 'flex', flexDirection: 'row', height: '600px', width: '120px', padding: '0px', gap: '10px', height: '100%', width: '100%', whiteSpace: 'nowrap', overflowX: 'scroll', scrollBehavior: 'smooth', overflow:'hidden' }}>
                    {data3.map((v, id) => {
                      if(id < 17)
                      return (
                        <>
                          <div style={{ width: '50%', height: 'auto', margin: '', display: 'flex', flexDirection: 'column', gap: '24px' }} >
                            
                              <img style={{ display: 'flex', flexDirection: 'row', width: '160px', height: '200px', maxHeight: '100%', gap: '24px', margin: '0px 20px 0px 20px' }}
                              onClick={()=>{navi('/addcart',{state: v})}} src={v.img} alt="imgeeee" />
                            <h5 style={{ margin: '0px 60px', fontSize: '16px' }}><b>{v.price}</b></h5>
                          </div>
                        </>)
                    })}
                  </div>
                </div>
                <Button onClick={slideRight1} style={{border:'2px solid black', opacity: '0.5', backgroundColor: 'white', minHeight: '104px', minWidth: '47px', cursor: 'pointer', right: '0', cursor: 'pointer', position: 'absolute', margin: '130px 20px',fontSize: '20px', color:'black', fontWeight:'500' }}>
                  <RightOutlined style={{ fontSize: '22px', color:'black', fontWeight:'700' }} /></Button>
              </div> 
              {/* <-----------------------------> */}
               <div id='cardcarousel' style={{ background: 'white', display: 'flex', flexDirection: 'row', gap: '30px', margin: '1290px 0px 0px -1115px', minHeight: '380px', width: '1315px', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', maxHeight: '364px', minWidth: '135px', margin: '10px 20px', }}>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '26px' }} >
                    <h2 style={{ fontWeight: '660', fontSize: '28px' }}>Up to 40% off | Refurbished activity trackers</h2><p style={{ margin: '13px 0px', fontSize: '16px', color: 'darkgreen', fontWeight: '500' }}>See more</p></div>
                  <Button onClick={slideLeft2} style={{ border:'2px solid black ',opacity: '0.5', backgroundColor: 'white', minHeight: '104px', minWidth: '47px', cursor: 'pointer', position: 'absolute', margin: '130px 0px' }}>
                    <LeftOutlined style={{ fontSize: '20px', color:'black', fontWeight:'800' }} /></Button>
                  <div id="slider2" style={{ display: 'flex', flexDirection: 'row', height: '600px', width: '120px', padding: '0px', gap: '10px', height: '100%', width: '100%', whiteSpace: 'nowrap', overflowX: 'scroll', scrollBehavior: 'smooth', overflow:'hidden' }}>
                    {data3.map((v, id) => {
                      if(id > 17)
                      return (
                        <>
                          <div style={{ width: '50%', height: 'auto', margin: '', display: 'flex', flexDirection: 'column', gap: '24px' }} >
                            
                              <img style={{ display: 'flex', flexDirection: 'row', width: '160px', height: '200px', maxHeight: '100%', gap: '24px', margin: '0px 20px 0px 20px' }}
                              onClick={()=>{navi('/addcart',{state: v})}} src={v.img} alt="imgeeee" />
                            <h5 style={{ margin: '0px 70px', fontSize: '16px' }}><b>{v.price}</b></h5>
                          </div>
                        </>)
                    })}
                  </div>
                </div>
                <Button onClick={slideRight2} style={{border:'2px solid black', opacity: '0.5', backgroundColor: 'white', minHeight: '104px', minWidth: '47px', cursor: 'pointer', right: '0', cursor: 'pointer', position: 'absolute', margin: '130px 20px',fontSize: '20px', color:'black', fontWeight:'500' }}>
                  <RightOutlined style={{ fontSize: '22px', color:'black', fontWeight:'700' }} /></Button>
              </div>            
              <div style={{margin:'1700px -1120px'}}><img src='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg' alt='img' /></div>
             
                <div style={{ display: 'flex', flexDirection:'row', gap: "30px", justifySelf: '',margin:'1980px -50px'}}>
              {data2.map((v, id) => {
                if (id > 2)
                  return (
                    <>
                    <div style={{gap:'80px', }}>
                      <Card bordered={false} style={{
                        display: 'flex',
                        height: '420px', width: '307px', marginTop: '0px',
                        margin:'0px 0px', gap: '80px', justifyContent: 'space-between', 
                      }}  >

                        <h2 style={{ fontWeight: '660', fontSize: '20px' }}>{v.title}</h2>
                        <div style={{ display: 'flex', flexDirection: 'row', height: '', padding: '0px', gap: '10px' }}>
                          <div style={{ width: '100%', height: '100%', margin: '', display: 'flex', flexDirection: 'row' }} >
                            <img style={{ width: '100%', height: '250px', maxHeight: '100%', }} onClick={()=>{navi('/addcart',{state: v})}}
                             src={v.img} alt="img" />
                          </div>
                        </div>
                        <div style={{ marginTop: '30px', color: 'blue' }}> <a href='' style={{ color: 'blue' }} >See all upcoming offers</a></div>
                      </Card></div>
                    </>)
              })}
            </div>   
             {/* </div> */}
          </div>
        </div>
        <div style={{ position: '' }}>
          <Footer />
        </div>
      </div>



    </>
  )
}

