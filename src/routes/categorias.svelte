
<script>
       import overol from '../publico/img/categorias/overolM.png';
       import buso from '../publico/img/categorias/busoM.png';
       import chaleco from '../publico/img/categorias/chalecoM.png';
       import pantalonoverol from '../publico/img/categorias/overolBusoM.png';
       import recientes from '../publico/img/categorias/recientesM.png';
       import sombrero from '../publico/img/categorias/sombreroM.png';
       import termico from '../publico/img/categorias/termicoM.png';
</script>

<svelte:head>
	<title>Categorias</title>
</svelte:head>


   <div class="container">

       <div class="categorias">

           <div class="categoria">
            <a sveltekit:prefetch href="/categorias/recientes">
               <img src="{recientes}" alt="">
               <h2>Recientes</h2>
            </a>
           </div>
      
        
           <div class="categoria">
            <a sveltekit:prefetch href="/categorias/overol">
               <img src="{overol}" alt="">
               <h2>Overoles</h2>
            </a>
            </div>
        

     

      

    
        <div class="categoria">
            <a sveltekit:prefetch href="/especiales/termico">
            <img src="{termico}" alt="">
            <h2>Termicos</h2>
            </a>
        </div>
    

    
        <div class="categoria">
            <a sveltekit:prefetch href="/categorias/chaleco">
            <img src="{chaleco}" alt="">
            <h2>Chalecos</h2>
            </a>
        </div>
    

       

      

    
        <div class="categoria">
            <a sveltekit:prefetch href="/categorias/sombrero">
            <img src="{sombrero}" alt="">
            <h2>Sombreros</h2>
            </a>
        </div>
   

    
        <div class="categoria">
            <a sveltekit:prefetch href="/especiales/pantalon">
            <img src="{pantalonoverol}" alt="">
            <h2>Busos</h2>
        </a>
        </div>
    
       </div>


   </div>


<style>
    a:link, a:visited,  a:hover, a:active
    {
    color: #00000000;
    text-decoration: none;
    background-color: #00000000 ;
    }
    body{
        padding: 0%;
        margin: 0%;
    }
    .container{
        background: #000000;
        width: 100%;
        padding-top: 100px;
        font-family: 'Open Sans', sans-serif;
         font-weight: 800;
        
    }
    .container .categorias{
        display: flex;
        margin-bottom: 30px;
        flex-wrap: wrap;
        padding: 0px 40px;
    }

    .container .categorias .categoria{
        width: 370px;
        height: 370px;
        padding: 40px;
        margin: auto;
        text-align: center;
        align-items: center;
        justify-content: center;
        transition-duration: 200ms;
    }
    .container .categorias .categoria img{
        width: 100%;
        text-align: center;
        border-radius: 20px;
    }
    .container .categorias .categoria h2{
        margin: 1px 1px;
        text-transform: uppercase;
        color: white;
        font-size: 20px;
        letter-spacing: 2px;
    }

    .container .categorias .categoria:hover{
    background-color: rgba(27, 27, 27, 0.274);
    border: 3px solid #f4a02342;
    border-radius: 20px;
    padding: 8px;
    box-shadow: 0 0 20px #f4a0236b;
    }
    @media only screen and (max-width: 575px){
        .container .categorias{
        padding: 0px 0px;
    }
        .container .categorias .categoria{
            width: 40%; 
            height: 250px;
            padding: 0px;
            margin: auto;
    }
    }

</style>
