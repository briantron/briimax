<script>
    import '../../js/firebase.js'
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    import { goto } from '$app/navigation';
    var usuario, clave;
    
 
    function iniciarSession() {
        event.preventDefault();
        console.log(usuario + '   ' + clave  );
        const auth = getAuth();
        signInWithEmailAndPassword(auth, usuario, clave)
        .then((userCredential) => {
         // Signed in
         const user = userCredential.user;
         console.log(user);
         goto(`/admin/home`)
          // ...
         })
          .catch((error) => {
       const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorMessage, errorCode);
  });
    }
</script>

<div class="iniciar" style="padding-top: 100px;">
    <form action="">
        <label style="margin-top: 30px; color: white;" for="">Correo</label>
        <input bind:value="{usuario}" style="color: white;" type="text" placeholder="Coloque su correo electronico">
        <label style="margin-top: 30px; color: white;" for="">Clave</label>
        <input bind:value="{clave}" style="color: white;" type="text" placeholder="coloque su contrasena">
        <input type="submit" on:click="{iniciarSession}" value="Iniciar Session">
    </form>
</div>
<style>
    input{
        text-align: center;
        margin: auto;
    }
    label{
        margin: auto;
        text-align: center;
    }
    .iniciar{
        margin: auto;
        text-align: center;
    }
</style>