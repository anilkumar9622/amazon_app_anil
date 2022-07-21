import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';

export default function Popover1(props) {
  
  const [showModal2, setshowModal2] = useState(false)
  const [showModal, setshowModal] = useState(false)
  console.log("showModal2", showModal2)
  console.log("showModal", showModal)
  

//   useEffect(() => {
//     props.toggl != null && setshowModal2(!showModal2)
//  }, [props.toggl])
 useEffect(() => {
  props.toggle != null && setshowModal(!showModal)
}, [props.toggle])
 console.log("????",props)

const handleCapturing = () => {
  setshowModal(!showModal)
}
return (
    <>
    {showModal2 &&
     <div id="modal" 
      onClick={handleCapturing} 
       style={{
      
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      position: 'absolute',
      marginTop: '100px',
      width: '100',
      height: '100%',
      width: '100%',
      display: 'grid',
      placeContent: 'center',
      zIndex: '99999',
    }}  >
      {/* <div  style={{ backgroundColor: 'white', width: '650px', height: '496px', borderRadius: '8px', objectFit: "contain" }} >
        {props.children}
      </div> */}
      </div>
}
{showModal &&
     <div id="modal" 
      onClick={handleCapturing} 
       style={{
      
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      position: 'absolute',
      marginTop: '100px',
      width: '100',
      height: '100%',
      width: '100%',
      display: 'grid',
      placeContent: 'center',
      zIndex: '99999',
    }}  >
      {/* <div  style={{ backgroundColor: 'white', width: '650px', height: '496px', borderRadius: '8px', objectFit: "contain" }} >
        {props.children}
      </div> */}
      </div>
}
    </>
  )
}
