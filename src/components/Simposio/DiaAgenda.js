import React from 'react'
import avatar from '../../assets/img/avatar.png'
import './styles.css'

const dayDetail = {
  fecha: 'Miércoles 2',
  ponencias: [
    {
      nombre: 'Ponencia de prueba',
      autor: 'Fátima Mártinez',
      pais: '🇪🇸',
      hora: '8:40am - 9:30am',
      lugar: 'Auditorio',
      avatar: avatar,
    },
    {
      nombre: 'Ponencia de prueba 2',
      autor: 'Fátima Gomez',
      pais: '🇪🇸',
      hora: '8:40am - 9:30am',
      lugar: 'Auditorio',
      avatar: avatar,
    },
    {
      nombre: 'Ponencia de prueba 3',
      autor: 'Fátima Perez',
      pais: '🇪🇸',
      hora: '8:40am - 9:30am',
      lugar: 'Auditorio',
      avatar: avatar,
    },
  ]
}

const DiaAgenda = ({ dayIndex }) => {
  const day = dayDetail
  return (
    <>
      <section className="day-header column">
        <h2>{`${day.fecha} de Octubre`}</h2>
        <p>Agenda</p>
      </section>
      <section className="day-cards column">
        {dayDetail.ponencias.map((ponencia) => (
          <div key={ponencia.nombre} className="day-card row">
            <img src={ponencia.avatar} alt="Avatar" />
            <div className="day-card-details column">
              <h3>{ponencia.nombre}</h3>
              <p className="day-card-detail-name">{ponencia.autor} <span>{ponencia.pais}</span></p>
              <p>{`Hora: ${ponencia.hora}`}</p>
              <p>{`Lugar: ${ponencia.lugar}`}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default DiaAgenda
