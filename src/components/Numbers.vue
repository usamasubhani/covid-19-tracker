<template>
    <b-container class="bv-example-row">
        <b-row v-if="data != null">
            <b-col><h1 v-if="data.cases" >{{ data.cases.toLocaleString('en') }}</h1> <h1 v-else>{{data.confirmed.toLocaleString('en') }}</h1>Cases </b-col>
            <b-col><h1>{{ data.deaths.toLocaleString('en') }}</h1>Deaths </b-col>
            <b-col><h1>{{ data.recovered.toLocaleString('en') }}</h1>Recovered </b-col>
        </b-row>
    </b-container>
</template>


<script>
export default {
  name: 'Numbers',
  props: ["data"]
}
</script>


<style>
  .bv-example-row {
    /* max-width: 600px; */
    margin-top:  70px;
  }
</style>