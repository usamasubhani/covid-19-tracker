<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    name: 'Chart',
    components: {
      LineChart
    },
    props: ['data','type'],
    data () {
      return {
        datacollection: {}
      }
    },
    computed: {
        chartData: function() {
        console.log(this.data)
        return this.data;
        }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: Object.keys(this.data.result),
          datasets: [
            {
              label: this.type[0].toUpperCase() + this.type.slice(1),
              // backgroundColor: '#f87979', //TODO: Add gradient in background
              backgroundColor: 'rgba(253, 1, 1, 0.2)',
              borderColor: 'rgba(253, 1, 1, 0.2)', 
              // pointBackgroundColor: 'red', 
              borderWidth: 1, 
              pointBorderColor: 'rgba(253, 1, 1, 0.5)',
              data: this.computeData(),
            }
          ]
        }
      },
      computeData () {
        var tempArray = []
        for (let [key, value] of Object.entries(this.data.result)) {
            console.log(key)
            if (this.type == 'cases'){
            tempArray.push(value.confirmed)
            } else if (this.type == 'deaths'){
              tempArray.push(value.deaths)
            }
        }
        return tempArray
      }
    },
    watch: {
    data: function() {
      this.fillData()
    }
  }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  50px auto;
  }
</style>