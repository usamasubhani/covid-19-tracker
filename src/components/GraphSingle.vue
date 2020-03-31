<template>
  <div class="small">
    <line-chart
      :chartdata="chartData"
      />
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    name: 'Chart',
    components: {
      LineChart
    },
    props: ['data'],
    // data () {
    //   return {
    //     loaded: false,
    //     chartdata: null
    //   }
    // },
    computed: {
        chartData: function() {
        console.log(this.data)
        return this.data;
        }
    },
    mounted () {
      this.datacollection = {
          labels: Object.keys(this.data.result),
          datasets: [
            {
              label: "Cases",
              backgroundColor: '#f87979',
              data: this.chartData
            }
          ]
        }
    },
    methods: {
      fillData () {
          console.log(this.data.result)
        this.datacollection = {
          labels: Object.keys(this.data.result),
          datasets: [
            {
              label: "Cases",
              backgroundColor: '#f87979',
              data: this.computeData()
            }
          ]
        }
        this.loaded = true
      },
      computeData () {
        var tempArray = []
        for (let [key, value] of Object.entries(this.data.result)) {
            console.log(key)
            tempArray.push(value.confirmed)
        }
        return tempArray
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
</style>