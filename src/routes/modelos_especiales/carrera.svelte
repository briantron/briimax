<script>

    import homeimg from "./img/homeimg.png";
    import mano from "./img/man.png";
    import botapie from "./img/botapie.png";
    import logo from "./img/l1.png"
    import tela from "./img/tela.jpg"
    import vistaDelantera from "./img/vistaDelantera.jpg";
    import vistaDeracha from "./img/vistaDerecha.png";
    import vistaIzquierda from "./img/vistaIzquierda.png";
    import vistaTrasera from "./img/vistatrasera.png";
    import { fade } from "svelte/transition";
       let bordadoCheck = false;
       var cantidadComprar;
       var precioTotal;
       var departamento;
       var modeloId = "Lllllegionario";
       var precioModelo = 230;
       var titulo = "Overol Legionario";



       var xl = '';
       var l = '';
       var m = '';
       var s = ''; 
       function cantidad() {

        
        var suma = xl + l + m + s;
        precioTotal = suma * precioModelo;
        console.log(precioTotal);
      }
       function comprar() {
            event.preventDefault()
            window.open(`https://api.whatsapp.com/send?phone=+59176576474&text=*${titulo}*%0A%0A*PEDIDO*:%20${'XL:%20' + xl + "%20L:%20" + l + "%20M:%20" + m + "%20S:%20" + s}%0A%0A*PRECIO%20UNIDAD*:%20${precioModelo}%0A%0A*Personalizado*:%20${exiteBordado(bordadoCheck)}%0A%0A*ID*:%20${modeloId}%0A%0A*DEPARTAMENTO*:%20${departamento}`) //%0A%0A%0A*PRECIO%20TOTAL*:%20${precioTotal}
            }
    
    function bordado() {
          console.log('bordado');
      }
    function exiteBordado(bordado) {
        if (bordado) {
            return 'Sera Personalizado'
        }else{
            return 'No Sera Personalizado'
        }
      }
    </script>
    <svelte:head>
        <title>Modelo Legionario</title>
    
      <meta name="description" content={'Ropa Industrial'} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
    
       <!--- basic page needs
      ================================================== -->
      <meta property="og:locale" content="es_ES"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Ropa Industrial Briimax"/>
      <meta property="og:description" content="Overol Legionario Exclusivo"/>
    
      <meta property="og:site_name" content="Overol Legionario"><meta property="og:title" content="Overol Legionario" /> <meta property="og:description" content="Overol Exclusivo con diseño especial" /> <meta property="og:image" itemprop="image" content="https://firebasestorage.googleapis.com/v0/b/evertexgrupoempresarial.appspot.com/o/legionario.png?alt=media&token=8e3eb036-0ff3-4611-be23-50015af09ee9"> <meta property="og:type" content="website" /> <meta property="og:updated_time" content="1440432930" /> 
     
    
    </svelte:head>
    <div class="contenedor">
        <div class="home">
             <!-- oblogatorio para poner un video de fondo -->
            <div class="video-background">
                <div class="video-foreground">
                    <!-- fondo teleferico: https://firebasestorage.googleapis.com/v0/b/evertexgrupoempresarial.appspot.com/o/fondoteleferico.mp4?alt=media&token=39a96449-861a-426c-9a89-990c4a1934ac -->
                    <video src="https://firebasestorage.googleapis.com/v0/b/evertexgrupoempresarial.appspot.com/o/fondoteleferico.mp4?alt=media&token=39a96449-861a-426c-9a89-990c4a1934ac" autoplay muted loop preload="true"></video>
                </div>
            </div>
          <div class="texto">
            <h1>OVEROL LEGIONARIO</h1>
            
            <img src="{homeimg}" alt="">
            <div class="textope">
            <p>OVEROL PILOTO PREMIUM</p>
            <a href="#cotizar"> <button id="homecotizar">COTIZAR</button></a>
            </div>
          </div>    
          
        </div>
        <div class="salto">
            <h1>CARACTERISTICAS</h1>
        </div>
        <div class="caracteristicas">
            <!-- Caracteristicas -->
            <div class="caracteristica">
                <div class="texto">
                <h1>TELA KAKI 1RA   </h1>
                    <p>Grueso y de algodon, no pierde color.
                    Duradero y respirable
                    </p>
                    </div>
                 <div class="img">
                        <img src="{tela}" alt="">
                 </div>
            </div>
            <!--//Caracteristica -->
    
                    <!-- Caracteristicas -->
            <div class="caracteristica">
                <div class="img">
                    <img src="{homeimg}" alt="">
             </div>
                <div class="texto">
                <h1>MODELOS EXCLUSIVO</h1>
                    <p>Un Modelo Exclusivo unico en Bolivia</p>
                    </div>
            </div>
            <!--//Caracteristica -->
        </div>
        <div class="cotizar">
            <a href="#cotizar"><button>HACER PEDIDO</button></a>
        </div>
        <div class="imgMuestra">
            <div class="muestra">
                <img src="{vistaDeracha}" alt="">
                <img src="{vistaIzquierda}" alt="">
             </div>
            <div class="salto">
                <h1>CALIDAD</h1>
            </div>
            <div class="caracteristicas">
                <!-- Caracteristicas -->
                <div class="caracteristica">
                    <div class="texto">
                    <h1>VARIOS LOGOS</h1>
                        <p>Logos unicos en impresion digital DTF</p>
                        </div>
                     <div class="img">
                            <img src="{logo}" alt="">
                     </div>
                </div>
                <!--//Caracteristica -->
        
                
            </div>
            <img src="{vistaTrasera}" alt="">
            <div class="salto">
                <h1>MODELO UNICO</h1>
            </div>
            <div class="caracteristicas" style="background-color: #f88d00;" >
                <!-- Caracteristicas -->
                <div class="caracteristica" style="background-color: #f88d00;">
                    <div class="texto">
                    <h1>REGULADORES DE BOTA PIE</h1>
                        <p>Con reguladores de bota pie de doble agarre en las piernas
                            para un agarre mas exacto
                        </p>
                        </div>
                     <div class="img">
                            <img src="{botapie}" alt="">
                     </div>
                </div>
                <!--//Caracteristica -->
        
                        <!-- Caracteristicas -->
                <div class="caracteristica" style="background-color: #f88d00;">
                    <div class="img">
                        <img src="{mano}" alt="">
                 </div>
                    <div class="texto">
                    <h1>PUÑOS DE TEJIDO DE ALTA DEMANDA</h1>
                        <p>Puños tejidos de lana 100% respirables
                            y de mayor comodidad
                        </p>
                        </div>
                </div>
                <!--//Caracteristica -->
            </div>
        </div>
         <div class="corte">
            <h1 style="color: #144998;">VARIEDAD DE TALLAS Y COLORES</h1>
        </div> 
     
        <div class="precioView">
            <div class="precio">
            <h1>{precioModelo}BS</h1>
            <p>Precio  Por Unidad</p>
            <div class="cotizar">
               <a href="#cotizar"> <button>HACER PEDIDO</button></a>
            </div>
            </div>
        </div>
        <div class="salto">
            <h1>PERSONALIZABLE</h1>
        </div>  
        <div class="caracteristicas1" style="display: block; text-align: center;">
            <!-- Caracteristicas -->
            <div class="caracteristica" style="margin: auto;">
                <div class="texto">
                    <p style="color: #fff; margin: 20px 0px 0px;   font-family: 'Open Sans';
                    font-style: normal;
                    font-weight: 800;">Por unos 40Bs mas personalizamos tus logos, color principal de la tela, color secundario y colores de las venas
                    </p>
                    </div>
            
            </div>
            <!--//Caracteristica -->

        </div>
        <div class="corte">
            <h1>COTIZA TU PEDIDO</h1>
        </div>
     
    </div>
    
    
    
    <form name="contactForm" id="cotizar" action="" novalidate="novalidate">
        <fieldset style="border: none;">
       
        <h1>Indique la cantidad y las tallas que desea</h1>
        <div class="tallas">
            <div class="talla">
                <label for="xl">XL</label> <br>
                <input on:keydown="{cantidad}" bind:value="{xl}"  min="1" type="number" id="xl" name="xl">
            </div>
            <div class="talla">
                <label for="l">L</label> <br>
                <input on:keydown="{cantidad}" bind:value="{l}" min="1"  type="number" id="l" name="l">
            </div>
            <div class="talla">
                <label for="m">M</label> <br>
                <input on:keydown="{cantidad}" bind:value="{m}" min="1"  type="number" id="m" name="m">
            </div>
            <div class="talla">
                <label for="s">S</label> <br>
                <input on:keydown="{cantidad}" bind:value="{s}" min="1"  type="number" id="s" name="s">
            </div>
        </div>
        <div class="bordado">
            <label for="">Personalizado</label>
            <input on:change={bordado} bind:checked="{bordadoCheck}" type="checkbox" name="bordado" id="bordado">
            {#if !bordadoCheck}
                 <!-- content here -->
                 <p id="avisoB" in:fade>Marque la casilla si el modelo sera personalizado</p>
            {:else}
                 <!-- else content here -->
                 <p id="avisoB" in:fade>La personalizacion se cotizara en WhatsApp</p>
            {/if}
          
           </div>
        <div class="departamento">
            <label for="departamentoselect">Selecciona tu departamento</label>
            <select name="departamentoselect" bind:value={departamento} on:change="{cantidad}" id="departamentoselect">
                <option value="LA PAZ">La Paz</option>
                <option value="SANTA CRUZ">Santa Cruz</option>
                <option value="COCHABAMBA">Cochabamba</option>
                <option value="ORURO">Oruro</option>
                <option value="PANDO">Pando</option>
                <option value="CHUQUISACA">Chuquisaca</option>
                <option value="BENI">Beni</option>
                <option value="POTOSI">Potosi</option>
                <option value="TARIJA">Tarija</option>
            </select>
            
        </div>
        
    
    
        <!-- Botton de compra -->
        <div class="form-field">
            <p id="total">Precio Total:  </p>
           <button class="full-width btn--primary" on:click="{comprar}" id="buy">Ir WhatsApp</button>
            <div class="submit-loader">
                <div class="text-loader">redireccionando a <br> WhatsApp</div>
                <div class="s-loader">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>
        </div>
        <!-- //Botton de compra -->
        </fieldset>
    </form>
    
    
    <style>
#homecotizar{
    background: #007195;
        border-radius: 17.8318px;
        width: 70%;
        border: none;
        align-items: center;
        text-align: center;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 800;
        color: #FFFFFF;
        margin: 16px 0px;
}
.video-background {
      background: #000;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: -99;
    }
    .video-foreground,
    .video-background video {
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
    .contenedor .home .texto{
        z-index: 100;
        width: 100%;
       
        text-align: center;
        margin-top: -170%;
    }
    .contenedor{
        background-color: #000;
    }
    .contenedor .home .texto h1{
        color: #fff;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 800;
        font-size: 30.2638px;
        line-height: 34px;
    }
    .contenedor .home .texto p{
        color: #fff;
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 20.2638px;
    
    }
    .contenedor .home .texto .textope p{
        color: #fff;
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 15.2638px;
    }
    .contenedor .home .texto img{
        margin-top: 10px;
        margin-bottom: 30px;
        width: 70%;
        height: 50%;
    }
    .contenedor .home .texto button{
        background: #007195;
        border-radius: 17.8318px;
        width: 70%;
        border: none;
        align-items: center;
        text-align: center;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 800;
        color: #FFFFFF;
        margin: 16px 0px;
    }
    .contenedor .salto{
        width: 100%;
        height: 60px;
        margin-top: 35px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contenedor .salto h1{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 800;
        font-size: 10vw;
    }
    .contenedor .imgMuestra .muestra{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contenedor .imgMuestra .muestra img{
        width: 50%;
        width: wrap;
        margin: 0px 10px ;
        border-radius: 20px;
    }
    .contenedor .caracteristicas{
        width: 100%;
    }
    .contenedor .caracteristicas .caracteristica{
        background-color: #000000;
        display: flex;
        align-items: center;
    }
    .contenedor .caracteristicas .caracteristica .texto{
       text-align: center;
       width: 50%;
    }
    .contenedor .caracteristicas .caracteristica .texto h1{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 800;
        font-size: 18.3427px;
        color: #fff;
        margin-bottom: 10px;
    }
    .contenedor .caracteristicas .caracteristica .texto p{
        text-shadow: 4px 2px 4px rgba(255, 255, 255, 0.54);
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16.7107px;
        color: #fff;
    }
    .contenedor .caracteristicas .caracteristica .img{
        width: 50%;
    }
    .contenedor .caracteristicas .caracteristica .img img{
       width: 100%;
       border-radius: 30px;
    }
    .contenedor .cotizar{
        text-align: center;
    }
    .contenedor .cotizar button{
        background: #007195;
        border-radius: 17.8318px;
        width: 70%;
        border: none;
        align-items: center;
        text-align: center;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 800;
        color: #FFFFFF;
        margin: 16px 0px;
    }
    .contenedor .corte{
        width: 100%;
        height: 60px;
        margin-top: 35px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contenedor .corte h1{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 800;
        font-size: 29.9514px;
    }
    .contenedor .precioView{
      
        background:  linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://firebasestorage.googleapis.com/v0/b/evertexgrupoempresarial.appspot.com/o/NASCAR.jpg?alt=media&token=236c4260-2182-4e4f-9c40-e01667b02cba");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .contenedor .precioView .precio{
        text-align: center;
        justify-content: center;
        align-items: center;
    
    }
    .contenedor .precioView .precio h1{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 117.273px;
        line-height: 142px;
        text-align: center;
        color: #FFFFFF;
    }
    .contenedor .precioView .precio p{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 34.5287px;
        line-height: 42px;
        /* identical to box height */
        text-align: center;
        color: #FFFFFF;
    }
    .contenedor .precioView .precio button{
        background: #007195;
        border-radius: 17.8318px;
        width: 100%;
        border: none;
        align-items: center;
        text-align: center;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 800;
        color: #FFFFFF;
        margin: 16px 0px;
    }
    label, input:focus, input{
      color: white;
    }
    
     form{
        width: 100%;
        height: 100vh;
        color: white;
        text-align: center;
        font-weight: 800;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("https://firebasestorage.googleapis.com/v0/b/evertexgrupoempresarial.appspot.com/o/cotizador.png?alt=media&token=9c308bda-26d7-4359-9e7e-cc58f5844368");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    
    }
    
     form h1{
        font-size: 6vw;
        font-weight: 800;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -4.59151px 3.67321px 3.67321px rgba(255, 255, 255, 0.45);
    }
     form label{
        font-size: 25px;
    }
     form input{
        width: 20vw;
        height: 50px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 800;
        text-align: center;
        font-size: 30px;
    }
     form .tallas{
        display: flex;
        justify-content: center;
    }
     form .tallas .talla{
        margin: 10px 10px 30px;
    }
     form .departamento select{
       margin: auto;
        width: 70%;
        height: 100%;
        text-align: center;
        font-weight: 800;
        font-family: 'Open Sans', sans-serif;
        font-size: 9vw;
        margin-top: 40px;
        text-transform: uppercase;
        border-radius: 10px;
    }
     form .departamento label{
        margin-top: 30px;
        font-size: 7vw;
        font-weight: 800;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -4.59151px 3.67321px 3.67321px rgba(255, 255, 255, 0.45);
    
    }
     form h2{
         font-size: 6vw;
        font-weight: 800;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: -4.59151px 3.67321px 3.67321px rgba(255, 255, 255, 0.45);
    
    }
     form .departamento option{
        color: black;
    }
    @media only screen and (min-width: 633px){
     form h2{
            font-size: 30px;
       }
        form h1{
        font-size: 20px;
       }
     form .departamento label{
        font-size: 20px;
       }
       .contact-primary {
        width: 105%;
    }
     form .departamento select{
         font-size: 20px;
         background-color: #009E36;
     }
      form .departamento option{
         color: black;
     }
    }
    #departamentoselect{
      border: 10px solid #144998;
      color: white;
      width: 60%;
      background-color: #144998;
      font-size: 20px;
      height: wrap;
    }
    #total{
      color: white;
      padding-top: 30px;
      font-family: 'Open Sans', sans-serif;
    }
    #buy{
      width: 50%;
      margin-top: 30px;
      background-color: #009E36;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 800;
      font-size: 20.8682px;
      line-height: 37px;
      text-align: center;
      border-radius: 26px;
      border: none;
    }
    </style>