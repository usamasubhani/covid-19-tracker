<template>
<div class="section">
    <table class="table table-dark striped hover" v-if="globalData != null">
        <thead>
            <th>Date</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
        </thead>
        <tbody>
            <tr v-for="(row, name) in globalData.result" :key="name">
                <td>{{ name }}</td>
                <td v-for="cols in row" :key="cols">{{ cols }}</td>
            </tr>
        </tbody>
    </table>
</div>    
</template>

<script>
export default {
  name: 'Table',
  props: ["globalData"]
}
</script>