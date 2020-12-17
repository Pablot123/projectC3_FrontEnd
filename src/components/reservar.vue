<template>
    <div class="reservar">
        <h1>{{title}}</h1>
        <form>
            <fieldset>
                <legend>Datos del usuario</legend>
                <div class="form-group">
                    <label>Nombre: </label>
                    <input type="email" class="form-control" id="nombre_usuario" aria-describedby="emailHelp" placeholder="insert nombre">
                </div>
                <div class="form-group">
                    <label>Apellido: </label>
                    <input type="email" class="form-control" id="apellido_usuario" aria-describedby="emailHelp" placeholder="insert apellido">
                </div>
                <div class="form-group">
                    <label>Email address: </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email@example.com">
                </div>
                <div class="form-group">
                    <label >Telefono: </label>
                    <input type="email" class="form-control" id="numero_telefono" aria-describedby="emailHelp" placeholder="insert telefono">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password: </label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-group">
                    <label>Tipo de documento: </label>
                    <select class="form-control" id="tipo_documento" >
                        <option>Seleccione...</option>
                        <option>Cedula de ciudadania</option>
                        <option>Pasaporte</option>
                    </select>
                </div>
                <div class="form-group">
                    <label >Numero de documento: </label>
                    <input type="email" class="form-control" id="numero_identificacion" aria-describedby="emailHelp" placeholder="insert numero">
                </div>
            </fieldset>
            <br>
            <br>



            <fieldset class="form-group">
                <legend>datos de la reserva</legend>
                <div>
                    <ul>
                        <li>
                            <label for="start">Fecha de ingreso:</label>
                            <input type="date" id="start" name="trip-start"
                            value="2018-07-22"
                            min="2018-01-01" max="2018-12-31">
                        </li>
                        <li>
                            <label for="start">Fecha de salida:</label>
                            <input type="date" id="Out" name="trip-start"
                            value="2018-07-22"
                            min="2018-01-01" max="2018-12-31">
                        </li>
                    </ul>

                </div>
                <div class="form-group">
                    <label >Numero de adultos: </label>
                    <input type="email" class="form-control" id="cantidad_adultos" aria-describedby="emailHelp" placeholder="Cant adultos">
                </div>
                <div class="form-group">
                    <label >Numero de niños: </label>
                    <input type="email" class="form-control" id="cantidad_niños" aria-describedby="emailHelp" placeholder="Cant niños">
                </div>
            
            </fieldset>

            
    
        </form>
        <br>
        <button class="button button2">Shadow on Hover</button>

    </div>
</template>

<script>
 export default{
  name:'reservar',
  data (){
   return{
    title:'Reservar'
   }
  }
 }
</script>
<style scoped>
.reservar{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;


}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 40px;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
}
.button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
 
</style>