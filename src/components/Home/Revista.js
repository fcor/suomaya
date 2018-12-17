import React from 'react'
import Dots from '../Dots'
import Button from '../Button'
import portada from '../../assets/img/portadaSmall.png'

const Revista = () =>
  <section className="revista-home row">
    <img src={portada} alt="portada" />
    <div className="info-revista-home column">
      <h1 className="title-home">Revista Reto</h1>
      <Dots />
      <p className="text-home" >
        Cupcake ipsum dolor sit amet tootsie roll soufflé danish.
        Fruitcake sweet marzipan apple pie lemon drops apple
        pie. Pastry biscuit cotton candy sesame snaps pastry
        candy lemon drops icing.
      </p>
      <Button route="revista">
        IR A LA REVISTA
      </Button>
    </div>
  </section>

export default Revista