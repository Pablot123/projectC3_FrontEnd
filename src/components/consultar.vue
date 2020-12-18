<template>
    <div class="consultar">
        <img src="../assets/logo6.png">

        <br>
        <h2>Consultar reserva</h2>
        <ul>
            <fieldset class="form-group">
                <legend>Datos de la reserva</legend>
                <div>
                    <ul>
                        <li>
                            <label >Ingrese su email:</label>
                            <input type="text" id="email">
                        </li>
                        <li>
                            <label >Numero de identificacion:</label>
                            <input type="text" id="num_identificacion">
                        </li>
                    </ul>

                </div>
                
            </fieldset>
        </ul>

        <input type="button" value="Consultar disponibilidad">
        <br>
        <br>

        <ul>
            <li>
                <a class="dos" href="http://www.facebook.com/" target="_blank">
                <img alt="Siguenos en Facebook" src="https://lh6.googleusercontent.com/-CYt37hfDnQ8/T3nNydojf_I/AAAAAAAAAr0/P5OtlZxV4rk/s32/facebook32.png" width=40 height=40  />
                </a>
            </li>
            <li>
                <a class="dos" href="https://www.instagram.com/" target="_blank">
                <img alt="Siguenos en Blogger" src="https://lh5.googleusercontent.com/-vBqtz2iv2BE/UIqE3LQyFMI/AAAAAAAABgA/TJ4W-vIBjsc/s32/instagram32.png" width=40 height=40  />
                </a>
            </li>
            <li>
                <a class="dos" href="https://www.tripadvisor.com/" target="_blank">
                <img alt="Siguenos en Blogger" src="https://www.marquesdeguadiaro1.com/wp-content/uploads/tirpadvisor-marques-guadiaro1-malaga.png" width=50 height=40  />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
 export default{
  name:'consultar',
  data (){
   return{
    title:'Consultar'
   }
  }
 }
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 40px;
}
.dos {
  color: #42b983;
}
label {
    display: block;
    font: 1rem 'Fira Sans', sans-serif;
}

input,
label {
    margin: .4rem 0;
}
 
</style>
