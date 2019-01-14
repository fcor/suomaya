import React from 'react'
import logoRevista from '../../assets/img/revistareto.png'
import Button from '../Button'
import './styles.css'

const Revista = () => {
    return(
      <div className="container">
        <div className="revista column">
          <img src={logoRevista} alt="logoRevista" />
          <p>Cupcake ipsum dolor. Sit amet caramels. Apple pie wafer carrot cake powder gummies 
            chupa chups jujubes. Topping soufflé fruitcake. Apple pie cake chupa chups icing cupcake
            sweet roll jelly-o. Bear claw cake tootsie roll jujubes lollipop donut soufflé croissant 
            wafer. I love cotton candy sweet roll. Sweet chupa chups gummi bears. Marzipan powder sugar 
            plum candy carrot cake bear claw chupa chups sesame snaps.
            <br/><br/>
            Fruitcake chupa chups dessert pastry muffin halvah. I love caramels fruitcake tart candy pie 
            fruitcake I love. Cheesecake cupcake powder pudding fruitcake marshmallow. Cheesecake halvah 
            pudding. Biscuit oat cake cotton candy toffee. Toffee muffin jelly cake caramels. Toffee 
            marshmallow bear claw macaroon.
          </p>
          <h1>¿Quieres ser parte de nuestra revista?</h1>
          <p>Cupcake ipsum dolor. Sit amet caramels. Apple pie wafer carrot cake powder gummies 
            chupa chups jujubes. Topping soufflé fruitcake. Apple pie cake chupa chups icing cupcake
            sweet roll jelly-o. Bear claw cake tootsie roll jujubes lollipop donut soufflé croissant 
            wafer. I love cotton candy sweet roll. Sweet chupa chups gummi bears. Marzipan powder sugar 
            plum candy carrot cake bear claw chupa chups sesame snaps.
          </p>
          <Button link="https://www.yumpu.com/es/document/read/62330013/revista-reto-vol-6">
            IR A LA REVISTA
          </Button>
        </div>
        <hr className="line container" />
        <div className="revista column">
          <h1>Número actual</h1>
          <iframe width="620px" title="Revista" height="600px" src="https://www.yumpu.com/es/embed/view/XNi3o4FSOLdWhV7p" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe>
        </div>
      </div>
    )
}

export default Revista