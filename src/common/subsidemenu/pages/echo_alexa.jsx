import React, { useEffect, useState } from 'react'
import Header from '../dash/helper/header1';
import HeaderMain from '../dash/helper/mainheader';
import Footer from '../dash/helper/footer'
import Echo2 from './echo2'
import Subheader from '../dash/helper/subheader';
import Popover from '../dash/helper/popover';

// import Container from '../Pages/container';

export default function Echo_alexa(props) {
    const [showtoggle, setShowtoggle] = useState(false)

  useEffect(() => {
    props.toggle != null && setShowtoggle(!showtoggle)
 }, [props.toggle])
    return (
        <>

            <HeaderMain />
            <div style={{height:'100vh',maxWidth:'100%',backgroundColor:'',overflowY:'scroll', marginBottom:'100px',display:'flex', flexWrap:'wrap'}}>

            <Header />
            <Subheader />

           <div style={{height:'100vh',minHeight:'100%',width:'100%', display:'flex', flexWrap:"wrap", marginBottom:'100px'}}>
           {/* <Popover showtoggle={setShowtoggle} /> */}

            <Echo2 />
            
            {/* </div> */}
              
            <Footer />
             </div></div>
          


        </>
    )
}
