import React from 'react'

export default function Popover2(props) {
  console.log(props);
  const handleCapturing = () => {
    props.setshowModal(!props.showModal)
  }
  const handleContainer = (e) => {
    e.stopPropagation()
  }
  console.log(props.children)

  return (
    <div id="modal" 
    onClick={handleCapturing}
     style={{
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      position: 'absolute',
      top: '0',
      width: '100',
      height: '100%',
      width: '100%',
      display: 'grid',
      placeContent: 'center',
      zIndex: '99999',
    }} >

      <div onClick={handleContainer} style={{ backgroundColor: 'white', width: '373px', height: '308px', borderRadius: '8px 8px 8px 8px', objectFit: "contain" }} >
        {props.children}
      </div>
    </div>
  )
}
