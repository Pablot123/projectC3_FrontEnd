<template>
  <div id="app">
    <div>
      <ul class="navbar">
        <li class="nav"><router-link class="bar" to="/home">Home</router-link></li>
        <li class="nav"><router-link class="bar" to="/consultar">Consultar</router-link></li>
        <li class="nav"><router-link class="bar" to="/reservar">Reservar</router-link></li> 
        <li class="nav"><router-link class="bar" to="/aboutus">About Us</router-link></li>
        
      </ul>
    </div>

    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  background-color: #f3f3f3;
  position: fixed;
  top: 0;
  width: 100%;
}
.nav {
  float: left;
}
.nav .bar{
  display: block;
  color: rgb(117, 114, 114);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

</style>