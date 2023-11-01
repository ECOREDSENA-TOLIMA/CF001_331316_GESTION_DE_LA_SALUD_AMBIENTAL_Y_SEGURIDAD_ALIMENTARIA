export default {
  global: {
    componenteFormativo:
      'Fundamentos y normatividad vigente en la prestación de servicios de salud',
    descripcionCurso:
      'El sistema general de seguridad social en salud de carácter obligatorio busca garantizar la prestación del servicio de forma pertinente, accesible, continuo, oportuno y seguro en todos los procesos. Este sistema se ha actualizado para potencializar la calidad en el servicio, articulando otros procesos como el SUH, PAMEC, el SUA y el Sistema de información para la calidad en salud. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          '1.	Conceptos de los principios normativos y fundamentales del Sistema general de Seguridad Social en Salud (SGSSS) y los soportes de la red de servicios de salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Constitución política',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Leyes (SGSS )',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Decretos (mecanismos de habilitación, políticas públicas en salud)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Resoluciones',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema obligatorio de garantía de la calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Decretos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Resoluciones',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Leyes (SGSS)',
      referencia:
        'Ley 1122 de 2007. [Congreso de la República de Colombia]. Por la cual se hacen algunas modificaciones en el Sistema general de seguridad social en salud y se dictan otras disposiciones.  Enero 9 de 2007.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1122-de-2007.pdf  ',
    },
    {
      tema:
        'Decretos (mecanismos de habilitación, políticas públicas en salud)',
      referencia:
        'Decreto 3518 de 2006. [Ministerio de la Protección Social]. Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones. Octubre de 2006.  ',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      tema:
        'Decretos (mecanismos de habilitación, políticas públicas en salud)',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Salud. Ministerio de Salud y Protección Social.',
      tipo: 'Sitio web',
      link: 'https://www.minsalud.gov.co/salud/Paginas/inicio.aspx',
    },
    {
      tema:
        'Decretos (mecanismos de habilitación, políticas públicas en salud)',
      referencia:
        'Instituto Nacional de Salud. (s.f.). Observatorio Nacional de Salud. INS. ',
      tipo: 'Sitio web',
      link:
        'https://www.ins.gov.co/Direcciones/ONS/Paginas/default.aspx#:~:text=Genera%20evidencia%20para%20informar%20la,formulaci%C3%B3n%20de%20proyectos%20de%20investigaci%C3%B3n',
    },
    {
      tema: 'Decretos',
      referencia:
        'Decreto 780 de 2016. [Ministerio de Salud y Protección Social]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Mayo 6 de 2016.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      tema: 'Decretos',
      referencia:
        'Decreto 682 de 2018. [Ministerio de Salud y Protección Social]. Por el cual se sustituye el Capítulo 3 del Título 2 de la Parte 5 del Libro 2 del Decreto 780 de 2016, Único Reglamentario del Sector Salud y Protección Social, en relación con las condiciones para la autorización de funcionamiento, habilitación y permanencia de las entidades responsables del aseguramiento en salud. Abril 18 de 2018.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20682%20de%202018.pdf',
    },
    {
      tema: 'Resoluciones',
      referencia:
        'Resolución 3100 de 2019. [Ministerio de Salud y Protección Social]. Por la cual de definen los procedimientos y condiciones de inscripción de los prestadores de servicios de salud y de habilitación de los servicios de salud y se adopta el Manual de inscripción de prestadores y habilitación de servicios de salud. Noviembre 25 de 2019. ',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203100%20de%202019.pdf',
    },
    {
      tema: 'Resoluciones',
      referencia:
        'Ministerio de Salud y de la Protección Social. 2017. Manual de habilitación de redes Integrales de prestadores de servicios de salud para las entidades departamentales y distritales de salud. Versión 1.0 Enero de 2017.',
      tipo: 'Documento técnico',
      link:
        'https://www.minsalud.gov.co/sites/rid/Paginas/PageNotFoundError.aspx?requestUrl=https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PSA/manual-habilitacion-redes-dts.pdfv',
    },
    {
      tema: 'Resoluciones',
      referencia:
        'Ministerio de la Protección Social. Dirección General de calidad de los servicios. Unidad sectorial de normalización. (2010) Guía técnica “Buenas prácticas para la seguridad del paciente en la atención en salud”. Seguridad del paciente y la atención segura. Bogotá, 4 de marzo de 2010.',
      tipo: 'Documento técnico',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/guia-buenas-practicas-seguridad-paciente2010.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Archivo plano',
      significado:
        'Es un archivo informático compuesto únicamente por texto sin formato, solo por caracteres, lo que hace que sea legible de forma sencilla por humanos. Carece de información destinada a generar formatos (negritas, subrayado, cursivas, tamaño, etc.) y tipos de letra (por ejemplo, Arial, Times, Courier, etc.). El término texto plano proviene de una traducción literal del término inglés plain text, término que en lengua castellana significa texto simple o texto sencillo (Sensagent, 2022).',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'Es la verificación de las condiciones de calidad para el autocontrol de los servicios a ofertar (Decreto 1011 de 2006).',
    },
    {
      termino: 'Control de calidad',
      significado:
        'Sistema para verificar y mantener un nivel deseado de calidad en un servicio específico mediante el planeamiento cuidadoso, el uso del equipamiento adecuado, el chequeo continuo y la aplicación de las medidas correctivas necesarias (OPS, 2016).',
    },
    {
      termino: 'Criterio ',
      significado:
        'Es un indicador o descripción de la calidad de las actividades que se están evaluando (ISO Tools, s.f.). ',
    },
    {
      termino: 'Cultura de seguridad',
      significado:
        'Es el producto de valores, actitudes, percepciones, competencias y patrones de comportamiento desde lo individual y grupal, lo cual ayuda a determinar el compromiso, el estilo y el desempeño de una institución (Domínguez y otros, 2009).',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'En medicina o propedéutica clínica es el procedimiento por el cual se identifica una enfermedad, entidad nosológica, síndrome o cualquier condición de salud - enfermedad. (MinSalud, 2013).',
    },
    {
      termino: 'Estándar ',
      significado:
        'Son todos aquellos criterios mínimos de un servicio de salud (MinSalud, 2014).',
    },
    {
      termino: 'Evento adverso ',
      significado:
        'Es el resultado de una atención en salud que de manera no intencional produce un daño en la salud de la persona. Los eventos adversos pueden ser prevenibles y no prevenibles (MinSalud, 2016).',
    },
    {
      termino: 'Igualdad',
      significado:
        'Es el acceso a la seguridad social en salud que garantiza no incurrir en discriminación de las personas residentes en el territorio colombiano por razones de cultura, sexo, raza, origen, nacionalidad, orientación sexual, religión, edad o capacidad económica (MinSalud, 2013). ',
    },
    {
      termino: 'Incidente ',
      significado:
        'Es un evento o circunstancia que ocurre durante el proceso de atención clínica de un paciente, este no genera daño, pero que en su ocurrencia se incorporan fallas en los procesos de atención en el marco de los procesos con calidad (OMS, 2002).',
    },
    {
      termino: 'Observatorio Nacional de Salud',
      significado:
        'Es el responsable de hacer el monitoreo a los indicadores de salud pública para cada municipio y departamento, lo cual permite tener información desagregada de los resultados por asegurador, prestador y ente territorial (Ley 1438 de 2011).',
    },
    {
      termino: 'Participación social  ',
      significado:
        'Se refiere a la intervención de la comunidad en la organización, control, gestión y fiscalización de las instituciones y del sistema en conjunto (MinSalud, 2013).',
    },
    {
      termino: 'Plan decenal de salud pública',
      significado:
        'Documento en el cual confluyen las políticas sectoriales para mejorar el estado de salud de la población, incluyendo la salud mental, logrando garantizar que el proceso de participación social sea eficaz, mediante la promoción de la capacitación de la ciudadanía y de las organizaciones sociales (MinSalud, 2013). ',
    },
    {
      termino: 'Prestador',
      significado:
        'Corresponde a cualquier persona natural o jurídica, establecimiento o institución, que se encuentre autorizada para otorgar prestaciones de salud, tales como: consulta, consultorio, hospital, clínica, centro médico, centro de diagnóstico terapéutico, centro de referencia de salud, laboratorio y otros de cualquier naturaleza, incluidas las ambulancias y otros vehículos adaptados para la atención extrahospitalaria (MinSalud, 2013). ',
    },
    {
      termino: 'Prevención ',
      significado:
        'Es el enfoque orientado a la precaución que se aplica a la gestión del riesgo en el marco de la evaluación de los procedimientos y la prestación de los servicios de salud (MinSalud, 2013).',
    },
  ],
  referencias: [
    {
      referencia:
        'Constitución Política de Colombia. (1991). Título II de Los derechos sociales, económicos y culturales Artículos 48 y 49. Constitución Política de Colombia.',
      link: 'https://pdba.georgetown.edu/Constitutions/Colombia/colombia91.pdf',
    },
    {
      referencia:
        'Decreto 3518 de 2006. [Ministerio de la Protección Social]. Por el cual se crea y reglamenta el Sistema de Vigilancia en Salud Pública y se dictan otras disposiciones. Octubre de 2006.  ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Decreto-3518-de-2006.pdf',
    },
    {
      referencia:
        'Decreto 903 de 2014. [Ministerio de la Protección Social]. Por el cual se dictan disposiciones en relación con el Sistema Único de Acreditación en Salud. Mayo 13 de 2014. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/decreto-0903-de-2014.pdf',
    },
    {
      referencia:
        'Decreto 780 de 2016. [Ministerio de Salud y Protección Social]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Mayo 6 de 2016. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      referencia:
        'Decreto 682 de 2018. [Ministerio de Salud y Protección Social]. Por el cual se sustituye el Capítulo 3 del Título 2 de la Parte 5 del Libro 2 del Decreto 780 de 2016, Único Reglamentario del Sector Salud y Protección Social, en relación con las condiciones para la autorización de funcionamiento, habilitación y permanencia de las entidades responsables del aseguramiento en salud. Abril 18 de 2018. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20682%20de%202018.pdf',
    },
    {
      referencia:
        'Ley 100 de 1993. [Congreso de la República de Colombia]. Artículos 156, literales e), i), 157, literales A y B. agosto 31 de 2022',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993_pr003.html#153',
    },
    {
      referencia:
        'Ley 1122 de 2007. [Congreso de la República de Colombia]. Por la cual se hacen algunas modificaciones en el Sistema general de seguridad social en salud y se dictan otras disposiciones.  Enero 9 de 2007. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/ley-1122-de-2007.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Modelo Integral de Atención en Salud - MIAS. Plan de capacitación sectorial. MinSalud. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/01-pais-mias-capacitacion-sectorial.pdf',
    },
    {
      referencia:
        'Resolución 256 de 2016. [Ministerio de Salud y Protección Social]. Por la cual se dictan disposiciones en relación con el Sistema de Información para la Calidad y se establecen los indicadores para el monitoreo de la calidad en salud.  Febrero 5 de 2016. ',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200256%20de%202016.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Adriana Cárdenas González',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
