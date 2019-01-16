import logistica from '../assets/img/logistica.svg'
import marketing from '../assets/img/marketing.svg'
import ti from '../assets/img/ti.svg'
import ic from '../assets/img/ic.svg'
import avatar from '../assets/img/avatar.png'

const getSemillero = (semillero) => {
  if(semillero === 'innovatics') {
    return {
      logo: ti,
      name: 'Innovatics',
      description: 'Somos un equipo de aprendices e instructores del Centro de Gestión de Mercados, Logística y Tecnologías de la Información, de la Regional Distrito Capital -SENA, que promueven la innovación e investigación, mediante el estudio sistemático y la aplicación de nuevas tecnologías en los procesos de mantenimiento de infraestructura de TI, la gestión de redes de datos, el diseño y el desarrollo de software y videojuegos. Actualmente enfocados a la industria 4.0, realidad virtual inmersiva y aumentada, Big Data, IoT y Machine Learning.',
      team: [
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        }
      ]
    }
  }
  if(semillero === 'siclog') {
    return {
      logo: logistica,
      name: 'Siclog',
      description: `La línea de investigación está orientada la búsqueda de mejores prácticas logísticas para el desarrollo de cadenas de suministro en escenarios globalizados. Las nuevas expectativas de los mercados y las presiones tecnológicas del medio en el que se desarrollan las organizaciones, generan que los enfoques de la gestión estén reinventándose constantemente (García, 2006).
      El modelo de cadena de suministros funciona como una red integrada por varios proveedores, fabricantes, distribuidores, y consumidores finales, coordinados armoniosamente para satisfacer los requerimientos del cliente, con el menor costo y tiempo posible (Whitman et al, 1998, Ballou, 2000). La complejidad de su gestión depende de múltiples factores y no puede desligarse del desarrollo de sistemas logísticos para lograr el flujo eficiente de materiales, información y capital entre los actores involucrados.
      
      Para gestionar la cadena de suministros se requiere conocer las necesidades propias sobre diseño de productos, abastecimiento, planificación y pronósticos, producción, distribución, y servicio postventa (Swaminathan y Tayur, 2003). Sin embargo, la dinámica de los mercados, los avances tecnológicos, los requerimientos legales, sociales y económicos, hacen que estas tareas sean cada vez más complejas de realizar, exigiendo un mayor grado de preparación, tecnificación y colaboración entre los actores involucrados.
      
      En el Contexto Colombiano, el desarrollo de algunas cadenas de suministros se muestra estático. Se adolece de herramientas para toma de decisiones oportunas, conocimiento para gestionar redes en escenarios internacionales, y la implementación de prácticas logísticas contemporáneas a costos razonables. De acuerdo con el estudio de caracterización del sector de la logística en Colombia (2014), en la gran mayoría de las empresas analizadas:
      “se evidencia la ausencia de líderes transformacionales y por consiguiente el temor al cambio organizacional es la constante (...) Es necesario definir nuevas formas organizativas que incrementen los niveles de competitividad en integración de los Supply Chains y los niveles de competitividad en Logística (innovación). Los bajos niveles de integración en Supply Chains Management y la baja competitividad en Logística son otra causa de los altos costos logísticos” (Mesa sectorial de logística & SENA, 2014, 394.p)
      
      El estudio también revela una baja apropiación de estrategias logísticas para el desarrollo de cadenas de suministro dirigidas a afrontar los retos asociados al medio ambiente y al cambio climático. Las verdaderas macro tendencias se enmarcan en cómo afrontar, “el aumento de la población y la migración, la conectividad global (tecnología de información y las comunicaciones) y nivelación económica, (…)la nivelación de las expectativas de los clientes, la expansión del mercado (oferta/demanda) y la escasez de recursos” (Mesa sectorial de logística & SENA, 2014, 394.p)
      
      De acuerdo con lo anteriormente expuesto, la línea de investigación pretende abordar los retos contemporáneos para la Gestión de cadenas de suministro en contextos globalizados, a partir del desarrollo de las siguientes sublineas:
      
      - Industria 4.0 aplicada a logística y gestión de cadenas de suministro.
      - Sostenibilidad en las cadenas de suministro.
      - Comercio internacional.
      - Transporte `,
      team: [
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        }
      ]
    }
  }
  if(semillero === 'siam') {
    return {
      logo: marketing,
      name: 'Siam',
      description: 'Semillero de investigación cuyo objetivo principal es incentivar los hábitos de investigación en los aprendices que pertenecen al programa de articulación con la media. En el momento el semillero esta realizando trabajos de investigación clásica dirigidos a la identificación de problemáticas relacionadas al área de mercadeo. ',
      team: [
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        }
      ]
    }
  }
  if(semillero === 'aleph') {
    return {
      logo: marketing,
      name: 'Aleph',
      description: 'El semillero de investigación ALEPH tiene como fin fomentar la investigación formativa mediante un espacio académico multidisciplinario en donde estudiantes y los instructores se unan en la búsqueda de nuevos conocimientos, generando proyectos que ayuden a resolver problemáticas de las empresas a nivel nacional. Realizando una alianza entre los empresarios, diferentes semilleros de investigación SENA y universidades.',
      team: [
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        }
      ]
    }
  }
  if(semillero === 'neurocomarketing') {
    return {
      logo: marketing,
      name: 'Neurocomarketing',
      description: 'El semillero de Investigación NEUROCOMARKETING, es un grupo interdisciplinario compuesto por aprendices e instructores del programa Gestión de Mercados del CGMLTI, que promueve la capacidad investigativa mediante la fundamentación técnica-Pedagógica en procesos de investigación aplicada al fortalecimiento de las organizaciones. Dentro de su metodología incorpora conocimientos y herramientas correspondientes al campo del Neuromarketing, el cual se basa en el estudio de los procesos mentales que explican el comportamiento, preferencias y conductas de los consumidores y/o clientes para la toma de decisiones estratégicas.',
      team: [
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        }
      ]
    }
  }
  if(semillero === 'industriascreativas') {
    return {
      logo: ic,
      name: 'Industrias Creativas',
      description: 'Semillero dedicado a la construcción de contenido creativo enfocado a las posibilidades de la que da la economía naranja y el impulso del gobierno al sector creativo. Enfocado a procesos culturales, educativo y entretenimiento',
      team: [
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        },
        {
          name: 'John Leuro',
          mail: 'leuro@sena.edu.co',
          detail: 'Especialista en logística',
          avatar: avatar,
        }
      ]
    }
  }
}

export default getSemillero