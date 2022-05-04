<script>
    import '../../js/firebase.js'
    import { subirImagen } from "./subirImagen.js";
    import {db} from '../../js/firebase.js'

let files;
var nombreArchivo = 'sdsd';
var archivo;
var fileinput;
var avatar;
var horario = new Date().toString().replace(/ /g, "");
var imagenes = []

$: links = [];

var imagenesSubidas = false;
var enlacesdeImagenes = [];

//funcion que sube varias imagenes imagenes
   $: if(files){
           //capturamos los datos de todas las imagenes subidas
           //console.log(files);
            for (const file of files) {
                //hacemos un for e introducimos los datos de las imagenes en array "imagenes"
			      //console.log(file.name);
            nombreArchivo = file.name;
            archivo = file;
            imagenes.push({nombre: file.name, archivo: file})

		   }
           //luego hacemos un foreach a las imagenes activando una funcion para cada una

           imagenes.forEach(async function(imagen){
            //llamamos la funcion y le pasamos los parametros del array
           var link = await subirImagen(horario, imagen.nombre.replace(/ /g, ""), imagen.archivo)
           //hacemos un push de ;la direccion de enlace a 'enlacesdeImagenes'
           await enlacesdeImagenes.push({imagen: link});
           //copiamos "enlacesdeImagenes" en link
           links = [...enlacesdeImagenes]
      })
    }


    async function subir() {
      event.preventDefault()
      await console.log(links);
    }
</script>

<div class="container">
    <form action="/ini/subirmodelo" method="post" enctype="multipart/form-data">
        <label for="">agregue las imagenes</label> 
        <input style="color: white; display: block; margin-top: 100px" bind:files type="file" multiple="true" name="img" id="file" bind:this={fileinput}>
        <label for="">Titulo del modelo</label>
        <input style="color: white;" name="titulo" type="text" placeholder="Coloque titulo al modelo">  
        <select style="text-align: center; margin: auto; color: white;" name="categoria" id="">
            <option value="overol">Overol</option>
            <option value="chaleco">Chaleco</option>
            <option value="termico">Termico</option>
            <option value="sombrero">Sombrero</option>
            <option value="buso">Buso</option>
        </select>
        <label for="">Precio del modelo</label>
        <input style="color: white;" name="precio" type="number" placeholder="coloque el precio al modelo">
      
        <label for="">Metadatos</label>
        <input style="color: white;" name="metadatos" type="text" value="Overol - Venta Por Mayor - Evertex" placeholder="metadatos"><br>
        <label for="">Caracteristicas</label>
        <textarea style="margin: auto;" name="caracteristicas" id="" cols="30" rows="10"></textarea> 
        <p>(W) empezar y Z acabar (X)</p> 

        <input type="submit" on:click="{subir}" value="Subir">
    </form>
</div>

<style>
    label{
        margin: 30px 0px 5px;
        color: white;
    }
    input{
        margin: auto;
        color: white;
    }
    p{
        color: white;
        margin: 0px 0px 30px;
    }
    textarea{
        margin: 0px;
        color: white;
    }
    .container{
        margin: auto;
        text-align: center;
    }
    .imagenesSubidas{
        display: flex;
    }
    .enlacespintados{
        width: 50%;
        margin: 0px 20px;
    }
</style>