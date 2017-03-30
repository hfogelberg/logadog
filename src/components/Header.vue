<template lang="html">
  <header>
    <ul>
      <li><h1><router-link to='/'>Petpal</router-link></h1><li>
      <li><router-link to='/about'>About</router-link></li>
      <li><router-link to='/contact'>Contact</router-link></li>
    </ul>
  </header>
</template>


<style lang="css" scoped>
  header {
    position: fixed;
    top:0;
    width: 100%;
    height: 4em;
    background-color: rgba(127, 140, 141,0.6);
    color: rgba(236, 240, 241,1.0);
  }

  header h1 {
    font-size: 1.6em;
  }

  header ul {
    margin-left: 1em;
    margin-right: 1em;
    list-style: none;
    display: flex;
    line-height: 4em;
  }

  li {
    flex: 0 0 auto;
    margin: 0.2em;
  }

  li:nth-child(1) {
    margin-right: auto;
  }

  a {
    font-size: 1.2em;
    color: rgba(236, 240, 241,1.0);
    font-weight: 300;
  }

  a:hover {
    font-size: 1.4em;
    text-decoration: none;
  }

  a:link {
    text-decoration: none;
  }

  a:visited{
    text-decoration: none;
  }

  a:focus {
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

</style>
