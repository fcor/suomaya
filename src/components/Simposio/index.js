import React from 'react'
import Button from '../Button'
import './styles.css'
import flyer from '../../assets/img/simposio.jpg'
import flyer2 from '../../assets/img/simposio2.jpg'
import logoSimposio from '../../assets/img/simposio2.png'
import sena from '../../assets/img/sena.png'
import sennova from '../../assets/img/sennova.png'
import foto1 from '../../assets/img/foto1.jpg'
import foto2 from '../../assets/img/foto2.jpg'
import foto3 from '../../assets/img/foto3.jpg'
import foto4 from '../../assets/img/foto4.jpg'
import foto5 from '../../assets/img/foto5.jpg'
import foto6 from '../../assets/img/foto6.jpg'

class Simposio extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div className="simposio">
        <section className="simposio-top row">
          <div className="simposio-top-info column">
            <h1>III Simposio Ciencia, innovación y tecnología</h1>
            <p>
              Este evento surge ante la necesidad de difundir  y posicionar  
              los  procesos de  investigación, desarrollo tecnológico e innovación
              realizados en CGMLTI como también los avances y resultados de los
              proyectos  SENNOVA y cuenta con la participación de diferentes invitados
              como empresarios, universidades, IES, líderes SENNOVA e investigadores. 
              <br />
              <br />Recepción de artículos: Hasta el 31 de Julio de 2019.
              <br />Evaluación de artículos: 1 al 14 de Agosto de 2019.
              <br />Comunicación de resultados: 16 de Agosto de 2019.
            </p>
            <div className="simposio-top-support column">
              <h2>Con el apoyo de:</h2>
              <div className="support-logos row">
                <img src={sena} alt="sena" width="90" />
                <img src={sennova} alt="sennova" width="210" />
                {/* <img src={logoSimposio} alt="simposio" width="210" /> */}
              </div>
              <Button link="https://docs.google.com/forms/d/e/1FAIpQLSeZa4JonFjq7s7oDPnDvMgRBAgRlPvMzPnNDFYcCo72-D0C6w/viewform">
                  INSCRÍBETE AQUÍ
              </Button>
            </div>
          </div>
          <img 
            className="flyer"
            alt="flyer"
            src={flyer2}
          />
        </section>
        {/* <section className="simposio-pics column">
          <h1>¡Asi fue el II Simposio de Ciencia, innovación y tecnología!</h1>
          <div className="simposio-gallery row">
            <img src={foto1} alt="pic"/>
            <img src={foto2} alt="pic"/>
            <img src={foto3} alt="pic"/>
            <img src={foto4} alt="pic"/>
            <img src={foto5} alt="pic"/>
            <img src={foto6} alt="pic"/>
          </div>
        </section> */}
      </div>
    )
  }
}


export default Simposio