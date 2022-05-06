  <script>
      import '../publico/style/cotizador.css';
      import { fade } from "svelte/transition";
      let bordadoCheck = false;
      var cantidadComprar;
      var precioTotal;
      var departamento;
      export var modeloId;
      export var precioModelo;
      export var titulo;

      $: if (cantidadComprar < 5) {
        precioModelo - 2
      }else{
        if (cantidadComprar < 11) {
           precioModelo - 4
        }else{
          if (cantidadComprar < 23) {
            precioModelo - 5
          }
        }
      }

      function cantidad() {
        console.log(cantidadComprar);
        precioTotal = cantidadComprar * precioModelo;
      }
      function bordado() {
          console.log('bordado');
      }
      function comprar() {
        event.preventDefault()
        window.open(`https://api.whatsapp.com/send?phone=+59162569556&text=*${titulo}*%0A%0A*PEDIDO*:%20${cantidadComprar}%0A%0A*PRECIO%20UNIDAD*:%20${precioModelo}%0A%0A*BORDADO*:%20${exiteBordado(bordadoCheck)}%0A%0A*ID*:%20${modeloId}%0A%0A*DEPARTAMENTO*:%20${departamento}%0A%0A%0A*PRECIO%20TOTAL*:%20${precioTotal}`)
      }
      function exiteBordado(bordado) {
        if (bordado) {
            return 'Tendra bordado'
        }else{
            return 'No tendra bordado'
        }
      }
  </script>
  
  <!-- Cotizador -->
  <div id="comprar" class="cotizador">
    <div class="precios"></div>
    <form class="formulario">
        <div class="cantidad">
          <label for="cantidad">Cantidad</label>
          <input required min="3" on:keyup="{cantidad}" bind:value="{cantidadComprar}" id="cantidad"  type="number"> 
        </div>
        <div class="bordado">
            <label for="">Bordado</label>
            <input on:change={bordado} bind:checked="{bordadoCheck}" type="checkbox" name="bordado" id="bordado">
            {#if !bordadoCheck}
                 <!-- content here -->
                 <p id="avisoB" in:fade>Marque la casilla si el modelo llevara un bordado</p>
            {:else}
                 <!-- else content here -->
                 <p id="avisoB" in:fade>El Bordado que necesite se cotizara en WhatsApp</p>
            {/if}
          
           </div>
        
        <div class="departamento">
         <label for="departamentoselect">Selecciona tu departamento</label>
         <select bind:value={departamento} on:change="{cantidad}"  class="wow animate__animated animate__shakeX animate__delay-4s" name="departamentoselect" id="departamentoselect">
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
     <div class="comprar">
         <div class="informacion">
             <p id="precioText" style="font-size: 2rem; font-family: 'Open Sans', sans-serif; font-weight: 600; color: #FFFFFF;"></p>
             <p id="decuento" style="font-size: 14px; 
             font-family: 'Open Sans', sans-serif; 
             font-weight: 400;
              color: #fff;">La cotizacion se completara en WhatsApp como: <br> Tallas - Precio Bordado - Tipo de Tela - Etc</p>
         </div>
         <!-- 
         <button onclick="llamar()" style="margin-bottom: 40px; background-color: #144998; color: white; box-shadow: 0 0 20px #144998;">Llamar</button>
          -->
          {#if cantidadComprar === null || cantidadComprar === undefined}
          <div class="informacion" style="display: flex; align-items: center;
          justify-content: center;">
    
            </div>
          {:else}
          <div class="informacion" style="display: flex; align-items: center;
          justify-content: center;">
            <p id="decuento" style="
            margin: 0px 20px;
            font-size: 24px; 
            font-family: 'Open Sans', sans-serif; 
            font-weight: 400;
            color: #fff;
            padding: 40px 0px 6px;
            line-height: 40px;
             ">Cantidad: <br> {cantidadComprar} </p>
             <p id="decuento" style="
             margin: 0px 20px;
             font-size: 24px; 
             font-family: 'Open Sans', sans-serif; 
             font-weight: 400;
             color: #fff;
             padding: 40px 0px 6px;
             line-height: 40px;
              ">Precio Total: <br> {precioTotal}Bs </p>
            </div>
            <div class="informacion">
              <p id="decuento" style="
              margin: 0px 20px;
              font-size: 24px; 
              font-family: 'Open Sans', sans-serif; 
              font-weight: 400;
              color: #fff;
              padding: 40px 0px 6px;
              line-height: 40px;
               ">Para: <br> {departamento} </p>
            </div>
    
          {/if}
          
         
         <button on:click="{comprar}" id="iDcomprar" style="background-color: #20ff3e; color: white; box-shadow: 0 0 20px #20ff3e; margin-top: 30px;">Comprar</button>
         
     </div>
     
    </form>
</div>
<!-- Cotizador -->