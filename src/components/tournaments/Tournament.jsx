import React from 'react'
import "./Tournament.css";

const Tournament = () => {
  return (
    <div className="tournaments">
      <div className="text">
        <h1>Our Tournaments</h1>
      </div>
      <div className="elems">
        <div data-scroll data-scroll-speed="0.2" className="tour1">
          <h1>BGMI</h1>
          <h3>Coming Soon</h3>
          <div className="tour1video">
            <video autoPlay loop muted src="/videos/bgmi.mp4"></video>
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.1" className="tour1">
          <h1>GTA V</h1>
          <h3>Coming Soon</h3>
          <div className="tour1video">
            <video autoPlay loop muted src="/videos/gta5.mp4"></video>
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.2" className="tour1">
          <h1>VELORENT</h1>
          <h3>Coming Soon</h3>
          <div className="tour1video">
            <video autoPlay loop muted src="/videos/Velorent.mp4"></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tournament