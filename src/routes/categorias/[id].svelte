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
import '../../js/firebase.js'

import { fly } from "svelte/transition";
export let id; 
export let modelos;
console.log(modelos);

//Abrir Filtros
  var  ventanaF = false;
  var textF = 'FILTRAR POR:'
  function abrirFiltros() {
    if (!ventanaF) {
        ventanaF = true
        textF = 'CERRAR FILTRO'
      } else{
          ventanaF = false
          textF = 'FILTRAR POR:'
      }
  }



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

   
 
    <div class="enPantallasG">
        {#each modelos as modelo}
        <article class="articulo wow animate__animated animate__fadeIn" onclick="overol('<%= modelo.categoria%>', '<%= modelo.id%>')">
            <a href="/modelos/{modelo.id}">
                 <h1>{modelo.titulo}</h1>
                 <img src="{`https://grupoempresarialevertex.herokuapp.com//modelos/${modelo.preview.nombreArchivo}`}" alt="titulo">
                 <p>VER MODELO</p>
                 <div class="detalles"> <h4>{modelo.precio}Bs</h4> </div>
            </a>
        </article>
        {:else}
             <h1>cargando...</h1>
        {/each}
      
    </div>
</div>


<style>

 
    .container{
       padding-top: 10%;
       text-align: center;
    }

  
    .filtros{
        padding-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .filtros p{
       font-family: "montserrat-regular", sans-serif;
        color: white;
        margin: 0px 20px;
        font-weight: 700;
        text-shadow: 0 0 30px #fff;

    }

   .container .articulo{
      
      margin: 30px auto 60px;
      text-align: center;
      width: 98%;
      color: white;
     
  }
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

   .container .articulo .descripcion{
       margin: auto;
       text-align: center;
       width: 70%;    
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