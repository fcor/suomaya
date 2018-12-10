import React from 'react'
import Dots from '../Dots'
import Button from '../Button'
import logistica from '../../assets/img/logistica.svg'
import marketing from '../../assets/img/marketing.svg'
import ti from '../../assets/img/ti.svg'
import ic from '../../assets/img/ic.svg'

const getIconText = (area) => {
  if(area === logistica){
    return "Logística"
  } else if(area === marketing) {
    return "Marketing"
  } else if(area === ti) {
    return "Tecnología"
  } else{
    return "Industrias Creativas"
  }
}

const Semilleros = () =>
  <section className="semilleros-home column">
    <h1>Semilleros</h1>
    <Dots />
    <p>
      Cupcake ipsum dolor sit amet tootsie roll souﬄé danish. Fruitcake sweet marzipan
      apple pie lemon drops apple pie. Pastry biscuit coon candy sesame snaps pastry
      candy lemon drops icing.
    </p>
    <Icons />
    <Button route="semilleros">
      VER SEMILLEROS
    </Button>
  </section>

const Icons = () =>
  <div className="semilleros-home-icons row">
    <Icon area={logistica} />
    <Icon area={marketing} />
    <Icon area={ti} />
    <Icon area={ic} />
  </div>

const Icon = ({area}) =>
  <div className="semilleros-home-icon column">
    <img src={area} width="150"/>
    <p>
      {getIconText(area)}
    </p>
  </div>

export default Semilleros