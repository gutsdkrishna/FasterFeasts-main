import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience, Download the<br />Tomato App now</p>
            <div className="app-download-platforms">
                <a href="https://play.google.com/store/games?hl=en_IN&gl=US"><img src={assets.play_store} alt="" /></a>
                <a href="https://www.apple.com/in/app-store/"><img src={assets.app_store} alt="" /></a>
            </div>
        </div>
    )
}

export default AppDownload
