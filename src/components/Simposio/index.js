import React from 'react'
import './styles.css'
import flyer from '../../assets/img/simposio.jpg'
import logoSimposio from '../../assets/img/simposio2.png'
import sena from '../../assets/img/sena.png'
import sennova from '../../assets/img/sennova.png'

class Simposio extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div className="simposio">
        <section className="simposio-top row">
          <div className="simposio-top-info column">
            <h1>II Simposio Ciencia, innovación y tecnología</h1>
            <p>
              Cupcake ipsum dolor. Sit amet caramels. Apple pie wafer carrot
              cake powder gummies chupa chups jujubes. Topping soufflé fruitcake. 
              Apple pie cake chupa chups icing cupcake sweet roll jelly-o. 
              Bear claw cake tootsie roll jujubes lollipop donut soufflé croissant 
              wafer. I love cotton candy sweet roll. Sweet chupa chups gummi bears.
            </p>
            <div className="simposio-top-support column">
              <h2>Con el apoyo de:</h2>
              <div className="support-logos row">
                <img src={sena} alt="sena" width="90" />
                <img src={sennova} alt="sennova" width="210" />
                <img src={logoSimposio} alt="simposio" width="210" />
              </div>
            </div>
          </div>
          <img 
            className="flyer"
            alt="flyer"
            src={flyer}
          />
        </section>
        <section className="simposio-pics">

        </section>
      </div>
    )
  }
}


export default Simposio