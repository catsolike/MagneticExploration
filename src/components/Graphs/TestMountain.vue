<template>
<div ref="plot"
      class="mountain-style"
></div>
</template>

<script>
import Plotly from 'plotly.js-dist';

export default {
  name: 'test-mountain',
    
  props: {
    items: Array,
  },
  mounted() {
    this.createGraph();
  },
  data() {
    return {
      xData: Array(this.items.map(item => Number(item.x))),
      yData: Array(this.items.map(item => Number(item.y))),
      zData: Array(this.items.map(item => Number(item.induction))),
    }
  },
  methods: {
    createGraph() {
      const data = [
        {
          x: this.xData[0],
          y: this.yData[0],
          z: this.zData[0],
            

          type: 'surface',
        
          contours: {
            z: {
              show: true,
              usecolormap: true,
              highlightcolor: '#42f462',
              project: { z: true },
            },
          },
      
          colorscale: 'Viridis',
        },
      ];

      const layout = {
        paper_bgcolor: "rgba(0,0,0,0)",
        autosize: true,
        scene: {
          xaxis: { title: 'X Axis' },
          yaxis: { title: 'Y Axis' },
          zaxis: { title: 'Z Axis' },
        },
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
        },
      };

      Plotly.newPlot(this.$refs.plot, data, layout);
    },
  }
};

</script>

<style lang="scss">

</style>