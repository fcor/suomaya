import React from 'react'
import './styles.css'
import logistica from '../../assets/img/logistica.svg'
import TeamMembers from './TeamMembers.js'

const Semillero = () => (
  <div className="semillero-detail column">
    <section className="semillero-header column">
      <img src={logistica} alt="logo" />
      <h1>INNOVATICS</h1>
      <p>Cupcake ipsum dolor. Sit amet caramels. Apple pie wafer carrot cake powder gummies 
        chupa chups jujubes. Topping soufflé fruitcake. Apple pie cake chupa chups icing cupcake
        sweet roll jelly-o. Bear claw cake tootsie roll jujubes lollipop donut soufflé croissant 
        wafer. I love cotton candy sweet roll. Sweet chupa chups gummi bears. Marzipan powder sugar 
        plum candy carrot cake bear claw chupa chups sesame snaps.
      </p>
    </section>
    <section className="semillero-team">
      <div className="team-content column">
        <h1>Nuestro Equipo</h1>
        <TeamMembers />
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

export default Semillero