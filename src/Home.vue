<template>
<div>
    <Numbers :data="numbers" />
    <b-row>
        <b-col><Chart :data="dataGlobalChart"/></b-col>
        <!-- <b-col><Chart/></b-col> -->
    </b-row>
    <Table :globalData="globalData"/>
    
</div>
</template>

<script>
import Numbers from './components/Numbers.vue'
import Chart from './components/GraphSingle.vue'
import Table from './components/Table.vue'
export default {
  name: 'Home',
  components: {
    Numbers,
    Chart,
    Table
  },
  data() {
      return {
          numbers: null,
          globalData: {},
          dataGlobalChart: [10, 39, 10, 40, 39, 0, 0]
      }
  },
  created() {
      this.getGlobalCount()
      this.getGlobalData()
  },
  methods: {
      getGlobalCount() {
          fetch('https://corona.lmao.ninja/all')
          .then(response => response.json())
          .then(data => {
              this.numbers = data
          })
      },
      getGlobalData() {
        fetch('https://covidapi.info/api/v1/global/count')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.globalData = data
            this.dataGlobalChart = this.getGraphData()
        })
    },
    getGraphData() {
        var tempArray = []
        for (let [key, value] of Object.entries(this.globalData.result)) {
            console.log(key)
            tempArray.push(value.confirmed)
        }
        console.log(tempArray)
        return tempArray
    }
  }
}
</script>