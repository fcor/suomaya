import React from 'react'
import Navbar from '../Navbar'
import './styles.css'

const TopSection = ({ location }) =>{
    if (location === '/') {
      return(
        <div className="top-section img">
          <div className="container">
            <Navbar variant="home" type="home" />
            <div className="top-section-content column">

            </div>
          </div>
        </div>
      )
    } else{
        return(
          <div className="top-section-default">
            <div className="container">
              <Navbar />
            </div>
          </div>
        )
    }
}
export default TopSection