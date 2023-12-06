<template>
  <nav>
    <!-- to属性指向router/index.js中的path -->
    <router-link to="/">Events</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <!-- 被router/index.js中的component替代 -->
  <!-- 用来显示客户端路由切换过来的页面 -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
