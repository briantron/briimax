<script context="module">
  export async function load({fetch, params}){
   const id = params.id;
   //realizamos la llamada a los datos
   var res = await fetch(`https://grupoempresarialevertex.herokuapp.com/catalogo/${id}`)
   //esperamos y lo convertimos en json
   const modelos = await res.json();

   //Validamos la respuesta del servidor "Si es un ok devuelve la variable de las guias y las exporta hacia afuera"
   if(res.ok){
       return{
           props: {
               modelos: modelos,
               id: id
           }
       }
   }
   return{
       status: res.status,
       error: new Error('No alcanzo el tiempo de fetch')
   }
}



</script>

<script>
  export let id; 
export let modelos;
console.log(modelos);

</script>

<svelte:head>
 <title>{id}</title>

 <meta name="description" content={'Ropa Industrial Modelo ' + id} />
 <meta
   name="robots"
   content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
 />

  <!--- basic page needs
 ================================================== -->
 <meta property="og:locale" content="es_ES" />
 <meta property="og:type" content="website" />
 <meta property="og:title" content="{id}" />
 <meta property="og:description" content="{'Ropa Industrial Modelo ' + id}" />
 
 <!-- Para facebook, SMS -->
 <meta property="og:image:width" content="1200" />
 <meta property="og:image:height" content="630" />
 <meta property="og:image:alt" content="Evertex Categoria {id} Cotize su modelo Ya!" />

  <!-- Para whatsapp -->
 <meta property="og:image:type" content="image/png" />
 <meta property="og:image:width" content="300" />
 <meta property="og:image:height" content="300" />


</svelte:head>



<div class="container">
    <!-- oblogatorio para poner un video de fondo -->
    <div class="video-background">
        <div class="video-foreground">
            <!-- fondo teleferico: https://firebasestorage.googleapis.com/v0/b/evertexgrupoempresarial.appspot.com/o/fondoteleferico.mp4?alt=media&token=39a96449-861a-426c-9a89-990c4a1934ac -->
            <video src="https://firebasestorage.googleapis.com/v0/b/evertexgrupoempresarial.appspot.com/o/fondoteleferico.mp4?alt=media&token=39a96449-861a-426c-9a89-990c4a1934ac" autoplay muted loop preload="true"></video>
          
        </div>
      </div>

 <!-- 
 <button style="padding-top: 40px; color: white; margin: 0%; font-size: 13px; font-weight: 600; background-color: transparent; border: none" on:click="{abrirFiltros}">{textF}</button>
 {#if ventanaF}
 <div id="filtros" class="filtros" in:fly>
     <a href="#"><p style="color: #F7D002;">PREMIUM</p></a>
      <a href="/economicos/<%= categoria%>"><p style="color: #288036; text-shadow: 0 0 20px #288036">ECONOMICOS</p></a>
  </div>
 {:else}
    <h1>sd</h1>
 {/if}
  -->

  <div class="articulos">
      <article class="articulo">
        <article class="compra wow animate__animated animate__fadeIn" onclick="overol('<%= modelo.categoria%>', '<%= modelo.id%>')">
            <p
            style="
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 800;
            font-size: 21.5103px;
            color: #fff;
            text-shadow: none;
            align-items: center;
            text-align: center;">En esta</p>
            <h1 style="font-family: 'Open Sans';
            font-style: normal;
            font-weight: 800;
            font-size: 41.5103px;
            line-height: 57px;
            text-shadow: none;
            align-items: center;
            text-align: center;">Epoca de Frio</h1>
             <p>Te ofrecemos: </p>


             {#each modelos as modelo}
            <a href="/modelos/{modelo.id}">
                 <h1>{modelo.titulo}</h1>
                 <img src="{`https://grupoempresarialevertex.herokuapp.com//modelos/${modelo.preview.nombreArchivo}`}" alt="titulo">
                 <p>VER MODELO</p>
                 <div class="detalles"> <h4>{modelo.precio}Bs</h4> </div>
            </a>
            {:else}
            <h1>cargando...</h1>
            {/each}
       
        </article>
      </article>
  </div>

</div>


<style>


 .container{
    padding-top: 97px;
    text-align: center;
 }
 * { box-sizing: border-box; }
.video-background {
  background: #000;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: -99;
}
.video-foreground,
.video-background video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
#vidtop-content {
  top: 0;
  color: #fff;
}
@media (min-aspect-ratio: 16/9) {
  .video-foreground { height: 300%; top: -100%; }
}
@media (max-aspect-ratio: 16/9) {
  .video-foreground { width: 300%; left: -100%; }
}
p{color: #fff;}
video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

 .container .articulos{
     z-index: 100;
     position: relative;
     margin-top: 40px;
 }

.container .articulos .articulo{
    width: 100%;
    position: absolute;
}


/*lo demas es relleno*/

.container .articulo h1{
   color: white;
   font-weight: 600;
   margin: 0px 0px 30px;
   text-shadow: 3.76777px 1.25592px 7.0237px rgb(255 255 255 / 82%);
}
.container .articulo img{
   min-width: 95%;
   max-width: 95%;
   min-height: 60vh;
   border-radius: 38%;
}
.container .articulo p{
   margin: 0%;
   font-family: 'Open Sans', sans-serif;
}
.container .articulo .detalles h4{ 
   color: #ca8f18;
   font-weight: 700;
   margin: 10px 10px;
   font-size: 40px;
}


@media only screen and (min-width: 504px) {
    .container{
        padding-top: 100px;
    }
    .container .articulo{
        width: 400px;
    }
    .container .enPantallasG{
        display: flex;
        flex-wrap: wrap;
    }
}

</style>