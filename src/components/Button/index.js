import React from 'react'
import './styles.css'
import { NavLink } from  'react-router-dom'

const Button = ({children, route, variant}) =>
  <NavLink to={`/${route}`} >
    <button className={`button ${variant}`}>
      {children}
    </button>
  </NavLink>

Button.defaultProps = {
  variant: 'classic'
}

export default Button