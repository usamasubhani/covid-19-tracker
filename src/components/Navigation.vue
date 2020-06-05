<template>
  <!-- <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/country">Country</router-link></b-nav-item>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar> -->
  <div>
  <b-navbar class="nav" toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Coronavirus Tracker</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Global</b-nav-item>
        <b-nav-item to="/country">Country</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://github.com/usamasubhani/covid-19-tracker">Source Code</b-nav-item>
        <b-nav-item href="https://www.youtube.com/watch?v=xVEfZbS70Mw">Build Timelapse</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<style>
.nav{
  background-color: #111111 !important
}
</style>