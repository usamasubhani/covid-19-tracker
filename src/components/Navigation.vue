<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item href="#"><router-link to="/country">Country</router-link></b-nav-item>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>