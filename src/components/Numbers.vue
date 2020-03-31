<template>
    <b-container class="bv-example-row">
        <b-row v-if="data != null">
            <b-col><h2>{{ data.cases }}</h2>Cases </b-col>
            <b-col><h2>{{ data.deaths }}</h2>Deaths </b-col>
            <b-col><h2>{{ data.recovered }}</h2>Recovered </b-col>
        </b-row>
    </b-container>
</template>


<script>
export default {
  name: 'Numbers',
  props: ["data"]
}
</script>