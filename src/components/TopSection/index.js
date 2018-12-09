import React from 'react'
import Navbar from '../Navbar'
import Button from '../Button'
import './styles.css'
import logoImg from '../../assets/img/logoimg.png'

const TopSection = ({ location }) =>{
    if (location === '/') {
      return(
        <div className="top-section img">
          <div className="container">
            <Navbar variant="home" type="home" />
            <div className="top-section-content column">
              <img src={logoImg} alt="img" />
              <h1>Investigación. Innovación. Desarrollo</h1>
              <p>Cupcake ipsum dolor. Sit amet jujubes carrot cake croissant lollipop 
                 cake apple pie chocolate cake. Marshmallow chocolate croissant. Halvah
                 topping chocolate cake sweet. Cupcake ipsum dolor. Sit amet jujubes carrot
                 cake croissant lollipop cake apple pie chocolate cake. Marshmallow 
                 chocolate croissant. Halvah topping chocolate cake sweet.
              </p>
              <Button variant="big" route="semilleros">
                CONOCE MÁS
              </Button>
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