<template>
<div class="section">
    <table class="table table-dark hover" v-if="globalData != null">
        <thead>
            <th>Date</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
        </thead>
        <tbody>
            <tr v-for="(row, name) in globalData.result" :key="row">
                <td>{{ name }}</td>
                <td v-for="cols in row" :key="cols">{{ cols.toLocaleString('en') }}</td>
            </tr>
        </tbody>
    </table>
</div>    
</template>

<script>
export default {
  name: 'Table',
  props: ["globalData"],
  mounted() {
      this.globalData.slice().reverse()
  }
}
</script>

<style>
  .section {
    max-width: 800px;
    margin:  150px auto;
  }
  .table-dark{
    background-color: #111111;
  }
</style>