<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/Register">Register</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
*{
    margin: 0;
    padding: 0;
}

html,body{height: 100%;}
body{
    display: grid;
    background: url("../public/11.jpg") no-repeat center/cover;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #612830;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #42b983;
    text-decoration: none;

    &.router-link-exact-active {
      color: #a72b69;
    }
  }
}
</style>
