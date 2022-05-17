import React from 'react'
import Header from '../dash/helper/header1';
import HeaderMain from '../dash/helper/mainheader';
import Footer from '../dash/helper/footer'
import Echo2 from './echo2'

// import Container from '../Pages/container';



export default function PrimeVideo() {
   
    return (
        <>

            <HeaderMain />
           
            <div style={{height:'100vh',width:'100%',backgroundColor:'',overflowY:'scroll', marginBottom:'100px', display:'flex'}}>
            <Header />
            </div>
            <Echo2 />
            <div style={{height:'100vh',width:'100%'}}>
          
                {/* <Echo2 /> */}
               </div>
               {/* <Container/> */}
               
              
            <Footer />
           
          


        </>
    )
}

