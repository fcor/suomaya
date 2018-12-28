import React from 'react'
import Button from '../Button'
import './styles.css'
import { getLinea } from '../../utils/semilleros'

const lineas = ['logistica', 'mercadeo', 'creativas', 'tics']

const Semilleros = () => {
    return(
      <div className="semilleros column">
        <div className="box"></div>
        <section className="semilleros-header column">
          <h1>Semilleros Suomaya</h1>
          <p>
            Dragée sweet roll fruitcake candy. Sugar plum pastry caramels 
            halvah biscuit powder. Jujubes jelly beans oat cake. Pudding 
            wafer danish wafer danish muffin dragée cookie. Brownie oat cake
            croissant. Bear claw sweet caramels toffee apple pie gingerbread. 
            Cake candy canes icing jelly jelly beans dessert dessert. Marzipan
            candy canes marzipan. 
          </p>
        </section>
        {
          lineas.map((item, index) => {
            const linea = getLinea(item)
            return(
              <section key={linea.name} className="linea column">
                <div className="linea-header row">
                  <h2>{linea.name}</h2>
                  <img src={linea.icon} alt={linea.name} />
                </div>
                <div className="semilleros-list">
                  {
                    linea.semilleros.map((item) => (
                      <div key={item.name} className="semillero row">
                        <img src={item.logo} alt="logo" />
                        <div>
                          <h1>{item.name}</h1>
                          <p>{item.description}</p>
                          <Button route="semilleros" variant="small">
                            Ir al semillero
                          </Button>
                        </div>
                      </div>
                    ))
                  }
                </div>
                { index < 3 &&
                  <hr />
                }
              </section>
            )
          })
        }
      </div>
    )
}

export default Semilleros