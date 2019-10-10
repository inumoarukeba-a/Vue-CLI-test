<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div class="wrapper">
      <main class="main" role="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style>
</style>
