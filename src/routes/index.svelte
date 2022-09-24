<script>
import logo from '../publico/img/evertexText.png';
</script>

<svelte:head>
	<title>Ropa Industrial Briimax</title>

  <meta name="description" content={'Ropa Industrial'} />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />

   <!--- basic page needs
  ================================================== -->
  <meta property="og:locale" content="es_ES" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Ropa Industrial Briimax" />
  <meta property="og:description" content="Overoles Industriales" />
  
  <!-- Para facebook, SMS -->
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Briimax Cotize su modelo Ya!" />

   <!-- Para whatsapp -->

  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="300" />
  <meta property="og:image:height" content="300" />
 

</svelte:head>

<div class="contenedor">
    <div class="menu">
        <h1>Ropa Industrial</h1>
        <h2>BRIIMAX</h2>

        <!--   <div class="opciones">
            <a sveltekit:prefetch href="categorias">Categorias</a> 
        </div>
          
        <div class="opciones">
            <a sveltekit:prefetch href="https://grupoempresarialevertex.herokuapp.com/contacto">Contacto</a>
        </div> -->
      
        
    </div>
</div>


<style>
    
    .contenedor{
        background-image: url('https://firebasestorage.googleapis.com/v0/b/briimax.appspot.com/o/fondo.png?alt=media&token=63a41fc9-c4bc-4474-a70d-b222d02b33c7');
        width: 100%;
        height: 100vh;
        /**margin-top: 97px;**/

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contenedor .menu{
      text-align: center;
      min-height: auto;
      max-height: 50vh;
    }
    .contenedor .menu h1{
        font-size: 5vw;
        color: white;
        font-family: 'Patua One', cursive;
        text-transform: uppercase;
    }
    .contenedor .menu h2{
        font-size: 5vw;
        font-weight: 600;
        color: white;
        font-family: 'Patua One', cursive;
        -webkit-text-stroke: 8px #d18800;
    }
    .contenedor .menu .opciones{
        margin-top: 30px;
    }
    .contenedor .menu .opciones a{
        font-family: 'open sans', cursive;
        font-size: 2.3vw;
        font-weight: 600;
        color: white;
    }
    @media only screen and (max-width: 1508px){
        .contenedor .menu h1{
        font-size: 70px;
      }
    .contenedor .menu h2{
        font-size: 70px;
      }
      .contenedor .menu .opciones a{
        font-size: 40px;
      }
    }
    @media only screen and (max-width: 652px){
        .contenedor .menu h1{
        font-size: 10vw;
      }
    .contenedor .menu h2{
        font-size: 10vw;
        font-family: 'Patua One', cursive;
        -webkit-text-stroke: 2px #c96b00;
      }
      .contenedor .menu .opciones a{
        font-size: 8vw;
      }
    }
</style>