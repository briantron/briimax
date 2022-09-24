    <script>

        import '../publico/style/main.css'
        import '../publico/style/base.css'
        import logo from '../publico/img/evertexLogo.png';
        import '../js/firebase.js'
        import { getAuth, onAuthStateChanged } from "firebase/auth";

        var session = false;

        const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    session = true;
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    session = false;
  }
});
        var session = false;

        var estadoMenu = "body"
        function AbrirMenu(){
           estadoMenu = "body menu-is-open"
        }
        function CerrarMenu(){
           estadoMenu = "body"
        }

 
        

    </script>
    
    <body class="{estadoMenu}">
    <!-- header
    ================================================== -->
    <header class="s-header">
        <div  class="header-logo">
            <a class="site-logo" href="/">
                <img id="imglogo" src="{logo}" width="50" alt="Pagina De Inicio">
            </a>
        </div>

        <nav class="header-nav">

            <p class="header-nav__close" on:click={CerrarMenu} title="close"><span>Cerrar</span></p>

            <div class="header-nav__content">
                <h3>Menu</h3>
                <!--    <li class="current"><a href="/" on:click={CerrarMenu} title="inicio">inicio</a></li>
                    <li><a href="/categorias" on:click={CerrarMenu} title="catalogo">Categorias</a></li>
                    <li><a href="https://grupoempresarialevertex.herokuapp.com/contacto" on:click={CerrarMenu} title="contactanos">Contactanos </a></li>

                    {#if session}
                    <li><a href="/admin/home" on:click={CerrarMenu} title="admin">Administrar</a></li>
                    {/if} -->
                <ul class="header-nav__list">
                 
                    <li><a href="/modelos_especiales/carrera" on:click={CerrarMenu} title="catalogo">Modelo Legionario</a></li>
                </ul>
                <p id="textoInf"></p>
            </div> <!-- end header-nav__content -->

        </nav>  <!-- end header-nav -->
        
        
    
        <p class="header-menu-toggle opaque" on:click={AbrirMenu}>
            <span class="header-menu-text">Menu</span>
            <span class="header-menu-icon"></span>
        </p>
     
        
    </header> <!-- end s-header -->

    <div class="contenedorPadre" on:click={CerrarMenu}>
        <slot></slot>
    </div>
</body>

<style>
    .s-header{
        background-color: black;
    }

    .s-header .header-logo a{
        width: 120px;
    }
    .contenedorPadre{
        background-color: black;
    }
    a.active {
		color: rgb(216, 250, 23);
	}
	main {
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}
    .s-header{
        background-color: black;
    }
    .contenedorPadre{
        margin-top: 97px;
     
    }
    #imglogo{
        width: 200px;
        height: 30px;
    }
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
