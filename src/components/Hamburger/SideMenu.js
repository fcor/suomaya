import React from 'react'
import ScrollLock from 'react-scrolllock'
import Navbar from '../Navbar'

const SideMenu = (props) => {
  const isActive = props.isActive ? 'active' : ''
  return(
    <div className={`menu-responsive ${isActive}`}>
      { props.isActive &&
        <ScrollLock />
      }
      <div className="menu-responsive-content">
        {/* <Navbar variant="mobile" /> */}
        acá van los links!
      </div>
      <div className="menu-responsive-footer">
        SENA CGMLTI 2019 Copyright © 2019 Todos los derechos reservados
      </div>
    </div>
  )
}

export default SideMenu