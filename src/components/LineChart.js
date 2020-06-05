// import { Line } from 'vue-chartjs'
// // const { reactiveProp } = mixins

// export default {
//   extends: Line,
//   // mixins: [reactiveProp],
//   props: {
//     chart-data: {
//       type: Object,
//       default: null
//     },
//     options: {
//       type: Object,
//       default: null
//     }
//   },
//   mounted () {
//     // this.chartData is created in the mixin.
//     // If you want to pass options please create a local options object
//     this.renderChart(this.chartData, this.options)
//   }
// }

import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
// Line.defaults.global.defaultFontColor = 'red'
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.defaults.global.defaultFontColor = "#fff";

    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options = { responsive: true, maintainAspectRatio: false, xAxes: [{
        type: 'time',
        ticks: {
            autoSkip: true,
            maxTicksLimit: 8
        },
        legend: {
          labels: {
              fontColor: "white",
              fontSize: 18
          }
      },
      }] 
    })
  }
}