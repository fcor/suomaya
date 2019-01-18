import React from 'react'
import './styles.css'
import logistica from '../../assets/img/logistica.svg'
import TeamMembers from './TeamMembers.js'
import getSemillero from '../../utils/semilleros'

class Semillero extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { variant } = this.props
    const semillero = getSemillero(variant)
    return (
      <div className="semillero-detail column">
        <section className="semillero-header column">
          <img src={semillero.logo} alt="logo" />
          <h1>{semillero.name}</h1>
          <p>{semillero.description}</p>
        </section>
        <section className="semillero-team">
          <div className="team-content column">
            <h1>Nuestro Equipo</h1>
            <TeamMembers members={semillero.team} />
          </div>
        </section>
        <section className="semillero-join column">
          <h1>¿Quieres ser parte de nuestro grupo?</h1>
          <p>Cupcake ipsum dolor. Sit amet caramels. Apple pie wafer carrot cake powder gummies 
            chupa chups jujubes. Topping soufflé fruitcake. Apple pie cake chupa chups icing cupcake
            sweet roll jelly-o. Bear claw cake tootsie roll jujubes lollipop donut soufflé croissant 
            wafer.
          </p>
          <h2>innovatics@sena.edu.co</h2>
        </section>
      </div>
    )
  }
}

export default Semillero
