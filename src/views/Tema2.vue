<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistema Obligatorio de Garantía de la Calidad en Salud (SOGCS)
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 El Decreto 780 de 2016, define el SOGCS, como el conjunto de instituciones, normas, requisitos, mecanismos y procesos deliberados y sistemáticos del sector salud para generar, mantener y mejorar la calidad de servicios de salud del país (Ministerio de Salud y Protección Social, 2016).

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1. Decretos

    p Como se mencionó anteriormente, los servicios de salud deben cumplir con los elementos de calidad que garanticen que la prestación del servicio se realice siguiendo los parámetros establecidos en la norma. Ya establecidas algunas de estas para regular el proceso de atención en salud con parámetros de calidad se cuenta con los siguientes decretos:    

    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | <strong>Decreto 1011 de 2006,</strong> que establece el Sistema obligatorio de garantía de calidad de la atención de salud del Sistema general de seguridad social en salud. Relaciona en conjunto las instituciones, las normas, los requisitos, los mecanismos y los procesos deliberados y sistemáticos que desarrolla el sector salud para generar, mantener y mejorar la calidad de los servicios de salud en el país. 

    p.mb-5 Tiene como fin suministrar los servicios de salud individuales y colectivos enmarcados en la accesibilidad y la equidad, contando con la infraestructura, los procesos y los procedimientos óptimos, procurando la satisfacción de los usuarios. Los componentes básicos del sistema están enfocados en: 

    .row.mb-5
      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/temas/tema2/decorador-1.png' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta1(style="background-color:#EAF2E1; width:100%")
            .text.p-4
              h3.text-center Cumplimiento de tipo obligatorio
              span Estándares de cumplimiento de tipo obligatorio: se le denomina sistema único de habilitación. 

      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/temas/tema2/decorador-2.png' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta1(style="background-color:#EAF2E1; width:100%")
            .p-4
              h3.text-center Excelencia de tipo voluntario
              span Se le denomina al sistema único de acreditación. 

      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/temas/tema2/decorador-3.png' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta1(style="background-color:#EAF2E1; width:100%")
            .p-4
              h3.text-center Sistema de información en salud
              span Se le denomina sistema de información para la calidad. 

      .col-md-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar1
          img(src='@/assets/curso/temas/tema2/decorador-4.png' alt='En la figura se observa la especie, requerimiento para cada especie, ingredientes o materias primas, costo, hábito del consumidor.')
          .tarjeta1(style="background-color:#EAF2E1; width:100%")
            .p-4
              h3.text-center Acciones de auditoría continua
              span Las acciones de auditoría continua para la detección de errores, se les denomina auditoría al mejoramiento de la calidad de la atención en salud. Dentro de la herramienta más usada está el PAMEC.

    p.mb-5 Es importante tener en cuenta que las acciones de calidad están dirigidas a las diferentes instancias encargadas, como puede observarse en la siguiente figura: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 7.] <em>Entidades que deben cumplir con el sistema obligatorio de garantía de la calidad </em>
        figure
          img(src='@/assets/curso/temas/tema2/img-2-1.svg', alt='La figura 7, indica las diferentes entidades con cumplimiento en el sistema obligatorio de garantía de la calidad.')
          figcaption Nota. Tomado del Sistema obligatorio de garantía de calidad en salud (SOGCS). Ministerio de Salud y Protección Social.

    .row.mt-5.mb-3
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 7.] <em>Entidades que deben cumplir con el sistema obligatorio de garantía de la calidad </em>
        figure
          img(src='@/assets/curso/temas/tema2/img-2-2.svg', alt='La figura 7, indica las diferentes entidades con cumplimiento en el sistema obligatorio de garantía de la calidad.') 
          figcaption Nota. Tomado del Sistema obligatorio de garantía de calidad en salud (SOGCS). Ministerio de Salud y Protección Social.

    p.mb-5 Como este sistema une y articula diversos procesos y procedimientos debe cumplir con los atributos de calidad específicos que se describen a continuación: 

    .row.justify-content-center.mt-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/decorador-5.png' alt='AvatarTop')
          p <strong>Accesibilidad:</strong> se refiere a la posibilidad que tiene el usuario para utilizar los servicios de salud. 

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/decorador-6.png' alt='AvatarTop')
          p <strong>Oportunidad:</strong> posibilidad que tiene el usuario de tener los servicios que necesita, sin que se presenten eventos que retrasen o pongan en riesgo su vida o salud.  

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/decorador-7.png' alt='AvatarTop')
          p <strong>Seguridad:</strong> son todos aquellos elementos estructurales, procesos, instrumentos y metodologías que ayudan a minimizar el riesgo de sufrir eventos adversos o eventos no esperados durante el proceso de atención.

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/decorador-8.png' alt='AvatarTop')
          p <strong>Pertinencia:</strong> es la garantía que los usuarios puedan recibir los servicios que requieren. 

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/decorador-9.png' alt='AvatarTop')
          p <strong>Continuidad:</strong> es la posibilidad que tienen los usuarios para recibir las intervenciones que requieren, teniendo en cuenta una secuencia lógica y racional de las actividades en salud, basándose en el conocimiento de tipo científico y sin interrupciones innecesarias.

        .tarjeta.color-primario.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema2/decorador-10.png' alt='AvatarTop')
          p <strong>Satisfacción del usuario:</strong> se refiere a la percepción del servicio por parte del usuario, teniendo en cuenta su nivel de expectativa, las necesidades y el resultado obtenido en todo el proceso de atención.
        
    p.mb-5 Para garantizar el correcto funcionamiento del sistema obligatorio de garantía de calidad en salud se cuenta con personas que ayudan desde la parte técnica, operativa y de seguimiento para que las actividades de atención en salud puedan realizarse en función del cumplimiento normativo. En la siguiente figura puede observarse los actores responsables del seguimiento y ejecución de las acciones de calidad en salud. 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 8.] <em>Responsables del Sistema Obligatorio de Garantía de Calidad en salud - SOGC</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-3-1.svg', alt='La figura 8. describe los responsables del sistema obligatorio de garantía de calidad en salud- SOGCS')
          figcaption Nota. Tomada del Decreto 780 de 2016. Ministerio de Salud y Protección Social.  <a href="https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf">Decreto</a>

    .row.mt-5.mb-3
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 8.] <em>Responsables del Sistema Obligatorio de Garantía de Calidad en salud - SOGC</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-3-2.svg', alt='La figura 8. describe los responsables del sistema obligatorio de garantía de calidad en salud- SOGCS') 
          figcaption Nota. Tomada del Decreto 780 de 2016. Ministerio de Salud y Protección Social.  <a href="https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf">Decreto</a>

    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | <strong>Decreto 780 de 2016,</strong> aplicable para las IPS, las entidades promotoras de salud, los gestores farmacéuticos, las entidades adaptadas, las empresas de medicina prepagada y las secretarías de salud (departamentales, distritales y municipales). En este sentido, se debe dejar claro que los elementos del sistema obligatorio de garantía de la calidad no tendrán injerencia sobre los siguientes tipos de entidades: bancos de sangre, laboratorios de genética forense, bancos de semen de las unidades de biomedicina reproductiva y otros bancos que manejan componentes anatómicos, así como demás entidades que realicen procesos de producción de insumos de salud y productos biológicos; ya que este tipo de entidades deben ser evaluadas y supervisadas por el Instituto Nacional de Vigilancia de Medicamentos y Alimentos  INVIMA, acorde con lo estipulado en el Artículo 245 de la Ley 100 de 1993. 

    .tarjeta.tarjeta.p-4.mb-4.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-md-8
          p Este decreto enuncia las condiciones o requisitos de habilitación a tener en cuenta por los prestadores de servicios de salud a los cuales aplica. Dichos requisitos están agrupados en el marco de las condiciones de capacidad tecnológica y científica, condiciones de suficiencia patrimonial y financiera y las condiciones de capacidad técnico- administrativa. 
          p Se enuncian los pasos a tener en cuenta para el proceso de habilitación, que se fundamentan en la autoevaluación de los estándares respectivos y el registro de los datos de la autoevaluación en el formulario de inscripción en el registro especial de prestadores de servicios de salud. 

        .col-md-4
          figure
            img(src='@/assets/curso/temas/tema2/img-4.png', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p Las condiciones de cumplimiento en el marco de los estándares aplicables según el tipo de entidad serán validadas por las entidades departamentales y distritales de salud, por tanto, los prestadores deben tener plena responsabilidad en la veracidad de la información registrada. Una vez otorgada la habilitación, esta tendrá una vigencia de 4 años que se cuentan a partir de la radicación de los documentos. 

    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | Si bien ya se han descrito los lineamientos generales del proceso de habilitación de las Instituciones prestadoras de servicios de salud - IPS, también es importante citar el <strong>Decreto 682 de 2018,</strong> que tiene como finalidad exponer los requisitos para tener la autorización de funcionamiento, las condiciones de habilitación y de permanencia por parte de las entidades promotoras de salud – EPS, las entidades adaptadas al sistema, las organizaciones de economía solidaria que sean vigiladas por la Superintendencia Nacional de Salud y que estén autorizadas para operar el aseguramiento en salud y, las cajas de compensación familiar que prestan los servicios tanto al régimen contributivo como subsidiado. Estas entidades deben contar con la debida autorización de funcionamiento, basada en las siguientes actividades: 
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .tarjeta.tarjeta.p-4.mt-5(style="background-color:#E6EBFB")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-3.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/img-5.svg', alt='Texto que describa la imagen')
            .col-lg-7
              ul.lista-ul.mb-3
                li 
                  i.lista-ul__vineta
                  | Estudio de capacidad técnico - administrativa. 
                li 
                  i.lista-ul__vineta
                  | Estudio de capacidad tecnológica y científica.
                li  
                  i.lista-ul__vineta
                  | Caracterización de la población que se pretende asegurar.
                li  
                  i.lista-ul__vineta
                  | Estudio de mercado.
                li  
                  i.lista-ul__vineta
                  | Condiciones financieras y de solvencia.
                li  
                  i.lista-ul__vineta
                  | Estudio de factibilidad financiera.
                li  
                  i.lista-ul__vineta
                  | Código de conducta y de gobierno organizacional.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p.mb-5 El proceso de autorización de funcionamiento está a cargo de la Superintendencia Nacional de Salud, y dentro de las actividades que se desarrollan en este proceso se pueden describir las siguientes: 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-5
            .pasos-a__circle
              img(src='@/assets/curso/temas/tema2/decorador-11.png')
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 Asignación de un código para su identificación. 
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-5
            .pasos-a__circle
              img(src='@/assets/curso/temas/tema2/decorador-12.png')
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 Definición de los regímenes en los que podrá realizar sus acciones operativas.
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-5
            .pasos-a__circle
              img(src='@/assets/curso/temas/tema2/decorador-13.png')
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 Definición del ámbito territorial de operación de la entidad. 
      .col-md-11.col-12(data-aos="fade-down")
        .tarjeta-avatar-b.mb-4
          .color-secundario.pasos-custom.px-5
            .pasos-a__circle
              img(src='@/assets/curso/temas/tema2/decorador-14.png')
          .tarjeta.tarjeta--custom
            .p-4
              p.mb-0 Autorización para afiliar y recibir por cada afiliado la unidad de pago por capitación y, los demás recursos financieros del sector salud que ayudan a cumplir las funciones asignadas en la normatividad vigente.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p.mb-5 A manera de resumen, en relación con las condiciones de habilitación de las entidades prestadoras de salud puede consultar la siguiente tabla.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10(data-aos="fade-right", alt="La tabla 2 muestra las condiciones de habilitación de las EPS, desde la capacidad técnico-administrativa, la capacidad tecnológica y capacidad científica.")
        .titulo-sexto.color-acento-contenido.mb-4
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Resumen de las condiciones de habilitación EPS.] 
      .col-12.col-lg-10(data-aos="fade-right")
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center(style="background-color:#F9BCAB")  
                th(colspan="5") Condiciones de habilitación
              tr.text-center
                th.cabecera-b Capacidad técnico-administrativa  
                th.cabecera-b Capacidad tecnológica
                th.cabecera-b Capacidad científica
            tbody
              tr
                td Certificación vigente que dé cuenta de su existencia y representación legal.
                td Plataforma tecnológica con conexión remota. 
                td Demostrar que cuentan con talento humano para la operación del aseguramiento en salud. 
              tr
                td Disponer de un órgano de dirección, estructura orgánica y funcional definida. 
                td(rowspan="3") Sistema de la bases de datos de los afiliados que permita el  estado de salud; la gestión de la red integral; la autorización electrónica, garantice la trazabilidad de las facturas y  trámite al prestador de servicios de salud , la gestión financiera y contable, la gestión de riesgos en salud.
                td Gestión integral del riesgo en salud.  
              tr
                td Tener auditoría y estructura orgánica; personal con conocimiento; política de talento humano; implementación de procesos y monitoreo.
                td(rowspan="3") La articulación de una red integral de prestadores de servicios de salud. 
              tr
                td Contar con una política de contratación y pagos pública.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-6.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Es importante tener presente que parte de las actividades que deben desarrollar los prestadores de servicios de salud están orientadas a la auditoría para el mejoramiento de la calidad de atención en salud; esta auditoría debe estar basada en estándares superiores a los contenidos en la habilitación, es decir, podrá basar su plan de auditoría bajo los estándares de acreditación o los que hagan sus veces (indicadores para el monitoreo del sistema de información de calidad, indicadores de seguimiento a riesgos y política de seguridad del paciente).
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p.mb-0 Dentro del plan de auditorías, las actividades generales están enfocadas a realizar la evaluación, el seguimiento y el mejoramiento; la comparación entre la calidad observada y la calidad esperada, adicional a esto deberá tener en cuenta los diversos niveles de operación, los cuales son el autocontrol y la auditoría interna y externa. 

    .row.justify-content-center.align-items-center.mb-2
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4.mb-4
          p Acorde con el resultado encontrado en los niveles de operación se deben definir las acciones preventivas, de seguimiento y coyunturales. Para concluir, tanto los niveles de operación, las acciones y el proceso de evaluación continua siguen la estrategia de ruta crítica que está orientada a la valoración cuantitativa y cualitativa. 

    ul.lista-ul.mb-3
      li 
        i.lista-ul__vineta
        | <strong>El Decreto 903 de 2014,</strong> actualiza los componentes del sistema único de acreditación, que se encuentra reglamentado desde el año 2002 bajo la Resolución 1774, luego actualizado mediante la Resolución 1445 del año 2006 y la Resolución 123 de 2012. 
 
    p.mb-5 Mediante el Decreto 903 de 2014 MinSalud delegó al ICONTEC el proceso de acreditación en Colombia, por ello, es necesario conocer que la entidad a cargo de los procesos de acreditación a su vez debe estar certificada por la International <strong><em>Society for Quality in Healthcare - ISQUA</em></strong> y presentar experiencia de certificación de 5 años continuos.  En el proceso de acreditación es fundamental dirigir las acciones hacia los siguientes ejes.

    .BGIMG02.p-4.mb-4
      SlyderB.mb-5(:datos="datosSlyder")

    p.mb-3 La herramienta más importante para operativizar un programa de acreditación es realizar actividades de forma sistemática, garantizando un proceso continuo de transformación cultural de la de la organización; dicha transformación es promovida desde el direccionamiento estratégico y las acciones coordinadas del talento humano. Además, la acreditación cuenta con unos principios que garantizan la correcta ejecución de sus actividades en busca del alcance de estándares superiores; estos principios se pueden describir como confidencialidad, gradualidad y eficiencia.

    .row.justify-content-center.align-items-center.mb-5
      .col-10(data-aos="fade-down-right")
        .tarjeta.tarjeta.p-4.mt-5(style="background-color:#E6EBFB")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-3.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/img-11.svg', alt='Texto que describa la imagen')
            .col-lg-7
              p Para una correcta ejecución de las actividades que garanticen un servicio de alta calidad se cuenta con los ejes de la acreditación, estos son:
              ul.lista-ul.mb-3
                li 
                  i.lista-ul__vineta
                  | La gestión tecnológica. 
                li 
                  i.lista-ul__vineta
                  | La humanización de la atención en salud. 
                li  
                  i.lista-ul__vineta
                  | La seguridad del paciente y la gestión clínica. 
                li  
                  i.lista-ul__vineta
                  | El enfoque de gestión del riesgo. 

    p El manual de estándares del sistema único de acreditación en salud es una herramienta dispuesta en el proceso de acreditación; sin embargo, en caso que la entidad que asume el proceso tenga sus propios manuales acreditados por la <strong><em>International Society for Quality in Healthcare - ISQUA</em></strong> únicamente podrán ser utilizados y aplicados con la debida autorización por parte del Ministerio de Salud y Protección Social. 
    p.mb-5 Para cumplir con el ciclo global de acreditación se deben seguir los procesos de: 

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .row.mb-3(data-aos="fade-right")
          .col-5
            img(src='@/assets/curso/temas/tema2/img-12.png')
          .col-7
            ul.lista-ul.mb-3
              li 
                i.lista-ul__vineta
                | Selección de la entidad acreditadora, la cual debe estar inscrita en el registro especial de acreditadores en salud. 
              li 
                i.lista-ul__vineta
                | Autoevaluación de los estándares de acreditación elegidos por la entidad que desea acreditarse. 
              li 
                i.lista-ul__vineta
                | Gestión de los planes de mejoramiento continuo. 
              li 
                i.lista-ul__vineta
                | Evaluación externa del cumplimiento de los estándares. 
              li 
                i.lista-ul__vineta
                | Otorgamiento de la acreditación, este se da por tres años bajo las siguientes categorías: 
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | Acreditado con excelencia. 
                  li 
                    i.lista-ul__vineta
                    | Acreditado. 
                  li 
                    i.lista-ul__vineta
                    | Acreditación condicionada (seis meses).

        p.mb-5 Todos los componentes del sistema obligatorio de garantía de calidad enunciados hasta el momento requieren de un elemento básico y es aquel relacionado con el reporte de información producto de los procesos de atención en salud. Este reporte de información tiene como objetivos: 

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/decorador-15.png', alt='Texto que describa la imagen')
          
        h3.text-center Monitorear
        p Consiste en realizar el respectivo seguimiento a la calidad de los servicios, con el fin de que todos los actores involucrados realicen la respectiva evaluación y ajuste a los elementos que componen el SOGCS (Sistema obligatorio de garantía de la calidad en salud).   

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-secundario.p-5(style="background-color:#E6EBFB")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/decorador-16.png', alt='Texto que describa la imagen')
          
        h3.text-center Orientar
        p Refiere a la entrega de información que incluye la selección de la EAPB y/o la institución prestadora de servicios por parte de los usuarios y demás, teniendo en cuenta la información de calidad reportada. 

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/decorador-17.png', alt='Texto que describa la imagen')
          
        h3.text-center Referenciar
        p Esta actividad incluye el referenciación de tipo competitivo sobre los aspectos de calidad de los servicios entre las EAPB y las instituciones prestadoras de servicios. 

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-secundario.p-5(style="background-color:#E6EBFB")
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema2/decorador-18.png', alt='Texto que describa la imagen')
          
        h3.text-center Estimular
        p Sugiere incentivar la gestión de la calidad basada en hechos y datos.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2. Resoluciones

    p El proceso de habilitación de los prestadores de servicios de salud en el marco del sistema obligatorio de garantía de la calidad se encuentra normado por las siguientes resoluciones:
    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | <strong>Resolución 3100 de 2019.</strong> Nace en función de los diversos avances tecnológicos y el surgimiento de otras normas regulatorias en el sector salud, por tanto, se hizo necesaria la actualización de todos los procedimientos y las condiciones de inscripción que fueron abordados en normas anteriores como la Resolución 2003 de 2014. Es necesario aclarar que estas condiciones de habilitación son aplicables solo a los siguientes tipos de prestadores: 

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .row(data-aos="fade-down-left") 
          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img-13.png' alt='')
              .tarjeta.tarjeta--azul
                .p-4
                  p Instituciones prestadoras de servicios de salud - IPS. 

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img-14.png' alt='')
              .tarjeta.tarjeta--azul
                .p-4
                  p Entidades que asuman la actividad de transporte especial de pacientes. 

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img-30.png' alt='')
              .tarjeta.tarjeta--azul
                .p-4
                  p Profesionales que ejerzan sus actividades de manera independiente.  

          .col-lg-6
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img-31.png' alt='')
              .tarjeta.tarjeta--azul
                .p-4
                  p Instituciones con objeto social diferente a la prestación de servicios de salud, pero que, en el ejercicio de sus funciones, deban realizar la atención en salud. 

    p Es importante recordar que, así como existen regímenes especiales que se abordaron en la primera parte de esta revisión normativa, las entidades que presten sus servicios de salud al régimen especial y de excepción no tendrán la obligación de cumplir con lo definido en el SOGCS, y solo estarán en la obligación de hacerlo si realizan una inscripción de tipo voluntario para ofertar y operar sus programas de salud dentro de este sistema. También están exentos de cumplir con estos requisitos los servicios de salud que se presten a nivel intramural de los centros carcelarios del país. 
    p Las condiciones para evaluar la viabilidad de estos prestadores estarán a cargo de las secretarías de salud departamental o distrital, las entidades responsables del pago de los servicios prestados y la Superintendencia Nacional de Salud. 
    p.mb-5 Acorde con lo establecido en la Resolución 3100 de 2019 se definen unos pasos para realizar la habilitación, los cuales se describen a continuación.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema2/img-15.png' alt='AvatarTop')
        h3 Autoevaluación
        p Realizar la autoevaluación de las condiciones descritas en los estándares. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema2/img-16.png' alt='AvatarTop')
        h3 Formulario de inscripción
        p Ingresar el página web de la Secretaría de Salud y diligenciar el formulario de inscripción en el REPS.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema2/img-17.png' alt='AvatarTop')
        h3 Declaración de autoevaluación
        p Diligenciar la declaración de la autoevaluación de los servicios que se van habilitar e imprimir el formulario de inscripción. 

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema2/img-18.png' alt='AvatarTop')
        h3 Radicación del formulario de inscripción
        p Radicar en la secretaría de salud distrital o departamental (o en la entidad asignada para esta actividad) el formulario de inscripción y la declaración de autoevaluación.  

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-7
            img(src='@/assets/curso/temas/tema2/img-19.png' alt='AvatarTop')
        h3 Visita de verificación
        p Recibir la visita de verificación por parte de la secretaría de salud distrital o departamental (o en la entidad asignada para esta actividad).  
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p.mb-3 La autoevaluación de las condiciones descritas en los estándares, están orientadas a las condiciones que se deben cumplir en todos los servicios y aquellas que son exclusivas según el tipo de servicio. Para dar una mirada general a las condiciones aplicables a todos los servicios, se ha realizado el siguiente cuadro resumen: 

    .row.justify-content-center.align-items-center.mb-2
      .col-12.col-md-10.col-lg-10(data-aos="fade-right", alt="La tabla 3, muestra el sistema único de habilitación, teniendo en cuenta todos los estándares requeridos para la prestación de los servicios en salud.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Sistema único de habilitación, estándares todos los servicios.] 
      .col-12.col-md-10.col-lg-10(data-aos="fade-right")
        .tabla-b.color-acento-contenido.mb-5
          table(style="min-width:auto")
            caption Nota. Resolución 3100 de 2019. Ministerio de Salud y Protección Social. https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203100%20de%202019.pdf
            thead
              tr.cabecera-a.text-center(style="background-color:#F9BCAB") 
                th Estándar
                th Alcance del estándar - Resumen 
            tbody
              tr
                th.text-center.cabecera-b 1. Talento humano 
                td Condiciones del recurso humano requeridas en un servicio de salud:
                  ul.lista-ul.mb-5
                    li 
                      i.lista-ul__vineta
                      | Hojas de vida del personal con sus respectivos soportes.
                    li 
                      i.lista-ul__vineta
                      | Capacidad instalada de la institución.
                    li 
                      i.lista-ul__vineta
                      | Convenios docencia servicio.

              tr
                th.text-center.cabecera-b 2. Infraestructura 
                td Condiciones y mantenimiento de la infraestructura de las áreas asistenciales:
                  ul.lista-ul.mb-5
                    li 
                      i.lista-ul__vineta
                      | Cuidado de las instalaciones.

                    li 
                      i.lista-ul__vineta
                      | Plan de gestión integral de residuos.

              tr
                th.text-center.cabecera-b 3. Dotación y mantenimiento 
                td Condiciones de suficiencia y mantenimiento de los equipos médicos:
                  ul.lista-ul.mb-5
                    li 
                      i.lista-ul__vineta
                      | Listado de equipos.
                    li 
                      i.lista-ul__vineta
                      | Hojas de vida de los equipos con sus respectivos soportes.
                    li 
                      i.lista-ul__vineta
                      | Cronogramas de mantenimiento, calibración de equipos y evidencias de su ejecución.
                    li 
                      i.lista-ul__vineta
                      | Contratos de mantenimiento.

              tr
                th.text-center.cabecera-b 4. Medicamentos, dispositivos médicos e insumos 
                td Gestión de medicamentos y demás insumos que utilice la institución:
                  ul.lista-ul.mb-5
                    li 
                      i.lista-ul__vineta
                      | Listado de medicamentos y dispositivos médicos empleados.
                    li 
                      i.lista-ul__vineta
                      | Procedimientos de selección, adquisición, almacenamiento, recepción, transporte, conservación, control de fechas de vencimiento, dispensación y disposición final.
                    li 
                      i.lista-ul__vineta
                      | Cronogramas de mantenimiento, calibración de equipos y evidencias de su ejecución.
                    li 
                      i.lista-ul__vineta
                      | Política de no reúso.
                    li 
                      i.lista-ul__vineta
                      | Programa de Farmacovigilancia, Tecnovigilancia y Reactivovigilancia.

              tr
                th.text-center.cabecera-b 5. Procesos prioritarios 
                td Existencia, socialización y gestión de los principales procesos asistenciales calidad - riesgo:
                  ul.lista-ul.mb-5
                    li 
                      i.lista-ul__vineta
                      | Guías clínicas y protocolos de atención.
                    li 
                      i.lista-ul__vineta
                      | Comités institucionales.
                    li 
                      i.lista-ul__vineta
                      | Seguimiento a riesgos.
                    li 
                      i.lista-ul__vineta
                      | Gestión de eventos adversos.
                    li 
                      i.lista-ul__vineta
                      | Manual de bioseguridad.

              tr
                th.text-center.cabecera-b 6. Historia clínica y registros 
                td Existencia y cumplimiento de los procesos que garanticen la historia clínica por paciente:
                  ul.lista-ul.mb-5
                    li 
                      i.lista-ul__vineta
                      | Toda atención por primera vez a un usuario debe incluir el proceso de apertura de la historia clínica.
                    li 
                      i.lista-ul__vineta
                      | Los registros asistenciales son conservados sistemáticamente, garantizando la confidencialidad de los documentos protegidos legalmente por reserva.
                    li 
                      i.lista-ul__vineta
                      | Auditoría a las historias clínicas.

              tr
                th.text-center.cabecera-b 7. Interdependencia 
                td Existencia y disponibilidad de servicios o productos necesarios para prestar de manera oportuna, segura e integral los servicios ofertados:
                  ul.lista-ul.mb-5
                    li 
                      i.lista-ul__vineta
                      | Contratos formalizados.
                    li 
                      i.lista-ul__vineta
                      | Auditoría a los contratos.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p.mb-5 La prestación de los servicios de salud puede realizarse por medio de diversas modalidades, en las cuales se distinguen las siguientes: 

    .row.mb-5
      .col-md-6
        .row.mb-5
          .col-md-12.mb-5.mb-md-0
            //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            LineaTiempoD.color-acento-botones
              p.text-small(numero="1" titulo="Atención intramural") Cuenta con infraestructura física fija para la atención.
              
              p.text-small(numero="2" titulo="Atención extramural") Cuenta con espacios o infraestructura adaptada. Dentro de esta atención se cuenta con unidad móvil (terrestre, marino o fluvial), atención en modalidad domiciliaria y jornadas de salud.

              p.text-small(numero="3" titulo="Telemedicina") Prestación del servicio a distancia, mediante TICS. Hay dos opciones. Telemedicina interactiva (video llamada en tiempo real)  Telemedicina no interactiva (comunicación asincrónica entre el profesional de la salud y el usuario. <br><br> Para dar cumplimiento y calidad al proceso, se debe contar con telexperticia y telemonitoreo. Este tipo de atención se caracteriza por contar con un prestador denominado emisor y otro prestador denominado de referencia.
              
      .col-md-5
        figure
          img(src='@/assets/curso/temas/tema2/img-20.png', alt='Imagen decorativa')

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | <strong>Resolución 256 de 2016,</strong> la cual fundamenta el componente de información para la calidad que es ejecutado por medio del monitoreo de indicadores. Esta medición de indicadores permite evaluar las condiciones de calidad necesarias en la prestación de los servicios de salud. 

    .row.mb-5(data-aos="fade-right")
      .col-4
        img(src='@/assets/curso/temas/tema2/img-21.png')
      .col-8
        p La clasificación de los indicadores a reportar contenidos es esta resolución son: 
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Indicadores de efectividad. 
          li 
            i.lista-ul__vineta
            | Indicadores de seguridad. 
          li 
            i.lista-ul__vineta
            | Indicadores de experiencia de la atención en salud. 
          li 
            i.lista-ul__vineta
            | Indicadores de gestión del riesgo. 
        p Para que exista claridad se debe comprender que cada grupo de indicadores está dirigido a las entidades administradoras de planes de beneficios departamentales, a las entidades distritales y municipales de salud, al Instituto Nacional de Salud, al organismo técnico de administración de la cuenta de alto costo, a los prestadoras de servicios de salud y a los servicios de transporte especial de pacientes, siendo necesario  para estos dos últimos, el reporte de registro de control, el registro de detalle de oportunidad en citas, el registro de detalle de satisfacción global, el registro de detalle de la programación de procedimientos quirúrgicos realizados en sala de quirófano, el registro de detalle de evento adverso y registro de detalle de urgencias - <em>triage II</em>.  A cada actor del sistema le corresponden los indicadores de efectividad, seguridad, experiencia de la atención en salud y de gestión del riesgo. 

    p Para el envío de indicadores se hace necesario que los reportes sean manejados en un archivo tipo plano. 
    p.mb-5 Hay otras herramientas de monitoreo en torno a las atenciones en salud, tales como el Registro Individual de Prestación de Servicios de Salud - RIPS. Este será revisado en detalle en el siguiente componente; sin embargo, es importante tener presente que consiste en el conjunto de datos que identifica las actividades de salud que se les realiza a las personas y que hacen parte integral de la factura de venta de los servicios de salud,  sirve para que los prestadores de servicios de salud puedan documentar el valor cobrado por las actividades de salud prestadas a las personas ante la entidad pagadora de los servicios de salud, informar sobre actividades de salud prestadas en las modalidades de contratación por paquete, por capacitación o servicios integrales y conocer las causas que generan la demanda de servicios de salud. 

    .row.justify-content-center.align-items-center.mb-2
      .col-10(data-aos="fade-down-right")
        .cajon.color-secundario.p-4.mb-4
          p El aporte de los RIPS a las EAPB consiste en realizar la auditoría de cuentas y la autorización de servicios y pagos, conocer el estado de salud y enfermedad de la población afiliada, optimizar la contratación en función de la demanda de los servicios, impactando positivamente los procesos administrativos de las entidades que participan del proceso de atención de la población y en el seguimiento de las acciones en salud pública. 

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p.mb-5 En el sistema obligatorio de garantía de la calidad se hace indispensable contar con los suficientes elementos en el marco de la política de seguridad del paciente, la cual tiene como objetivo prevenir la ocurrencia de hechos que afecten la seguridad de los usuarios que acceden al servicio de salud. Para garantizar un adecuado desarrollo de la política de seguridad del paciente es necesario garantizar los siguientes elementos. 

    .BGIMG02.p-4
      SlyderB.mb-5(:datos="datosSlyder1")

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#FCE7E1")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-3.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/img-29.svg', alt='Texto que describa la imagen')
            .col-lg-7
              p Lo invitamos a consultar en el material complementario la Guía técnica “Buenas prácticas para la seguridad del paciente en la atención en salud”. Seguridad del paciente y la atención segura. Este documento sirve de apoyo para la estructuración de las estrategias a tener en cuenta dentro de la institución, garantizando la seguridad en los procesos de atención.

        p Para finalizar la revisión del presente componente es necesario dar a conocer el sistema encargado de organizar y disponer toda la información en el marco del Sistema Obligatorio de Garantía de la Calidad - SOGC, buscando entregar las herramientas que faciliten la difusión, la estandarización de los indicadores y de los canales de acceso para el debido seguimiento y evaluación del sistema de salud en el marco de los atributos de calidad, humanización y resultados en salud de los diferentes agentes del sector involucrados en la atención, este recibe el nombre de Observatorio Nacional de Calidad en Salud - ONCAS. 




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Seguridad del paciente',
        texto:
          'Se comprende como el conjunto de elementos de tipo estructural, procesos, instrumentos y metodologías que tienen como objetivo minimizar el riesgo de sufrir un evento adverso dentro del proceso de atención en salud.',
        imagen: require('@/assets/curso/temas/tema2/img-7.png'),
      },
      {
        titulo: 'Presencia de políticas y programas',
        texto:
          'Todos estos dirigidos a la humanización de la atención, teniendo en cuenta la dignidad del ser humano.',
        imagen: require('@/assets/curso/temas/tema2/img-8.png'),
      },
      {
        titulo: 'Gestión de la tecnología',
        texto:
          'Por medio de un proceso de tipo racional respecto a la adquisición y la utilización que beneficie a los usuarios y a las instituciones.',
        imagen: require('@/assets/curso/temas/tema2/img-9.png'),
      },
      {
        titulo: 'Gestión del riesgo',
        texto:
          'Trabajar en el enfoque y gestión del riesgo por medio de la provisión de servicios de salud de tipo accesible y equitativo, teniendo presente el balance entre la gestión clínica y la gestión administrativa, así como los beneficios, los riesgos y los costos.',
        imagen: require('@/assets/curso/temas/tema2/img-10.png'),
      },
    ],
    datosSlyder1: [
      {
        texto:
          'El enfoque de la atención debe estar centrado en el usuario, él es el eje de todo el proceso.',
        imagen: require('@/assets/curso/temas/tema2/img-22.png'),
      },
      {
        texto: 'Trabajar por una cultura de seguridad institucional.',
        imagen: require('@/assets/curso/temas/tema2/img-23.png'),
      },
      {
        texto:
          'Integrar todas las acciones con el sistema obligatorio de garantía de calidad de la atención en salud, ya que la política de seguridad del paciente es transversal a todos los componentes.',
        imagen: require('@/assets/curso/temas/tema2/img-24.png'),
      },
      {
        texto:
          'Para que la política de seguridad del paciente sea óptima se debe garantizar la participación de las diferentes áreas organizacionales y de los diferentes actores.',
        imagen: require('@/assets/curso/temas/tema2/img-25.png'),
      },
      {
        texto:
          'Todas las acciones a implementarse en la política deben contar con la debida validez, es decir, deben estar soportadas en la evidencia científica disponible.',
        imagen: require('@/assets/curso/temas/tema2/img-26.png'),
      },
      {
        texto:
          'Incluir dentro de la política al paciente y su entorno familiar.',
        imagen: require('@/assets/curso/temas/tema2/img-27.png'),
      },
      {
        texto:
          'Es indispensable la participación activa de los profesionales en salud.',
        imagen: require('@/assets/curso/temas/tema2/img-28.png'),
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
