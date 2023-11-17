<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Bienvenidos a este componente formativo relacionado con los fundamentos y la normatividad vigente en la prestación de servicios de salud. Este es la base normativa en el orden la prestación de servicios de salud, en el marco de la calidad que obliga a todos los actores partícipes del proceso. 
    p.mb-5 Se invita a ver el siguiente video en donde encontrará de manera general la información concerniente al tema de la normatividad que regula los procesos de gestión en seguridad sanitaria y salud ambiental:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5Ryr4rJn3AQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
