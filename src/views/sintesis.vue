<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Los conceptos y la normatividad que dan soporte al Sistema General de Seguridad Social en Salud - SGSSS se actualiza de manera constante, acorde con las necesidades de la población. La salud es un derecho de todos los colombianos, por tanto, se debe garantizar el control del estado de salud y las posibles fuentes o causas que puedan generar estados de enfermedad en las poblaciones, por medio de las políticas en salud pública. Además, del trabajo articulado que deben realizar los diferentes actores del sector en pro de garantizar la pertinencia, la accesibilidad, la continuidad, la oportunidad y la seguridad en la atención, teniendo como eje fundamental los sistemas de calidad que garantizan asegurar la globalidad del cumplimiento y la calidad en pro del beneficio del usuario, tanto de la red de prestadores como de cada prestador en el ejercicio individual de sus funciones. 
    p.mb-5 En el mapa conceptual, podrá reconocer una ruta resumida de los aspectos que involucran la temática tratada:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El SGSSS, responde a lineamientos normativos nacionales, que se fundamentan en la Constitución Política de Colombia. Y se permite su práctica desde la Ley 100 de 1993 y sus posteriores ajustes, mediante la promoción de acciones como el MIAS, que involucran la calidad del servicio, así como la garantía en su prestación, desde la habilitación, la acreditación, y las auditorias que le corresponden.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
