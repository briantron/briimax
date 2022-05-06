<script context="module">

         export async function load({fetch, params}){

        const id = params.id;
        //realizamos la llamada a los datos
        var res = await fetch(`https://grupoempresarialevertex.herokuapp.com/catalogo/modelos/${id}`);
        //esperamos y lo convertimos en json
        const modelo = await res.json();

        //Validamos la respuesta del servidor "Si es un ok devuelve la variable de las guias y las exporta hacia afuera"
        if(modelo){
            console.log('todo salio bien');
            return{
                props: {
                    modelo: modelo[0],
                    id: id,

                }
            }
        }else{
            console.log('todo salio mal');
        }
        return{
            status: res.status,
            error: new Error('No alcanzo el tiempo de fetch')
        }
    }
</script>
<script>
import Cotizador from "../../components/Cotizador.svelte";
import mapa from '../../publico/img/mapas.png'

    export let modelo;
    console.log(modelo);
    export let id;
</script>

<svelte:head>
<title>{modelo.titulo}</title>

    <meta name="description" content={'Ropa Industrial Modelo ' + id} />
    <meta
      name="robots"
      content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />

     <!--- basic page needs
    ================================================== -->
    <meta property="og:locale" content="es_ES" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{modelo.titulo}" />
    <meta property="og:description" content="{modelo.metadatos}" />
    
    <!-- Para facebook, SMS -->
    <meta property="og:image" content="https://grupoempresarialevertex.herokuapp.com/modelos/{modelo.preview.nombreArchivo}"/>
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Evertex Categoria {id} Cotize su modelo Ya!" />

     <!-- Para whatsapp -->
    <meta property="og:image" content="https://grupoempresarialevertex.herokuapp.com/modelos/{modelo.preview.nombreArchivo}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="300" />
   
 
</svelte:head>


<div class="container">
    <!-- header -->
    <div class="fondoPC">
        <!-- articulo -->
    <article style="margin-bottom: 0px;" class="articulo wow animate__animated animate__fadeIn">
        <div class="primeravista">
        <div class="imagen">
          <img src="https://grupoempresarialevertex.herokuapp.com/modelos/{modelo.preview.nombreArchivo}">
        </div>
        <div class="descripcion">
              <h1  style="margin-bottom: 0px">{modelo.titulo}</h1>
            <div class="textBasico">
             <p style="margin: 10px 0% 30px">{modelo.metadatos}</p>
            </div>
            <div class="btns">
             <a href="#comprar"><button>COTIZAR</button></a>
            </div>
          </div>
        </div>
        <div class="caracteristicasFlecha">
           <a href="#caracteristicas"><p id="caracteristicas" style="color: #ffd000;">Ver Caracteristicas <br> ▼ </p></a>
        </div>
    </article>
   </div>
   <!-- /header -->


   <!-- caracteristicas -->
   <div class="caracteristicas" style="padding-top: 0px;padding-bottom: 0px;">
   {@html modelo.caracteristicas}
   <a href="#comprar"><button>COTIZAR</button></a>

    <div class="images">
     
        {#each modelo.imagenes as imagen}
             <img src="{`https://grupoempresarialevertex.herokuapp.com/modelos/${imagen.nombreArchivo}`}" alt="">
        {/each}
  
    </div>

      <!-- Previsualizacion de Img quitar la clase "textos" -->
     <div class="envios" style="background-image:linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url({mapa});display: block;width: 100%;padding-top: 30px;"  data-aos="fade-up">
     <!-- Caracter en text -->

     <h1>Envios a Toda Bolivia</h1> 

     <a href="#comprar"><button>COTIZAR</button></a>
     <!-- //Caracter en text -->
     </div>
     <!-- //Previsualizacion de Img quitar la clase "textos" -->

   </div>
   <!-- /caracteristicas -->

        <!-- Precios
  ================================================== -->
  <section id='about' class="s-about" style="
  padding-top: 0px;
  padding-bottom: 0px;
">
    
    <div class="precioDiv" style="padding-bottom: 30px;">
        <div id="precioventa" class="wow animate__animated animate__fadeInDown precio">{modelo.precio}Bs</div>
        <h5 style="font-size: 2rem; font-family: 'Open Sans', sans-serif; font-weight: 600; color: #FFFFFF;">Se te brindara un descuento en WhatsApp dependiendo a la cantidad que adquieras</h5>
        <h2 style="color: #FFFFFF;font-weight: 300;margin-bottom: 0px;">{modelo.titulo}</h2>
    </div>


   </section> <!-- end s-Precios -->

<Cotizador
precioModelo={modelo.precio}
modeloId={modelo.id}
titulo={modelo.titulo}
></Cotizador>

</div>



<style>

  
    .container{
       padding-top: 100px;
       text-align: center;
    }
  
    .filtros{
        padding-top: 40px;
        display: none;
    }
    .filtros p{
       font-family: "montserrat-regular", sans-serif;
        color: white;
    }

   .container .articulo{
      
      margin: 30px auto 60px;
      text-align: center;
      width: 90%;
      color: white;
     
  }
  .container .articulo h1{
      color: white;
      font-weight: 600;
      margin: 0px 0px 30px;
      font-size: 10vw;
      text-shadow: 3.76777px 1.25592px 7.0237px rgb(255 255 255 / 82%);
  }
  .container .articulo img{
      min-width: 97%;
      max-width: 97%;
      min-height: 58vh;
      border-radius: 28%;
  }
  .container .articulo button{
      border: none;
      border-radius: 30px;
      background-color: #fff;
      color: rgb(0, 0, 0);
      font-weight: 900;
      width: 50%;
      font-size: 20px;
      text-shadow: 0 0 30px rgb(0, 0, 0);
      box-shadow: 0 0 20px #fff;

  }
  .container .articulo .caracteristicasFlecha {
      margin-top: 5vh;
  }
 
  .container .articulo p{
      margin: 0%;
      font-family: 'Open Sans', sans-serif;
  }
  .container .caracteristicas{
       padding: 30px 0px;
   }
   .container .caracteristicas button{
       border: none;
      border-radius: 30px;
      background-color: #fff;
      color: rgb(0, 0, 0);
      font-weight: 900;
      width: 50%;
      font-size: 20px;
      text-shadow: 0 0 30px rgb(0, 0, 0);
      box-shadow: 0 0 20px #fff;
   }


   .container .caracteristicas .images{
      margin-top: 30px;
      
   }
   .container .caracteristicas .images img{
       max-width: 100%;
      
   }
   .container .caracteristicas .envios{
       min-height: 200px;
      max-height: 100%;
      padding-top: 30px;
   }
   .container .caracteristicas .envios h1{
       margin: 0%;
  }
  .container .caracteristicas .envios button{
      margin-top: 10%;
  }
  .container  .precioDiv{
      background-color: #b43c04;
  }
  .container  .precioDiv .precio{
      font-size: 30vw;
      font-family: 'Open Sans', sans-serif;
      font-weight: 800; 
      color: #fff; 
      text-shadow: -9px 9px 4px rgba(77, 85, 48, 0.644);
    }
    @media only screen and (min-width: 504px) {
       .container {
           width: 450px;
           margin: auto;
           padding-top: 70px;
       }
       .container  .precioDiv .precio{font-size: 150px;}
       .container .articulo h1{font-size: 60px;}
    }

    @keyframes bloor {
 from {
   filter: blur(4px);
 }

 to {
   filter: blur(0px);
 }
}
    @media only screen and (min-width: 800px){
       .container {
           width: 100vw;
           margin: auto;
       }
       .container .fondoPC{
           background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url('https://cdn.pixabay.com/photo/2012/07/06/20/23/excavator-51665_960_720.jpg');
           background-position: center;
           background-repeat: no-repeat;
           animation: bloor 500ms;
           background-size: cover;
           padding-top: 30px;
       }
       
        .container .articulo .primeravista{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container .articulo img{
        width: 475px;
        height: 630px;
        border-radius: 60px;
        margin-right: 40px;
        }
        .container .caracteristicas button{
        width: 300px; 
         }
         .container .caracteristicas .images{
         margin-top: 30px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           margin-bottom: 10px;
           }
           .container .caracteristicas .images img{
          width: 400px;
          height: 400px;
          border-radius: 40px;
          margin-right: 20px;
          transition-duration: 300ms;
          margin-bottom: 30px;
        }
        .container .caracteristicas .images img:hover{
           width: 410px;
          height: 410px;
        }
      
        .container .caracteristicas .envios{display: none; }
        
        #iDcomprar{
            width: 500px;
        }
    }
    @media only screen and (min-width: 1450px){
       .container .articulo .primeravista .imagen{
          margin-right: 300px;
        }
    }
</style>