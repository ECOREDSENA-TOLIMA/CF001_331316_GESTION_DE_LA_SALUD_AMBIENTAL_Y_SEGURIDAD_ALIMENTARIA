<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos de los principios normativos y fundamentales del Sistema General de Seguridad Social en Salud (SGSSS) y los soportes de la red de servicios de salud

    p.mb-5 El SGSSS tiene como objetivo regular el servicio público esencial de salud y crear condiciones de acceso para toda la población residente del país en todos los niveles de atención. Está integrado por: 

    SlyderB.mb-5(:datos="datosSlyder")

    Separador 

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Constitución política

    p La evolución del Sistema de seguridad social colombiano ha estado relacionado con la situación social, económica y política del país en diferentes épocas y gobiernos, por lo tanto, es importante analizar las características generales del contexto normativo iniciando desde el modelo higienista hasta la actual constitución colombiana expedida en el año 1991, la cual recogió algunas disposiciones de la Ley 10 de 1990, además de reestructurar el sistema nacional de salud y posibilitar la descentralización en la prestación de los servicios, reconociendo el derecho de los ciudadanos a recibir atención en salud, bajo principios de calidad y equidad.  
    p.mb-5 Con relación a la salud la Constitución Política de Colombia en los Artículos 48 y 49 apropian el derecho a la salud, de tipo fundamental, reconociendo entre otros aspectos su universalidad, el derecho irrenunciable inherente a la persona humana, integral e integrador.  Especificando para cada Artículo lo siguiente:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-1.svg', alt='Texto que describa la imagen')
          
        h2.text-center Artículo 48
        p Deja claridad que la atención la podrán realizar entidades públicas o privadas y en ningún caso se podrán utilizar los recursos disponibles para la seguridad social en otras actividades que difieran de esta. 
        p Hacia el año 2005 se incluyeron otros elementos relacionados con los requisitos y los beneficios de tipo pensional. La actualización corresponde al acto legislativo 01.

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-2.svg', alt='Texto que describa la imagen')
          
        h2.text-center Artículo 49
        p En este Artículo se pone en manifiesto que la salud y el saneamiento ambiental son servicios de tipo público y que están a cargo del Estado. De igual manera hace énfasis en que todas las personas tienen derecho a acceder a los servicios de promoción, protección y de recuperación de la salud. Este artículo se actualizó mediante el acto legislativo 02 del año 2009.
      
    p Si bien la Constitución atendió la necesidad de crear un Sistema de salud obligatorio que se ha venido reglamentando desde el año 1993 hasta la fecha, aún persisten dudas en su aplicación e implementación de disposiciones, tal es el caso del Artículo 48, el cual fue demandado bajo el argumento que se vulneró lo relacionado con la libertad económica, la integración vertical, la posición dominante, la libertad de empresa en el ámbito de la seguridad social, los efectos generales de la Ley 1122 de 2007 y el usuario.
    p.mb-5 Teniendo en cuenta dicha demanda el Consejo de Estado revisó y producto de ello, argumentó lo que se muestra en el siguiente resumen.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12(data-aos="fade-right", alt="La tabla 1 muestra los principales aspectos que contiene el artículo 48 de la Constitución Política de Colombia, antes y después de la demanda.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Comparativo de lo dispuesto en el Artículo 48 antes y después de la demanda</em>
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th Contenido del Artículo 48 de la Constitución Política de Colombia (antes de la demanda)
                th Contenido del Artículo 48 de la Constitución, después de la demanda
            tbody
              tr
                td(rowspan="8")(style="background-color:#F6F6F6") <strong>“La seguridad social es un servicio público de carácter obligatorio que se prestará bajo la dirección, coordinación y control del Estado, en sujeción a los principios de eficiencia, universalidad y solidaridad, en los términos que establezca la Ley.”</strong>
                td(style="background-color:#F6F6F6") Se garantiza a todos los habitantes el derecho irrenunciable a la seguridad social.
              tr
                td El Estado, con la participación de los particulares, ampliará progresivamente la cobertura de la seguridad social que comprenderá la prestación de los servicios en la forma que determine la ley.
              tr
                td(style="background-color:#F6F6F6") La seguridad social podrá ser prestada por entidades públicas o privadas, de conformidad con la ley.
              tr
                td No se podrán destinar, ni utilizar los recursos de las instituciones de la seguridad social para fines diferentes a esta.
              tr
                td(style="background-color:#F6F6F6") La ley definirá los medios para que los recursos destinados a pensiones mantengan su poder adquisitivo constante.

    p.mb-5 Acorde con los lineamientos dispuestos en la Constitución Nacional y teniendo en cuenta los diversos momentos de la seguridad social se puede resumir las diversas etapas por las cuales se ha pasado hasta el presente:

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-3.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/decorador-3.svg', alt='Texto que describa la imagen')
        .col-lg-7
          ul.lista-ul.mb-3
            li 
              i.lista-ul__vineta
              | Modelo higienista desarrollado entre 1886 y 1950.
            li 
              i.lista-ul__vineta
              | Sistema nacional de salud que tuvo vigencia desde el año 1970 hasta 1989. 
            li  
              i.lista-ul__vineta
              | Sistema de salud establecido entre 1990 y 1992.
            li  
              i.lista-ul__vineta
              | Sistema de seguridad social en salud que inició en el año 1993 hasta la actualidad.

    p.mb-5 A continuación, se describe las características principales de cada una de estas etapas, además de indicar la normatividad que le da base en sus funciones:

    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- text-small se usa para que los títulos sean mas pequeños
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="(1886 - 1950)")
          .col-md-6.mb-4.mb-md-0
            h3 Modelo higienista <br> (1886 - 1950)
            p A partir de 1947 la atención de aspectos de carácter sanitario fue realizada así:
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Preventiva y curativa.
              li 
                i.lista-ul__vineta
                | Financiada por los propios usuarios o por entidades religiosas.
              li  
                i.lista-ul__vineta
                | Especialización en los hospitales.

            p En el año 1945 se crean las Cajas de previsión social - CAJANAL.
            p En el año 1946 se crea el Instituto Colombiano de Seguros Sociales (ICSS) o también llamado Instituto de Seguros Sociales.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-5.png', alt='Texto que describa la imagen')


        .row(titulo="(1970 - 1989)")
          .col-md-6.mb-4.mb-md-0
            h3 Sistema nacional de salud <br> (1970 - 1989)
            p Se acudió a la teoría general de sistemas frente a la diversidad de instituciones prestadoras de servicios.
            p El servicio de salud se convierte en parte integral de la planeación socioeconómica del país.
            p Se adopta el Plan decenal de salud de Las Américas OPS/OMS, 1973, el cual concreta el Sistema Nacional de Salud – SNS

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-6.png', alt='Texto que describa la imagen')


        .row(titulo="(1990 - 1992)")
          .col-md-6.mb-4.mb-md-0
            h3 Sistema de salud <br> (1990 - 1992)
            p Se fundamenta en la Ley 10 de 1990, que dispone entre otros los siguientes criterios:
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | El derecho del servicio público de salud. 
              li 
                i.lista-ul__vineta
                | La prestación de los servicios de salud en todos los niveles a cargo de la nación. 
            p La administración de la salud se debe desarrollar en asocio con las entidades territoriales, de sus entes descentralizados y de las personas privadas autorizadas para el efecto.
            p El Estado intervendrá en el servicio público de salud.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-7.png', alt='Texto que describa la imagen')

        .row(titulo="(1993 a la fecha)")
          .col-md-6.mb-4.mb-md-0
            h3 Sistema general de seguridad social en salud <br> (1993 a la fecha)
            p La reforma de la seguridad social tiene lugar en el contexto de los procesos de apertura y globalización, de la necesidad de corregir defectos en eficiencia, equidad, cobertura, integralidad y calidad, y del desarrollo legislativo de la nueva Constitución de 1991, la cual indica de manera taxativa que “la seguridad social es un servicio público” y “se prestará bajo la coordinación y control del Estado”.
            p La Ley 100/1993 establece por primera vez en el país un sistema de seguridad social en salud con vocación explícita de cobertura universal, bajo los principios de equidad, solidaridad, eficiencia, calidad y participación social. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-8.png', alt='Texto que describa la imagen')

    Separador 
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2. Leyes (SGSS)

    p.mb-5 Con el fin de garantizar lo dispuesto en la Constitución y las reglamentaciones gubernamentales que se generaron a partir de la misma se crea el Sistema general Seguridad Social en Salud, la cual quedó regulada por medio de la Ley 100 de 1993, que garantiza en forma progresiva la cobertura y atención oportuna de la prestación de los servicios de salud a todos los habitantes del territorio nacional. Dicha ley establece algunos principios, los cuales fueron ampliados por la Ley 1122 de 2007 y posteriormente por la Ley 1438 de 2011, estas disposiciones pueden consultarse en la siguiente figura:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Principios Sistema general de Seguridad Social en Salud - SGSSS</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-9-1.svg', alt='La figura 1 describe las principales características entre la ley 100 de 1993 y la ley 1438 de 2011, ésta última promulgada con el fin de modificar la ley 100.')

    .row.mt-5
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Principios Sistema general de Seguridad Social en Salud - SGSSS</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-9-2.svg', alt='La figura 1 describe las principales características entre la ley 100 de 1993 y la ley 1438 de 2011, ésta última promulgada con el fin de modificar la ley 100.') 

    p.mb-5 Acorde con lo dispuesto en la Ley 100 de 1993 se generaron los diversos sistemas que componen el Sistema general de Seguridad Social en Salud – SGSSS.  A continuación, se hace una descripción de cada uno de estos.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0(style="color:#455B2D")
            i.fas.fa-arrow-right-to-arc(style="color:#455B2D")
            | <strong>Sistema general de pensiones</strong>

    p.mb-5 Tiene como objetivo garantizar a la población productiva el amparo a futuro de una pensión al momento de ya no ser productivo, derivado de la vejez, invalidez o muerte.

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-down-right")
        .cajon.color-primario.p-4.mb-4
          p Igualmente, pretende ampliar de forma progresiva la cobertura a los segmentos de población no cubiertos por el sistema. Este sistema lo conforma el régimen solidario de prima media con prestación definida y el régimen de ahorro individual con solidaridad.
          p Los referidos regímenes buscan garantizar a sus afiliados y a sus beneficiarios cuando sea el caso las siguientes prestaciones económicas: pensión de vejez, pensión de invalidez, pensión de sobrevivientes, indemnización sustitutiva o devolución de saldos y, auxilio funerario.

    p.mb-5 A continuación, podrá consultar en detalle los regímenes asociados con el sistema general de pensiones:

    ImagenInfografica.color-acento-botones.mb-5.desktop
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-10-1.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones.p-3(x="25%" y="18%" numero="+")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Es solidario.
          li 
            i.lista-ul__vineta
            | Fondo común de naturaleza pública.
          li 
            i.lista-ul__vineta
            | El Estado es el garante del pago de los beneficios.
          li 
            i.lista-ul__vineta
            | Los afiliados o sus beneficiarios obtienen la pensión por: vejez, invalidez, indemnización o sobrevivientes.

      .tarjeta.color-acento-botones.p-3(x="50%" y="83%" numero="+")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Consiste en un ahorro individual. 
          li 
            i.lista-ul__vineta
            | Debe tener un capital acumulado para acceder a la pensión.
          li 
            i.lista-ul__vineta
            | Es administrado por las sociedades administradoras de fondos de pensiones (AFP), y se basa en el ahorro proveniente de las cotizaciones y sus respectivos rendimientos financieros.

      .tarjeta.color-acento-botones.p-3(x="75%" y="18%" numero="+")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Normas especiales para acceder a la pensión, las cuales aplican para miembros de la policía, fuerzas militares, afiliados al fondo del magisterio y miembros no remunerados de las corporaciones públicas. 
            
    .row.mt-5
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-10-2.svg', alt='Figura 6 Densidad de siembra de árboles En la figura se observa la distancia de 3 metros entre zurcos de arbustos, igualmente la distancia de 25 - 30 metros entre arboles grandes, en la parte izquierda las imágenes de los árboles casuarina cordia, cedrela, cenizaro, aguacate, cítricos, mango, gliricidia, erytrina, inga; formas de copa estrella o tipo sombrilla.') 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0(style="color:#455B2D")
            i.fas.fa-arrow-right-to-arc(style="color:#455B2D")
            | <strong>Sistema general de riesgos profesionales</strong>

    p Este consiste en un conjunto de procedimientos destinados a prevenir, proteger y atender a los trabajadores de los efectos causados por las enfermedades profesionales y los accidentes que puedan ocurrirles con ocasión o como consecuencia del trabajo que desarrollan, además de mantener la vigilancia para el estricto cumplimiento de la normatividad en salud ocupacional. 
    p.mb-5 A partir de las diversas eventualidades que se puedan generar existen unas prestaciones económicas tales como: subsidio por incapacidad por accidente o enfermedad laboral, indemnización por pérdida de capacidad laboral, pensión de invalidez, sustitución pensional y auxilio funerario. Dentro de los principales objetivos del sistema general de riesgos profesionales se pueden describir: 

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-3.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/decorador-4.svg', alt='Texto que describa la imagen')
        .col-lg-7
          ul.lista-ul.mb-3
            li 
              i.lista-ul__vineta
              | Prevenir los accidentes de trabajo y las enfermedades laborales. 
            li 
              i.lista-ul__vineta
              | Mitigar la severidad por accidente de trabajo o enfermedad laboral. 
            li  
              i.lista-ul__vineta
              | Atender e indemnizar a los trabajadores o a sus familiares en caso de accidente de trabajo o enfermedad laboral.

    p.mb-5 En este sistema existen tres actores principales, el trabajador, el empleador y la administradora de riesgos laborales, y cada uno de ellos tiene un rol específico como se observa a continuación. 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-5.svg', alt='Texto que describa la imagen')
          
        h2.text-center Trabajador
        p Obligaciones
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Autocuidado de su salud. 
          li 
            i.lista-ul__vineta
            | Cumplir los estándares de seguridad y salud en el trabajo. 
          li  
            i.lista-ul__vineta
            | Informar al empleador acerca de su estado de salud. 
          li  
            i.lista-ul__vineta
            | Participar en todas las estrategias y acciones de promoción y prevención de la seguridad y la salud en el trabajo. 

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-6.svg', alt='Texto que describa la imagen')
          
        h2.text-center Empleador
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Es responsable de controlar el riesgo garantizando la operatividad del Sistema de gestión de Seguridad y Salud, así como informar a la ARL sobre aquellas novedades que pueda afectar el proceso.  

      .col-md.tarjeta.color-acento-contenido.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-7.svg', alt='Texto que describa la imagen')
          
        h2.text-center(style="color:#000 !important") Administradora de riesgos laborales
        p(style="color:#000 !important") Le corresponde:
        ul.lista-ul.mb-3
          li(style="color:#000 !important")  
            i.lista-ul__vineta(style="color:#000 !important") 
            | Facilitar el proceso de afiliación. 
          li(style="color:#000 !important")  
            i.lista-ul__vineta(style="color:#000 !important") 
            | Garantizar las prestaciones asistenciales y económicas. 
          li(style="color:#000 !important")  
            i.lista-ul__vineta(style="color:#000 !important") 
            | Promover las actividades de promoción y prevención.

    p.mb-5 En el plan de beneficios en el sistema de riesgos laborales se encuentran las prestaciones asistenciales y económicas, que se caracterizan por: 

    .row.justify-content-center
      .col-12.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.custom-c.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img-11.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Prestaciones asistenciales] <br> Asistencia médica general (quirúrgica, terapéutica y farmacéutica), servicios de hospitalización, odontología, diagnóstico y entrega de medicamentos, tratamientos, prótesis y órtesis (reparación y reposición), procesos de rehabilitación física y profesional, y transporte de pacientes. 

      .col-12.d-flex.align-items-stretch(data-aos="fade-down")
        .tarjeta-avatar-b.custom-c.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img-12.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Prestaciones económicas] <br> En cuanto a las prestaciones económicas se pueden identificar: el subsidio por incapacidad temporal, la indemnización por incapacidad permanente o parcial, el auxilio funerario, la pensión por invalidez o pensión para sobrevivientes. 
     
    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0(style="color:#455B2D")
            i.fas.fa-arrow-right-to-arc(style="color:#455B2D")
            | <strong>Servicios sociales complementarios</strong>

    p.mb-5 Este tipo de servicio se encuentra dirigido a la población mayor que vive en estado de mendicidad y tiene como único objetivo apoyar de manera económica a los ancianos que cumplan con los requisitos establecidos en la norma para dicho beneficio. Las modalidades de subsidio a las cuales puede aplicar esta población son: 

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#E6EBFB")
      .row
        .col-lg-12
          ul.lista-ul.mb-3
            li 
              i.lista-ul__vineta
              | <strong>Subsidio económico directo:</strong> se entrega el dinero directamente a la persona. 
            li 
              i.lista-ul__vineta
              | <strong>Subsidio económico indirecto:</strong> el dinero se entrega por medio de centros de bienestar para el adulto mayor. 
      .tarjeta.tarjeta.p-4(style="background-color:#FFFF")
        .row
          .col-lg-12
            p Este beneficio termina en caso que la persona muera, cuando se compruebe que la mendicidad se realiza como actividad productiva o cuando el adulto que accede al beneficio también reciba otro subsidio o pensión.

    p.mb-5 Los requisitos generales para acceder a este tipo de beneficio son: 

    .row 
      .col-3
        img(src='@/assets/curso/temas/tema1/img-13.png')
      .col-9
        TabsA.color-acento-botones.mb-5
          .tarjeta(style="background-color:#EAF2E1").p-4(titulo="Nacionalidad ")
            p Ser colombiano y haber residido en el país durante los últimos 10 años de forma continua.

          .tarjeta(style="background-color:#EAF2E1").p-4(titulo="Edad")
            p Tener más de 65 años de edad y no depender económicamente de ninguna persona. 

          .tarjeta(style="background-color:#EAF2E1; max-width:100%").p-4(titulo="Pobreza extrema")
            p No podrá contar con ningún tipo de ingreso y encontrarse en condiciones de extrema pobreza.

          .tarjeta(style="background-color:#EAF2E1; max-width:100%").p-4(titulo="Vivir institucionalizado")
            p Vivir en una institución sin ánimo de lucro, en donde se atienda a los ancianos en estado de indigencia, con limitaciones físicas o mentales.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0(style="color:#455B2D")
            i.fas.fa-arrow-right-to-arc(style="color:#455B2D")
            | <strong>Sistema de seguridad social en salud</strong>

    p.mb-5 Como ya se indicó, este sistema proviene de la Ley 100 de 1993, que manifiesta la obligatoriedad para todos los nacionales de afiliarse al sistema a través de los regímenes establecidos: contributivo, subsidiado y participantes vinculados, de excepción o especial, posibilitando así el acceso a la atención en salud en el marco del plan de beneficios establecidos.  

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-14.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 A nivel normativo el aseguramiento corresponde a todas aquellas actividades encaminadas a la administración del riesgo financiero, la gestión del riesgo en salud, la garantía de acceso efectivo, la garantía de la calidad en la prestación de los servicios de salud y la debida representación del afiliado ante el prestador y los demás actores del sistema. 

    p.mb-5 Esta participación de diversas entidades gubernamentales tiene a su cargo roles o actividades específicas, las cuales posibilitan el monitoreo, seguimiento y control de los diferentes procesos que surgen al interior de la prestación del servicio de salud, como puede verse en la siguiente figura: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Modelo de aseguramiento en salud</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-15-1.svg', alt='La figura 2, establece los indicadores del modelo de aseguramiento en salud, el cual corresponde a tres aspectos básicos: 1. Dirección, vigilancia y control. 2. Aseguramiento y financiación. 3. Prestadores de los servicios de salud.')

    .row.mt-5
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Modelo de aseguramiento en salud</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-15-2.svg', alt='La figura 2, establece los indicadores del modelo de aseguramiento en salud, el cual corresponde a tres aspectos básicos: 1. Dirección, vigilancia y control. 2. Aseguramiento y financiación. 3. Prestadores de los servicios de salud.') 

    p.mb-5 Para el acceso a los servicios de salud es indispensable que la población esté asociada a un tipo de régimen ya sea contributivo o subsidiado. Ellos tienen requisitos, beneficios y acciones que deben tenerse en cuenta y que podrá consultar a continuación.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-8.svg', alt='Texto que describa la imagen')
          
        h2.text-center Régimen contributivo
        p Creado para las personas con capacidad de pago de sus aportes, ya sea por tener un vínculo laboral, ser servidor público, pensionado, jubilado, trabajador independiente, etc. Aquella persona que realiza cotización en salud debe cotizar de manera paralela al sistema de pensiones; se tiene el derecho de afiliar a otros miembros de su círculo familiar.
        p Para acceder a los servicios de salud se definen los aportes al régimen contributivo, llamados cuotas moderadoras y copagos.

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-9.svg', alt='Texto que describa la imagen')
          
        h2.text-center Régimen subsidiado
        p Disponible para las personas que no tienen capacidad de pago y población vulnerable. Se determina la afiliación mediante una encuesta. Para aquellas personas que no pueden acceder al régimen subsidiado existe el régimen vinculado, que recoge todas las personas no censadas o clasificadas en la encuesta dispuesta por el régimen subsidiado.
        p No se cobra cuotas moderadoras y copagos, todo está cubierto en el plan de beneficios. Pero si queda clasificada en el nivel II hay cobro establecido de copago.

    p En el régimen contributivo se pueden afiliar a otros miembros de su círculo familiar como al esposo, esposa o compañero, compañera permanente, hijos no mayores a 25 años que dependan económicamente o que presenten incapacidad permanente, padres del afiliado que no sean pensionados y dependan económicamente de él. 
    p En el régimen subsidiado se considera la población vulnerable como la población infantil que haya sido abandonada y esté a cargo del Instituto Colombiano de Bienestar Familiar, los menores de edad que sean desvinculados del conflicto armado, comunidades indígenas, población en condición de desplazamiento forzado, sean desmovilizados o aquellas personas mayores que vivan en centros de protección, población ROM, entre otros. 
    p.mb-5 En el marco de los pagos exentos hay que aclarar que existen algunas situaciones que deben tenerse en cuenta, ya que acceden de manera gratuita al servicio: 

    .row.justify-content-center.mb-5
      .col-sm-3.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img-16.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>Discapacidades</strong>
            p.mb-0.text-small Los niños, niñas y adolescentes con discapacidades físicas, sensoriales y cognitivas, enfermedades catastróficas y ruinosas que haya sido certificadas por el médico tratante; y que a su vez hayan sido clasificadas en el nivel I o II, tendrán acceso gratuito a los servicios y medicamentos de la parte especial y diferenciada del Plan de beneficios.
           
      .col-sm-3.col-xl-4.mb-4.mb-xl-0(data-aos="fade-up")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema1/img-17.png' alt='AvatarTop' style='width:600px')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #F1ECE6")
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h5.mb-0 <strong>Víctimas de violencia</strong>
            p.mb-0.text-small Los niños, niñas y adolescentes víctimas de violencia física o sexual y todas las formas de maltrato, que estén certificados por la autoridad competente, tendrán acceso gratuito a los servicios para la rehabilitación física y mental.

    p.mb-5 Tenga presente que la atención en los siguientes servicios es gratuita, independientemente de la edad y del nivel socioeconómico.    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Servicios de salud exentos de pago</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-18-1.svg', alt='La figura 3 muestra los servicios de salud que se encuentran exentos de pago en el régimen subsidiado.')

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Servicios de salud exentos de pago</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-18-2.svg', alt='La figura 3 muestra los servicios de salud que se encuentran exentos de pago en el régimen subsidiado.') 

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-down-right")
        .cajon.color-secundario.p-4.mb-4
          p Acorde con las actualizaciones normativas también se encuentran exonerados del pago de cuotas moderadoras y de copagos las personas que pertenezcan a los grupos de población descritos en la Circular 16 de 2014, expedida por el Ministerio de Salud y Protección Social, que es actualizada por el Decreto 1652 de 2022 Régimen aplicable de copagos y cuotas moderadoras.

    p.mb-5 Además, no se debe olvidar que existe el régimen de excepción o especial, creado para atender a las personas que trabajan o han trabajado con instituciones públicas, tales como: docentes del Magisterio, Policía Nacional, Fuerzas Militares, trabajadores de Ecopetrol y telecomunicaciones. Este tipo de régimen existe ya que se cuenta con unas coberturas distintas a las dispuestas en los otros regímenes existentes, estas coberturas se enmarcan en el tipo de actividad y, así mismo, en el riesgo que puede tener la persona al asumir las actividades propias de su cargo, es decir, son personas expuestas a riesgos de salud diferentes en función de su actividad laboral y que, por tanto, deben acceder a un plan de beneficios especial. En la siguiente figura se indican otros grupos de población que se acogen al régimen de excepción o especial.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Régimen de excepción o especial</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-19-1.svg', alt='La figura 4, muestra los grupos poblacionales que se encuentran vinculados al régimen de excepción o especial.')

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Régimen de excepción o especial</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-19-2.svg', alt='La figura 4, muestra los grupos poblacionales que se encuentran vinculados al régimen de excepción o especial.') 

    p.mb-5 En cuanto a las leyes que dan soporte al sistema de salud se encuentran relacionadas las que contribuyen al mejoramiento del servicio y propenden por la calidad en la prestación del mismo. Entre estas se hallan las que se describen a continuación. 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Normatividad del sistema que regula la salud de los nacionales</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-20-1.svg', alt='La figura 5 establece las normas que regulan el sistema de salud en Colombia.')

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Normatividad del sistema que regula la salud de los nacionales</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-20-2.svg', alt='La figura 5 establece las normas que regulan el sistema de salud en Colombia.') 

    p Se presenta una breve descripción de cada una de las normativas que regulan la prestación del servicio de salud, de acuerdo con los aportes, los beneficios y el curso que establece cada una de estas:

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 1
        | Acorde con lo dispuesto en la Ley 100 de 1993 y teniendo en cuenta que este sistema normativo se ha ido fortaleciendo durante los años posteriores se deben enunciar aquellas normas que han dado mayor fuerza a la salud, como es el caso de la Ley 1122 de 2007, la cual pone de manifiesto que la salud pública está conformada por diversas políticas que tienen por  objetivo garantizar la salud de toda la población, tomando en cuenta acciones colectivas e individuales que aportan a las condiciones de vida, bienestar y por supuesto, de desarrollo. 
    
    p.mb-5 Esta Ley 1122 de 2007 enriqueció el proceso de atención en el sector salud cumpliendo con las siguientes características:  
    
    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/decorador-10.svg' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta(style="background-color:#EAF2E1; width:100%")
            .text.p-4
              p Contribuye al mejoramiento de la prestación de los servicios a los usuarios y la ampliación de la cobertura de aseguramiento.             

      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/decorador-10.svg' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta(style="background-color:#EAF2E1; width:100%")
            .p-4
              p Contribuye a la dirección, universalización, financiación y equilibrio entre los aseguradores y los prestadores que hacen parte del sistema. 

      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/decorador-10.svg' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta(style="background-color:#EAF2E1; width:100%")
            .p-4
              p Garantiza el fortalecimiento en los programas de salud pública y de todas aquellas actividades orientadas a inspeccionar, vigilar, controlar, organizar y definir el funcionamiento de las redes para la prestación de servicios de salud.  

    p.mb-5 Dentro de las acciones resolutorias enmarcadas en la Ley 1122 se pueden describir las siguientes:

    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.mb-5.mb-md-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Modos, condiciones y estilos de vida saludable")
            .col-md-12.mb-4.mb-md-0
              p Para entender esta actividad se disgregan sus términos:
              .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFF")
                .row
                  .col-lg-12
                    ul.lista-ul.mb-3
                      li 
                        i.lista-ul__vineta
                        | <strong>Modo de vida:</strong> manifiesta todas las actividades diarias de las diferentes esferas de la vida, es decir, cómo se vive, para qué se vive, cuáles son los objetivos de la vida y la escala de valores para alcanzarlos. 
                      li 
                        i.lista-ul__vineta
                        | <strong>Condiciones de vida:</strong> son las condiciones sujetas a la vivienda, socioeconómicas, dinámica familiar, cultura sanitaria, entre otras. 
                      li 
                        i.lista-ul__vineta
                        | <strong>El estilo de vida:</strong> son los hábitos de la persona, enmarcados en la alimentación, higiene personal, actividades lúdico-recreativas, relaciones sociales, sexualidad y mecanismos de participación social.
              p El Ministerio de Salud y Protección Social establece como modos, condiciones y estilos de vida saludable: la actividad física, la nutrición y la alimentación saludable, la prevención de consumo tabaco, el peso saludable, el lavado de manos, la salud visual, bucal y auditiva y, el entorno laboral formal saludable.
          
          .row(titulo="Poblaciones vulnerables")
            .col-md-12.mb-4.mb-md-0
              p El plan decenal de salud pública indica que las poblaciones vulnerables son aquellas que se han reconocido en sus diferencias desde lo sociocultural, económico y momento del curso de vida, agrupadas así:
              .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFF")
                .row
                  .col-lg-12
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | <strong>Curso de vida</strong>
                      li
                        ul
                          li 
                            i.lista-ul__vineta
                            | Niños y niñas 
                          li 
                            i.lista-ul__vineta
                            | Adolescentes
                          li 
                            i.lista-ul__vineta
                            | Jóvenes
                          li 
                            i.lista-ul__vineta
                            | Adultos
                          li 
                            i.lista-ul__vineta
                            | Adultos mayores 
                    
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | <strong>Por condiciones o situaciones particulares:</strong>
                      li
                        ul
                          li 
                            i.lista-ul__vineta
                            | Grupos étnicos
                          li 
                            i.lista-ul__vineta
                            | Poblaciones en situación de discapacidad 
                          li 
                            i.lista-ul__vineta
                            | Víctimas del conflicto armado
          
          .row(titulo="Enfermedades transmisibles y no transmisibles")
            .col-md-12.mb-4.mb-md-0
              p Las enfermedades transmisibles son aquellas que se transmiten de humano a humano, de animal a humano por medio de vectores o al exponerse a material infeccioso. MinSalud contempla:
              .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFF")
                .row
                  .col-lg-12
                    ul.lista-ul.mb-3
                      li 
                        i.lista-ul__vineta
                        | COVID-19. 
                      li 
                        i.lista-ul__vineta
                        | IRA: insuficiencia respiratoria aguda. 
                      li 
                        i.lista-ul__vineta
                        | Aedes aegypti (zika, dengue, chikunguña). 
                      li 
                        i.lista-ul__vineta
                        | Enfermedades infecciosas desatendidas reportadas en Colombia: oncocercosis, tracoma, geohelmintiasis, enfermedad de chagas, lepra, tétanos neonatal, sífilis congénita, malaria y rabia transmitida por perros. 
                      li 
                        i.lista-ul__vineta
                        | Ébola. 
                      li 
                        i.lista-ul__vineta
                        | Geohelmintiasis.
                      li 
                        i.lista-ul__vineta
                        | Hepatitis. 
                      li 
                        i.lista-ul__vineta
                        | Sarampión. 
                      li 
                        i.lista-ul__vineta
                        | Infección asociada a la atención en salud (IAAS) y la resistencia antimicrobiana (RAM). 
                      li 
                        i.lista-ul__vineta
                        | Tuberculosis.
                      li 
                        i.lista-ul__vineta
                        | Leishmaniasis.
                      li 
                        i.lista-ul__vineta
                        | Toxoplasmosis. 
                      li 
                        i.lista-ul__vineta
                        | Enfermedades transmitidas por alimentos. 
                      li 
                        i.lista-ul__vineta
                        | Escabiosis,

              p Enfermedades no transmisibles son consideradas crónicas, pues presentan larga duración y lenta progresión. Se consideran las siguientes: enfermedades cardiovasculares, diabetes, cáncer, enfermedades respiratorias crónicas y enfermedades huérfanas (las que afectan un número pequeño de personas respecto a la población en general). 

          .row(titulo="Sexualidad, derechos sexuales y derechos reproductivos")
            .col-md-12.mb-4.mb-md-0
              p Para el Ministerio de Salud y Protección Social, la sexualidad es considerada una dimensión prioritaria en la vida de las personas. Acorde con lo establecido en el marco de la práctica de los derechos humanos, sexuales y reproductivos, por tanto, el gobierno ha encaminado sus acciones hacia: 
              .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFF")
                .row
                  .col-lg-12
                    ul.lista-ul.mb-3
                      li 
                        i.lista-ul__vineta
                        | La sexualidad y los derechos. 
                      li 
                        i.lista-ul__vineta
                        | Violencia de género. 
                      li 
                        i.lista-ul__vineta
                        | Salud materna. 
                      li 
                        i.lista-ul__vineta
                        | Anticoncepción. 
                      li 
                        i.lista-ul__vineta
                        | Cánceres relacionados con la sexualidad y la reproducción. 
                      li 
                        i.lista-ul__vineta
                        | Infecciones de transmisión sexual - VIH/SIDA. 
                      li 
                        i.lista-ul__vineta
                        | Prevención del aborto inseguro e interrupción voluntaria del embarazo. 
                      li 
                        i.lista-ul__vineta
                        | Adolescentes y jóvenes.

          .row(titulo="Epidemiología y demografía")
            .col-md-12.mb-4.mb-md-0
              p La inteligencia epidemiológica responde efectivamente a riesgos contingentes de la salud. Esta vigilancia epidemiológica cuenta con tres elementos clave: 
              .tarjeta.tarjeta.p-4.mb-3(style="background-color:#FFFF")
                .row
                  .col-lg-12
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | <strong>Planeación, monitoreo y evaluación del plan decenal de salud pública, consiste en:</strong>
                      li
                        ul
                          li 
                            i.lista-ul__vineta
                            | Análisis de la situación de salud.
                          li 
                            i.lista-ul__vineta
                            | Caracterización de la población afiliada a las EAPB.
                          li 
                            i.lista-ul__vineta
                            | Comisión intersectorial de salud pública.
                    
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | <strong>Gestión del conocimiento y fuentes de información permite la información, los documentos y el análisis que posibilite comprender y dimensionar daños, riesgos y determinantes de la salud en el país. Estrategias:</strong>
                      li
                        ul
                          li 
                            i.lista-ul__vineta
                            | Sistema nacional de estudios y encuestas poblacionales.
                          li 
                            i.lista-ul__vineta
                            | Gestión de registros administrativos. 
                          li 
                            i.lista-ul__vineta
                            | Observatorio y servicios de información.

                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | <strong>Vigilancia en salud pública. Ayuda en la recolección, análisis, interpretación y divulgación de los datos de salud para identificar eventos que le afecten, además de vigilar la salud pública desde la comunidad.</strong>
          
          .row(titulo="Salud ambiental")
            .col-md-12.mb-4.mb-md-0
              p Refiere a la interacción del hombre con factores del entorno (elementos físicos, químicos, biológicos y sociales). Se considera una dimensión unida a las políticas públicas. Favorece la calidad y la salud de la población, garantizando el derecho a un ambiente sano. 
          
          .row(titulo="Salud mental y sustancias psicoactivas")
            .col-md-12.mb-4.mb-md-0
              p La salud mental al igual que la física requiere de atención integral e integrada en torno a la promoción, prevención y rehabilitación en el marco de los aspectos individuales, comunitarios y familiares. Es importante reconocer que la salud mental es considerada un derecho fundamental; una adecuada salud mental apropia entre otros elementos: la promoción de la convivencia, la prevención de las violencias, así como la prevención y atención al consumo de sustancias psicoactivas.
          
          .row(titulo="Actividades de vacunación")
            .col-md-12.mb-4.mb-md-0
              p Las vacunas cobran su importancia al entender su uso como medio de protección ante diversas enfermedades, por tanto, hace parte integral de las acciones en pro de la salud pública. 
          
          .row(titulo="La nutrición y alimentación saludable")
            .col-md-12.mb-4.mb-md-0
              p Esta estrategia se articula con los modos, las condiciones y los estilos de vida saludable. Es indispensable garantizar todas aquellas acciones que promuevan el derecho a la alimentación sana durante todo el curso de vida. Como parte de los principales objetivos a tener en cuenta dentro de la nutrición y la alimentación saludable se destacan la reducción o prevención de la malnutrición, el control y el manejo de los riesgos sanitarios y fitosanitarios de los alimentos, así como la seguridad alimentaria y nutricional. Como parte de la nutrición y la alimentación saludable se pueden destacar las siguientes acciones: alimentación y nutrición, lactancia materna, control de la deficiencia de micronutrientes, alimentación saludable, inocuidad y calidad de los alimentos, atención integral a la desnutrición aguda y política de seguridad alimentaria y nutricional.

      .col-md-4.mb-5.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema1/img-21.png', alt='Texto que describa la imagen')
    
    p.mb-5 En cuanto a la salud ambiental se debe tener en cuenta las condiciones ambientales que aportan elementos diversos, buscando garantizar la debida ejecución de acciones para su implementación, estas acciones pueden consultarse a continuación.

    SlyderB.mb-5(:datos="datosSlyder1")

    p.mb-5 Asimismo, se contempla el Plan decenal de salud pública como aporte a la ejecución de acciones que redunden en el bienestar de la salud. Este plan corresponde con los objetivos, las metas, las estrategias para atender los eventos en salud, el bienestar integral y la calidad de vida de las personas en el territorio nacional, y se actualiza acorde con las necesidades detectadas en los centros de inteligencia epidemiológica.

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-down-right")
        .cajon.color-secundario.p-4.mb-4
          p Este Centro Nacional de Enlace - CNE actúa como unidad de inteligencia encargada de monitorear, evaluar y notificar todos los eventos detectados y reportados por la población en el marco de los lineamientos establecidos en el reglamento sanitario internacional dispuesto por la OMS (2005). Las actividades de este organismo están orientadas principalmente hacia los eventos en salud pública, en especial a los relacionados con epidemias o emergencias de tipo sanitario. 

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 2
        | <strong>Ley 1438 de 2011</strong> fue creada con el fin de reformar el sistema, logrando así reforzar y mejorar la prestación del servicio. Este fortalecimiento se basa en la atención primaria en salud y tiene como objetivo actuar en conjunto con el Estado, las instituciones y la sociedad, con el fin de mejorar la salud por medio de la creación de ambientes saludables. Para garantizar estas acciones la norma incluye los lineamientos necesarios para que el Ministerio de Salud y Protección Social genere el Plan decenal de salud pública, el cual debe ayudar a mejorar el estado de salud de la población por medio de las acciones en salud pública, la atención primaria en salud y las actividades de promoción y prevención. 
    
    p.mb-5 Los principales elementos de esta ley son: 

    .row.mb-5 
      .col-4
        img(src='@/assets/curso/temas/tema1/img-32.png')
      .col-4
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Atención primaria en salud") Trabaja sobre la promoción de la salud, prevención de la enfermedad, actividades diagnósticas, tratamiento y rehabilitación en todos los niveles de atención. Fortaleciendo servicios de baja complejidad y optimizando la capacidad resolutiva mediante el apoyo a equipos básicos de salud, quienes realizan el diagnóstico, identifican los riesgos, informan sobre el portafolio de servicios, promueven la afiliación e inducen la demanda de servicios. 
          
          p.text-small(numero="2" titulo="Atención preferente") Atención de tipo preferente y diferencial para la infancia y la adolescencia. 
          
          p.text-small(numero="3" titulo="Servicio de salud permanente") El acceso a los servicios de salud en el territorio nacional se dará de forma permanente e ininterrumpida por medio de la portabilidad nacional. 
          
          p.text-small(numero="4" titulo="Actualización del plan") Acorde con las condiciones del perfil epidemiológico y las condiciones de enfermedad detectadas en la población, se debe actualizar el plan de beneficios con una periodicidad de 2 años. 
          
          p.text-small(numero="5" titulo="Régimen subsidiado") Será administrado por los entes territoriales.

      .col-4
        LineaTiempoD.color-acento-botones
          p.text-small(numero="6" titulo="Universalización del aseguramiento") Indica que todas las personas tendrán derecho acceder a los servicios de salud, incluso,  a las personas que provienen del extranjero se les ofrecerá seguro médico o plan voluntario de salud (plan de atención complementaria, medicina prepagada, pólizas de seguros y otros planes autorizados por la Superintendencia financiera y la Superintendencia nacional de salud.
          
          p.text-small(numero="7" titulo="Redes integradas de servicios de salud") Estas son definidas como un grupo de organizaciones o redes que prestan servicios de salud (prestadores públicos, privados o mixtos) en un espacio poblacional determinado. Se debe tener presente que estas redes deben dar atención primaria en salud, teniendo en cuenta a la persona, la familia y la comunidad, así mismo, identificando todos los factores de riesgo y protectores.
          
          p.text-small(numero="8" titulo="Atención primaria") Las acciones de atención primaria en salud también deberán tener presente la política nacional de salud mental por medio de la estrategia de atención integral en salud mental.
          
          p.text-small(numero="9" titulo="Personas con discapacidad") A las personas con discapacidad también se les debe garantizar la atención integral en salud.
          
          p.text-small(numero="10" titulo="Formación continua") Se debe garantizar la formación continua del talento humano en salud.

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Si bien es cierto la Ley 1438 de 2011 propuso lineamientos que permitieron la construcción del actual Modelo integral de atención en salud (MIAS) propuesto por el Gobierno Nacional por medio de la <strong>Ley estatutaria 1751 de 2015,</strong> fue esta última la que apropia y ordena los servicios de salud, además de hacer un puente efectivo de comunicación y acción con la comunidad y, contribuir en el fortalecimiento de las capacidades institucionales en función de la prevención y la promoción. 

    p.mb-5 Esta ley estatutaria busca principalmente la calidad, la atención integral, la continuidad – oportunidad, la reducción de las desigualdades, la idoneidad y la obligatoriedad sobre zonas marginales; esta atención integral se realiza por medio de la política de atención integral en salud, la cual opera a través de diversos componentes, los cuales son: 

    ImagenInfografica.color-acento-botones.mb-5.desktop
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-33-1.svg', alt='Texto que describa la imagen')

      .tarjeta.color-secundario1.p-3(x="4.5%" y="13%" numero="1")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | El asegurador identifica el conglomerado de la población y sugiere el plan individual. 
          li 
            i.lista-ul__vineta
            | La IPS identifica las necesidades de la familia y la persona y, sugiere el plan de cuidado. 
          li 
            i.lista-ul__vineta
            | La entidad territorial identifica las necesidades de la población general y sugiere el plan poblacional.

      .tarjeta.color-secundario1.p-3(x="4.5%" y="31%" numero="2")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Las rutas integrales son reguladas por los entornos y los tipos de intervenciones realizadas. 
          li 
            i.lista-ul__vineta
            | Las intervenciones están orientadas hacia la atención para la promoción y el mantenimiento de la salud, la atención para grupos de riesgo y las rutas de atención específica (actividades de recuperación, rehabilitación y paliación). 

      .tarjeta.color-secundario1.p-3(x="4.5%" y="50%" numero="3")
        p Están conformadas por:
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | El prestador primario.
          li 
            i.lista-ul__vineta
            | El prestador complementario. 
          li 
            i.lista-ul__vineta
            | Entidades administradoras de planes de beneficio. 
          li 
            i.lista-ul__vineta
            | Entidad territorial. 

      .tarjeta.color-secundario1.p-3(x="4.5%" y="68%" numero="4")
        p Se articula la gestión colectiva e individual del riesgo entre: 
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Entidad territorial: gestión del riesgo colectivo, comunicación del riesgo, promoción de la salud, agenda intersectorial y rector territorial de salud.  
          li 
            i.lista-ul__vineta
            | EAPB- ARL (empleador): gestión del riesgo individual, comunicación del riesgo a los afiliados, apoyo al autocuidado, prevención primaria, secundaria y terciaria.  
          li 
            i.lista-ul__vineta
            | Usuario, paciente - trabajador: cuidado y autocuidado. 
          li 
            i.lista-ul__vineta
            | Prestador primario: gestión del riesgo individual, gestión clínica, coordinación de la atención.  
          li 
            i.lista-ul__vineta
            | Prestador complementario: gestión clínica.

      .tarjeta.color-secundario1.p-3(x="4.5%" y="86%" numero="5")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Se definen las zonas urbanas, rural, alta ruralidad y zona rural dispersa. 
 
      .tarjeta.color-secundario1.p-3(x="95.5%" y="13%" numero="6")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Compuesto por el equipo comunitario y el prestador primario, las especialidades ambulatorias y las acciones intersectoriales. 
      
      .tarjeta.color-secundario1.p-3(x="95.5%" y="31%" numero="7")
        p El prestador primario está conformado por: 
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Comunidad: organizaciones sociales y comunitarias, médicos y agentes tradicionales, parteras y cuidadores, gestor comunitario y líderes comunitarios. 
          li 
            i.lista-ul__vineta
            | Puesto de salud: auxiliares en salud pública, gestores en salud y otros sectores. 
          li 
            i.lista-ul__vineta
            | Centro de salud: profesionales generales, técnicos en salud y auxiliares en salud. 
          li 
            i.lista-ul__vineta
            | IPS baja complejidad: profesionales, técnicos y auxiliares; especialidad en medicina y salud comunitaria. 
          li 
            i.lista-ul__vineta
            | IPS mediana complejidad: especialidades clínicas básicas. 
      
      .tarjeta.color-secundario1.p-3(x="95.5%" y="50%" numero="8")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | El rol del asegurador está enfocado en la habilitación técnica y financiera. 
          li 
            i.lista-ul__vineta
            | Se realizan actividades de administración del riesgo financiero, la gestión de la red de servicios, la representación del afiliado y la gestión del riesgo en salud.
      
      .tarjeta.color-secundario1.p-3(x="95.5%" y="68%" numero="9")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Se define el sistema de incentivos en torno al sistema por pago, orientado a resultados e incentivos para el talento humano y los incentivos a usuarios. 
      
      .tarjeta.color-secundario1.p-3(x="95.5%" y="86%" numero="10")
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Requerimientos del sistema de información. 
          li 
            i.lista-ul__vineta
            | Fortalecimiento del recurso humano en salud. 
          li 
            i.lista-ul__vineta
            | Investigación, innovación y apropiación del conocimiento. 

    .row.mt-5
      .col-10.col-md-10.col-lg-12.movil
        figure.mb-4
          img(src='@/assets/curso/temas/tema1/img-33-1.svg', alt='') 

        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo_componente_ley_estatutaria.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Descargar.</strong> Componentes de la Ley estatutaria 1751 de 2015.

    p.mb-5 En el componente relacionado con las rutas integrales de atención en salud -RIAS, la descripción de los elementos que la conforman se encuentra explicado en la siguiente figura.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Rutas integrales de atención en salud -RIAS</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-34-1.svg', alt='La figura 6 indica cuales son las rutas integrales de atención en salud - RIAS, como son: prestador primario, prestador complementario, entidades administrativas de planes de beneficio y entidades territoriales.')

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Rutas integrales de atención en salud -RIAS</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-34-2.svg', alt='La figura 6 indica cuales son las rutas integrales de atención en salud - RIAS, como son: prestador primario, prestador complementario, entidades administrativas de planes de beneficio y entidades territoriales.') 

    .row
      .col-md-8
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 4
            | En la reglamentación orientada hacia la política de atención integral en salud se debe tener presente la <strong>Resolución 429 de 2016,</strong> que crea los fundamentos enfocados en la Política de Atención Integral en Salud- PAIS, y se operativiza mediante el Modelo integral de atención en salud - MIAS. Cabe resaltar que la política de atención integral sienta sus bases en la atención primaria en salud - APS y tiene en cuenta elementos como la salud comunitaria y familiar, la gestión integral del riesgo, el cuidado, y así mismo, el enfoque diferencial entre territorios y poblaciones. <br><br> La política de atención integral en salud - PAIS garantiza su modelo operacional por medio del modelo integral de atención en salud - MIAS, el cual pone en marcha todo el conjunto de políticas, planes, proyectos, normas, guías, lineamientos, protocolos, instrumentos, metodologías, documentos técnicos, logrando un efecto positivo sobre los objetivos del Sistema obligatorio de garantía de la calidad.  

      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema1/img-35.png', alt='Imagen decorativa')

    Separador 

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3. Decretos (mecanismos de habilitación, políticas públicas en salud)

    p El sector de la salud se ha actualizado permanentemente mediante las normativas, en aras de generar procesos de calidad tanto en la prestación del servicio como en reconocer los derechos y los deberes de cada actor participante desde la política pública de este sector. 
    p.mb-5 Son varios los decretos que regulan la salud, se hará un breve recorrido por algunos de los más relevantes para el tema que se aborda:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-13.svg', alt='Texto que describa la imagen')
          
        h2.text-center Decreto 780 de 2016
        p Indica el proceso de afiliación de usuarios al sistema general de seguridad social en salud para el régimen contributivo y subsidiado. Describe la portabilidad, la implementación y la puesta en marcha del Sistema de información transaccional, que facilita la información de los afiliados. Además, aborda procesos como el flujo financiero, la administración de recursos, los elementos administrativos y procedimentales, relacionados con el sistema obligatorio de calidad en la atención de salud, buscando garantizar la pertinencia, accesibilidad, continuidad, oportunidad y seguridad en la atención, mediante diferentes sistemas entre los que están: 
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Sistema único de habilitación.
          li 
            i.lista-ul__vineta
            | Auditoría para el mejoramiento de la calidad de la atención en salud. 
          li 
            i.lista-ul__vineta
            | Sistema único de acreditación.
          li 
            i.lista-ul__vineta
            | Sistema de información para la calidad.

      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/decorador-14.svg', alt='Texto que describa la imagen')
          
        h2.text-center Decreto 3518
        p Establece medidas sanitarias en acciones de vigilancia en salud pública; aislamiento, internación, cuarentena, vacunación y medidas profilácticas dirigidas a las personas y los animales. Este control de agentes, materiales de tipo infeccioso y tóxico, vectores y reservorios posibilita desocupar/desalojar lugares, la suspensión de servicios, el decomiso/destrucción de productos y la suspensión de la venta/empleo de estos. Reglamenta el sistema de vigilancia en salud pública, responsabilidad de MinSalud y de otras instituciones que ejercen control sanitario como:
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Instituto Nacional de Salud. 
          li 
            i.lista-ul__vineta
            | Instituto nacional de vigilancia de medicamentos y alimentos.
          li 
            i.lista-ul__vineta
            | Direcciones territoriales de salud.
          li 
            i.lista-ul__vineta
            | Entidades administradoras de planes de beneficios de salud. 
          li 
            i.lista-ul__vineta
            | Unidades de biomedicina, notificadoras y generadoras de datos (IPS, laboratorio clínico, bancos de sangre y de órganos).

    p.mb-5 A partir de la información y de los resultados obtenidos gracias al sistema de vigilancia en salud pública se pueden cumplir con varios objetivos, tales como: 

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-3.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/decorador-15.svg', alt='Texto que describa la imagen')
        .col-lg-7
          ul.lista-ul.mb-3
            li 
              i.lista-ul__vineta
              | Valorar y detectar cambios en el marco de los sucesos de interés en salud pública. 
            li 
              i.lista-ul__vineta
              | Identificar los brotes y las epidemias, con el fin de organizar las respectivas acciones a seguir. 
            li  
              i.lista-ul__vineta
              | Conocer tanto los factores de riesgo como los protectores, relacionados con los eventos en salud pública. 
            li  
              i.lista-ul__vineta
              | Promover las acciones en torno a la investigación epidemiológica. 
            li  
              i.lista-ul__vineta
              | Ayudar a que se generen las debidas acciones en torno a la planificación en salud (medidas de prevención, promoción en salud y políticas en salud pública). 
            li  
              i.lista-ul__vineta
              | Promover las acciones que mejoren la calidad de los servicios de salud, así como la evaluación y el seguimiento de las intervenciones en salud. 

    p.mb-5 Para lograr los objetivos propuestos dentro del sistema, cada actor participante debe garantizar el cumplimiento de las funciones asignadas, cada uno es elemento clave desde la planificación, la operación y la evaluación de los procesos delegados. Acorde con los lineamientos que deben cumplir todos los sectores respecto al cuidado de la salud se resalta que en el cumplimiento de las normas en salud pública existen algunos tipos de sanciones ante el incumplimiento de exigencias, estas pueden describirse como amonestaciones, multas, decomiso, suspensión de permiso sanitario, cierre de tipo temporal o definitivo del establecimiento, edificación o servicio. 

    Separador 
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4. Resoluciones

    p.mb-5 Las redes integrales de prestadores de servicios de salud que hacen parte importante del Modelo integral de atención en salud -MIAS deben cumplir unos requisitos especiales, los cuales se fundamentan mediante la promulgación de resoluciones entre las que están:

    .row(data-aos="fade-right")
      .col-4
        img(src='@/assets/curso/temas/tema1/img-36.png')
      .col-8
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | La habilitación: requisito de orden transversal en todo el proceso de atención y que está direccionado desde la Resolución 1441 de 2016. 
          li 
            i.lista-ul__vineta
            | Estas condiciones de habilitación han sido actualizadas en el marco de la Resolución 3100 de 2019, que busca este propósito en relación con los procedimientos y las condiciones de inscripción de los prestadores de servicios de salud.
        p Actualmente, el Ministerio de Salud y Protección Social tiene proyectada una resolución que establece los procesos y los procedimientos para la habilitación y continuidad de las Redes integrales de prestadores y proveedores para la atención en salud – REDES. La cual debe monitorear todas las herramientas operativas y adecuaciones de las condiciones de habilitación y continuidad de las REDES, desde el marco de la operación, las novedades, el seguimiento y la evaluación.
        p.mb-3 En las condiciones de habilitación para las REDES se pueden describir cuatro elementos básicos que son:

        .row.mb-5
          .col-md-3.col-lg.tarjeta--tabla1.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema1/img-37.svg' alt='AvatarTop')
            p.text-center Estándares para la habilitación

          .col-md-3.col-lg.tarjeta--tabla2.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema1/img-38.svg' alt='AvatarTop')
            p.text-center Criterios

          .col-md-3.col-lg.tarjeta--tabla1.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema1/img-39.svg' alt='AvatarTop')
            p.text-center Modo de verificación

          .col-md-3.col-lg.tarjeta--tabla2.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/temas/tema1/img-40.svg' alt='AvatarTop')
            p.text-center Alcance y especificidad

    p Por medio de los criterios se organizan de forma detallada todos los requisitos que deben cumplir las EPS respecto a los estándares de estructura, proceso y resultado. Es importante tener claridad que, dada la dimensión de acción de las EPS, los estándares de habilitación están orientados hacia el inicio (entrada o procesos previos) y la permanencia (condiciones y requisitos a evidenciar durante la operación de las acciones en salud) de las actividades en salud.
    p.mb-5 Como se puede evidenciar hasta el momento, todos los actores que participan en los procesos de atención en salud deben cumplir y dar garantía de calidad en la prestación de los servicios, en donde el fin último es la salud y el bienestar de la población, teniendo en cuenta los elementos de salud pública y vigilancia del comportamiento de la salud a nivel nacional. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-41.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 En el material complementario, podrá acceder al <strong>Manual de habilitación de REDES integrales de prestadores de servicios de salud para las entidades departamentales y distritales de salud.</strong> Este documento sirve de apoyo para realizar el proceso de habilitación de las Redes integrales de prestadores de servicios de salud - RIPSS por cada Entidad promotora de salud - EPS autorizada a operar en el departamento o distrito, en cumplimiento de lo previsto en la Resolución 1441 de 2016,






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'El Estado',
        texto:
          'A través del Ministerio de Salud y Protección Social que actúa como organismo de coordinación, dirección y control.',
        imagen: require('@/assets/curso/temas/tema1/img-1.png'),
      },
      {
        titulo: 'Las entidades promotoras de salud - EPS',
        texto:
          'Responsables de la afiliación y el recaudo de las cotizaciones y de garantizar la prestación del plan obligatorio de salud a los afiliados.',
        imagen: require('@/assets/curso/temas/tema1/img-2.png'),
      },
      {
        titulo: 'Las instituciones prestadoras de salud -IPS-',
        texto:
          'Es decir, los hospitales, clínicas y laboratorios, entre otros, encargados de prestar la atención a los usuarios.',
        imagen: require('@/assets/curso/temas/tema1/img-3.png'),
      },
      {
        titulo:
          'Entidades territoriales y la Superintendencia Nacional de Salud',
        texto:
          'Las entidades territoriales del orden departamental, distrital y municipal corresponden a las personas jurídicas, de derecho público, que componen la división político-administrativa del Estado, gozando de autonomía en la gestión de sus intereses. <br><br> Mientas que la Superintendencia Nacional de Salud realiza la inspección, la vigilancia y el control del cumplimiento de las normas constitucionales y legales que reglamentan el Sistema general de Seguridad Social en Salud, incluyendo las normas técnicas, científicas, administrativas y financieras del sector salud.',
        imagen: require('@/assets/curso/temas/tema1/img-4.png'),
      },
    ],
    datosSlyder1: [
      {
        titulo: 'Agua y saneamiento básico',
        texto:
          'Es indispensable que en todos los entornos en los cuales se desarrolla y participa el ser humano (vivienda, centros de educación, trabajo, fábricas, empresas, entre otros) se cuente con los elementos de saneamiento necesarios para disminuir aquellos factores contaminantes que pueden poner en riesgo la salud de las personas.',
        imagen: require('@/assets/curso/temas/tema1/img-22.png'),
      },
      {
        titulo: 'Inspección, vigilancia y control sanitario',
        texto:
          'De responsabilidad estatal y ciudadana, consiste en proteger la salud individual y colectiva mediante la minimización de los riesgos, daños e impactos negativos para la salud humana por el uso de consumo de bienes y servicios en establecimientos de interés en salud pública, a través de la verificación, asesoría y asistencia técnica del cumplimiento normativo en relación a las condiciones sanitarias: infraestructura, agua y saneamiento básico, control de calidad, procesos y procedimientos, cualificación del talento humano y monitoreo de los efectos en salud.',
        imagen: require('@/assets/curso/temas/tema1/img-23.png'),
      },
      {
        titulo: 'Sustancias y productos químicos',
        texto:
          'Se entiende por producto químico toda sustancia, sola o en forma de mezcla o preparación, ya sea fabricada u obtenida de la naturaleza, excluidos los organismos vivos.',
        imagen: require('@/assets/curso/temas/tema1/img-24.png'),
      },
      {
        titulo: 'Mercurio',
        texto:
          'El efecto en la salud debido a una exposición al mercurio puede generar graves alteraciones y se darán según el tipo de mercurio expuesto, pues hay mercurio orgánico e inorgánico; al estar expuesto al mercurio inorgánico (vapores) se pueden generar alteraciones del sistema nervioso central, la función del riñón y de la glándula tiroidea. En cambio, la exposición al mercurio orgánico genera problemas en el neurodesarrollo, afectando a bebés cuyas madres estuvieron expuestas.',
        imagen: require('@/assets/curso/temas/tema1/img-25.png'),
      },
      {
        titulo: 'Aire y salud',
        texto:
          'El aire, al igual que el agua, puede contener elementos contaminantes que generar riesgos en la salud.',
        imagen: require('@/assets/curso/temas/tema1/img-26.png'),
      },
      {
        titulo: 'Minería y salud',
        texto:
          'La actividad minera es aquella que se encarga de extraer, procesar y transformar los minerales o materiales existentes en el subsuelo o el suelo. Este tipo de actividades también puede generar un riesgo para la salud. Con frecuencia estos elementos contaminantes producto de la minería pueden estar presentes en el agua, el aire y el suelo.',
        imagen: require('@/assets/curso/temas/tema1/img-27.png'),
      },
      {
        titulo: 'Entornos saludables',
        texto:
          'Son todos aquellos espacios de la vida cotidiana como el hogar, la comunidad, los espacios educativos y laborales. En estos espacios se promueven las actividades de participación social, la construcción de políticas públicas y el mejoramiento de los mimos, con el fin de contribuir positivamente en la salud de las personas.',
        imagen: require('@/assets/curso/temas/tema1/img-28.png'),
      },
      {
        titulo: 'Zoonosis',
        texto:
          'Hace referencia a todas aquellas enfermedades de tipo infeccioso que son transmitidas de los animales a los hombres. Dentro de las enfermedades más comunes se pueden destacar: la rabia, la leptospirosis, la encefalitis equina, la brucelosis, la tuberculosis bovina, la enfermedad de rickettsiosis, el carbón bacteridiano (carbunco), la cisticercosis y la influenza aviar.',
        imagen: require('@/assets/curso/temas/tema1/img-29.png'),
      },
      {
        titulo: 'Cambio climático',
        texto:
          'Los fenómenos asociados al cambio climático afectan de manera diversa los ecosistemas y, por tanto, esto genera un impacto en las condiciones de salud de la población.',
        imagen: require('@/assets/curso/temas/tema1/img-30.png'),
      },
      {
        titulo: 'Vecindad y fronteras',
        texto:
          'Son todas aquellas condiciones que delimitan o facilitan la interacción entre las comunidades. Tanto las características de la vecindad como de las fronteras, facilitan la cooperación de políticas para el manejo de las diversas problemáticas entre el ambiente y las condiciones de salud.',
        imagen: require('@/assets/curso/temas/tema1/img-31.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
