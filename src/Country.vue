<template>
<div>
    <div class="select">
                <select v-model="selected" @change="getCountryData()">
                    <option 
                    v-for="country in countries"
                    v-bind:value="country"
                    v-bind:key="country">
                        {{ country }}
                    </option>
                </select>
    </div>
    <Numbers :data="numbers" />

    <b-row>
        <b-col>
            <b-row><Chart :data="countryHistory" :type="'cases'"/></b-row>
            <b-row><Chart :data="countryHistory" :type="'deaths'"/></b-row>
        </b-col>
        <b-col class="country-info">
            <b-row><h2>{{ selected }}</h2></b-row>
            <b-row><img :src="countryFlag" alt=""></b-row><br>
            <b-row><h4>More Info to be added</h4></b-row>

        </b-col>
    </b-row>
    
    <Table v-if="countryHistory != null" :globalData="countryHistory"/>
    
</div>
</template>

<script>
import Numbers from './components/Numbers.vue'
import Chart from './components/GraphSingle.vue'
import Table from './components/Table.vue'
export default {
  name: 'Country',
  components: {
    Numbers,
    Chart,
    Table
  },
  data() {
      return {
          numbers: null,
          countries: [],
          globalData: {},
          countryData: null,
          countryHistory: null,
          selected: "Pakistan",
          selectedISO3: "",
          countryFlag: "",
          countryInfo: {},
          dataCountryChart: [10, 39, 10, 40, 39, 0, 0]
      }
  },
  created() {
      this.getCountryNames()
      this.getCountryData()
    //   this.getGlobalData()
  },
  methods: {
      getCountryNames() {
          fetch('https://corona.lmao.ninja/v2/countries?sort=country')
          .then(response => response.json())
          .then(data => {
              this.globalData = data
              this.countryData = data[this.selected]
              data.forEach(country => {
                  this.countries.push(country.country)
              });
          })
      },
      getCountryData() {
          fetch(`https://corona.lmao.ninja/v2/countries/${this.selected}`)
          .then(response => response.json())
          .then(data => {
              this.countryData = data
              this.countryInfo = data.countryInfo
              this.countryFlag = data.countryInfo.flag
              this.selectedISO3 = data.countryInfo.iso3
              this.getCountryHistory()
          })
        //   fetch(`https://covidapi.info/api/v1/country/${this.selected}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         var rawJson = data
        //         this.numbers = rawJson.result[Object.keys(rawJson.result)[Object.keys(rawJson.result).length-1]]
        //         console.log(this.numbers)
        //         // console.log(this.rawJson.result[0].values())
                
        //     })
      },
      getCountryHistory() {
          fetch(`https://covidapi.info/api/v1/country/${this.selectedISO3}`)
          .then(response => response.json())
          .then(data => {
              console.log(data)
              this.countryHistory = data
              this.numbers = data.result[Object.keys(data.result)[Object.keys(data.result).length-1]]
          })
      },
    getGraphData() {
        var tempArray = []
        for (let [key, value] of Object.entries(this.globalData.result)) {
            console.log(key)
            tempArray.push(value.confirmed)
        }
        // console.log(tempArray)
        return tempArray
    }
  }
}
</script>

<style scoped>
select{
    color:aquamarine;
    background-color: #1f2424;
    
}
.select{
    margin-top:  50px;
}
.country-info * {
    /* max-width: 600px; */
    margin:  10px auto;
    /* padding: 50px; */
    /* border: black 3px solid; */
}
</style>