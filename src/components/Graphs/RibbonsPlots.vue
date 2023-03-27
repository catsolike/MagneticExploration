<template>
    <div :id="chartId"></div>
  </template>
  
  <script>
  import Plotly from 'plotly.js-dist';
  
  export default {
    props: {
      chartData: {
        type: Array,
        required: true
      },
      chartLayout: {
        type: Object,
        required: true
      },
      chartId: {
        type: String,
        default: 'myDiv'
      }
    },
    mounted() {
      const data = this.chartData;
  
      const layout = this.chartLayout;
  
      Plotly.newPlot(this.chartId, data, layout);
    }
  }
  </script>