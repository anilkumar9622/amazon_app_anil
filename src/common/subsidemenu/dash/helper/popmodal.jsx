
import React, { useEffect, useState } from 'react'
import PopOver from './popover2'


export default function ModalView(props) {
   console.log(props);
   const [showModal, setshowModal] = useState(false)

   useEffect(() => {
      props.toggle2 != null && setshowModal(!showModal)
   }, [props.toggle2])



   return (
      <>
         {showModal && (<PopOver showModal={showModal} setshowModal={setshowModal}>

          <div>
              <div style={{}}></div>
          </div>
         </PopOver >
         )
         }
      </>
   )
}
