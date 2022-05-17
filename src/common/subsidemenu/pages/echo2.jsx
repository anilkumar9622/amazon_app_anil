import React from 'react'
import Subcomponent from '../dash/helper/subcomponent'
import Pic1 from '../images/pic1.jpg'
import './echo.css'
export default function Echo2() {
    return (
        <>

              

            <div style={{ backgroundColor: 'lightgrey', width: '100%', height: '30px', display: 'flex', justifyContent: 'center', fontSize: '15px', paddingLeft: '0px', margin: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vw', color: '', }}>
                    <a href="" class="ex1" style={{ color: 'black' }} >
                        Need help with your Echo? Visit our Help pages or ask experts on our <a href=''>community forum.</a></a>
                </div>
            </div>

            {/* <---------------center container---------------> */}

            <div className='img-wrapper' style={{ paddingLeft: '70px' }}>
            <img src={Pic1} className='hover-zoom' 
            
            style={{ height: '530px', width: '560px' }} />
                {/* <img src={Pic1} style={{ height: '530px', width: '560px' }} /> */}
            </div>

            {/* <------------------center container2----------------> */}

          <Subcomponent />
            <div>
                <img src="https://m.media-amazon.com/images/G/31/kindle/journeys/YTQ5MmY3Zjct/YTQ5MmY3Zjct-NjBkMjE5NWEt"
                    style={{ height: '650px', width: '1364px', alignItems: 'center', marginBottom: '30px' }} alt='img' />
            </div>

            <div>
                <video src="https://m.media-amazon.com/images/G/31/img19/AmazonDevices/EchoDot/91n9Ufsnu0S._CB448390492_"
                    style={{ height: '650px', width: '1364px', alignItems: 'center', marginBottom: '30px' }}  ></video>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2.2vw', color: '', marginLeft:'350px' }}>
                <h1>Voice control your music</h1></div>
            
            <div style={{ display:'flex' }}>
            <tr>
                <td>
                <div>
                    <img src="https://m.media-amazon.com/images/G/31/kindle/journeys/YTQ5MmY3Zjct/YTQ5MmY3Zjct-NjM2Yzg5ZjEt"
                        style={{ height: '450px', width: '1264px', alignItems: 'center', marginBottom: '0px', position:'' }} alt='img' />
                </div></td>
                <td>
                   {/* <div style={{ height: '0px', width: '0px', alignItems: 'center', position:'' }} ><p>
                        Echo Dot streams music from Amazon Prime Music, JioSaavn, Gaana, Hungama Music and Spotify - 
                        just ask for your favorite artist or song, or request a specific genre or mood. Search for
                         music by album, decade, or let Alexa pick the music for you. Or wake up to your favorite
                          music by setting a musical alarm. With Amazon Prime Music, you can also create and manage
                           your personal playlist.</p></div>  */}
                </td>
            </tr>
            </div>

            <div>
                <img src="https://m.media-amazon.com/images/G/31/kindle/journeys/YTQ5MmY3Zjct/YTQ5MmY3Zjct-MjdmZGQwZjMt._CB428350057_.jpg"
                    style={{ height: '130px', width: '1324px', alignItems: 'center', marginBottom: '30px' }} alt='img' />
            </div>

            <div>
                <img src="https://m.media-amazon.com/images/G/31/kindle/journeys/YTQ5MmY3Zjct/YTQ5MmY3Zjct-NGRmNzQyYWUt._CB428350062_.jpg"
                    style={{ height: '130px', width: '1324px', alignItems: 'center', marginBottom: '30px' }} alt='img' />
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/kindle/journeys/YTQ5MmY3Zjct/YTQ5MmY3Zjct-YjQ4YTdkZDYt._CB428350057_.jpg"
                    style={{ height: '850px', width: '1364px', alignItems: 'center', marginBottom: '30px' }} alt='img' />
            </div>
            
        </>
    )
}
