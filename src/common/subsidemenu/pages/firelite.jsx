import React from 'react'
import Header from '../dash/helper/header1';
import HeaderMain from '../dash/helper/mainheader';
import Footer from '../dash/helper/footer'
import Firelite2 from './firelite2'
import Subheader from '../dash/helper/subheader';
import Echo2 from './echo2';

// import Container from '../Pages/container';



export default function Firelite() {
   
    return (
        <>

<HeaderMain />
            <div style={{height:'100vh',maxWidth:'100%',backgroundColor:'',overflow:'scroll', marginBottom:'100px',display:'flex', flexWrap:'wrap'}}>

            <Header />
            <Subheader />

           <div style={{height:'100vh',minHeight:'100%',width:'100%', display:'flex', flexWrap:"wrap", marginBottom:'100px'}}>
            <Firelite2 />
            
            {/* </div> */}
              
            <Footer />
             </div></div>
           
          


        </>
    )
}

